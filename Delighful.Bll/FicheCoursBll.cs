using ProfProPartage.Dal;
using ProfProPartage.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.Entity;
using System.Linq.Expressions;
using System.IO;

namespace ProfProPartage.Bll
{
    public class FicheCoursBll
    {

        private DbContextProfProPartage context;
        
        public FicheCoursBll(BusinessLocator p_BusinessLocator)
        {
            context = (DbContextProfProPartage) p_BusinessLocator.DbContext;
        }

        public List<FicheCours> GetAllFicheCours()
        {
            List<FicheCours> listFiche = context.Fiches.ToList();
            foreach (var item in listFiche)
            {
                item.User = context.Users.Where(o => o.Id == item.UserId).First();
            }
            return listFiche;
        }

        public List<FicheCours> GetMesFicheCours(string id)
        {
            List<FicheCours> listFiche = context.Fiches.Where(o => o.UserId == id).ToList();
            foreach (var item in listFiche)
            {
                item.User = context.Users.Where(o => o.Id == item.UserId).First();
            }
            return listFiche;
        }

        public Task<List<FicheCours>> GetAllFicheCoursAsync()
        {
            return context.Fiches.ToListAsync();
        }

        public Task<List<FicheCours>> GetMesFicheCoursAsync(string id)
        {
            return context.Fiches.Where(o => o.UserId == id).ToListAsync();
        }

        public List<FicheCours> GetFicheCoursByCriteria(Func<FicheCours, bool> predicat)
        {
            return context.Fiches.Where(predicat).ToList();
        }

        public Task<List<FicheCours>> GetFicheCoursByCriteriaAsync(Expression<Func<FicheCours, bool>> predicat)
        {
            return context.Fiches.Where(predicat).ToListAsync();
        }

        public List<FicheCours> GetFicheCoursByKeywords(string[] list_selected_keywords)
        {
            var query = context.Fiches.Where(x => list_selected_keywords.All(y => x.Keywords.Select(z => z.Word).Contains(y)));
            return query.ToList();
        }

        public Task<List<FicheCours>> GetFicheCoursByKeywordsAsync(string[] list_selected_keywords)
        {
            var query = context.Fiches.Where(x => list_selected_keywords.All(y => x.Keywords.Select(z => z.Word).Contains(y)));
            return query.ToListAsync();
        }

        public void AddFicheCours(FicheCours fic)
        {
            try
            {
                context.Fiches.Add(fic);
                context.SaveChanges();
            }
            catch (Exception e)
            {
                System.Diagnostics.Debug.WriteLine(e.Message);
                throw e;
            }

        }

        public Task<int> AddFicheCoursAsync(FicheCours fic)
        {
            try
            {
                context.Fiches.Add(fic);
                return context.SaveChangesAsync();
            }
            catch (Exception e)
            {
                System.Diagnostics.Debug.WriteLine(e.Message);
                throw e;
            }

        }
        

        public void DeleteFicheCours(int id)
        {
            try
            {
                try
                {

                    var fic = context.Fiches.Where(x => x.Id == id).First();
                    context.Entry(fic).State = EntityState.Deleted;
                    if (File.Exists(fic.UrlJPG))
                        File.Delete(fic.UrlJPG);
                    if (File.Exists(fic.UrlPDF))
                        File.Delete(fic.UrlPDF);
                    context.SaveChanges();
                }
                catch (Exception e)
                {
                    System.Diagnostics.Debug.WriteLine(e.Message);
                    throw e;
                }
            }
            catch (Exception e)
            {
                System.Diagnostics.Debug.WriteLine(e.Message);
                throw e;
            }
        }

        public async Task DeleteFicheCoursAsync(int id)
        {
            try
            {
                var fic = await context.Fiches.Where(x => x.Id == id).FirstAsync();

                var keywords = fic.Keywords.ToList();

                context.Entry(keywords[0]).State = EntityState.Deleted;
                context.Entry(keywords[1]).State = EntityState.Deleted;
                context.Entry(keywords[2]).State = EntityState.Deleted;

                await context.SaveChangesAsync();

                context.Entry(fic).State = EntityState.Deleted;

                await context.SaveChangesAsync();
            }
            catch (Exception e)
            {
                System.Diagnostics.Debug.WriteLine(e.Message);
                throw e;
            }
        }


        public void UpdateFicheCours(FicheCours fic)
        {
            try
            {
                context.Entry(fic).State = EntityState.Modified;
                context.SaveChanges();
            }
            catch (Exception e)
            {
                System.Diagnostics.Debug.WriteLine(e.Message);
                throw e;
            }
        }

    }
}
