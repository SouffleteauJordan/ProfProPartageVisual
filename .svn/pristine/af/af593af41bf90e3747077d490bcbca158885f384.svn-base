using ProfProPartage.Dal;
using ProfProPartage.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.Entity;
using System.Linq.Expressions;

namespace ProfProPartage.Bll
{
    public class FicheCoursInvalideBll
    {

        private DbContextProfProPartage context;
        
        public FicheCoursInvalideBll(BusinessLocator p_BusinessLocator)
        {
            context = (DbContextProfProPartage) p_BusinessLocator.DbContext;
        }

        public List<FicheCoursInvalide> GetAllFicheCoursInvalide()
        {
            if(context.FichesInvalide.Count() != 0)
                return context.FichesInvalide.ToList();
            return null;
        }

        public Task<List<FicheCoursInvalide>> GetAllFicheCoursInvalideAsync()
        {
            return context.FichesInvalide.ToListAsync();
        }

        public List<FicheCoursInvalide> GetFicheCoursInvalideByCriteria(Func<FicheCoursInvalide, bool> predicat)
        {
            return context.FichesInvalide.Where(predicat).ToList();
        }

        public Task<List<FicheCoursInvalide>> GetFicheCoursInvalideByCriteriaAsync(Expression<Func<FicheCoursInvalide, bool>> predicat)
        {
            return context.FichesInvalide.Where(predicat).ToListAsync();
        }

        public List<FicheCoursInvalide> GetFicheCoursInvalideByKeywords(string[] list_selected_keywords)
        {
            var query = context.FichesInvalide.Where(x => list_selected_keywords.All(y => x.Keywords.Select(z => z.Word).Contains(y)));
            return query.ToList();
        }

        public Task<List<FicheCoursInvalide>> GetFicheCoursInvalideByKeywordsAsync(string[] list_selected_keywords)
        {
            var query = context.FichesInvalide.Where(x => list_selected_keywords.All(y => x.Keywords.Select(z => z.Word).Contains(y)));
            return query.ToListAsync();
        }

        public void AddFicheCoursInvalide(FicheCoursInvalide ficI)
        {
            try
            {
                context.FichesInvalide.Add(ficI);
                context.SaveChanges();
            }
            catch (Exception e)
            {
                System.Diagnostics.Debug.WriteLine(e.Message);
                throw e;
            }

        }

        public Task<int> AddFicheCoursInvalideAsync(FicheCoursInvalide ficI)
        {
            try
            {
                context.FichesInvalide.Add(ficI);
                return context.SaveChangesAsync();
            }
            catch (Exception e)
            {
                System.Diagnostics.Debug.WriteLine(e.Message);
                throw e;
            }

        }
        public void ValiderFiche(int id)
        {
            try
            {
                try
                {

                    var ficI = context.FichesInvalide.Where(x => x.Id == id).First();
                    var keywords = ficI.Keywords.ToList();
                    FicheCoursInvalide ficInvalide = context.Entry(ficI).Entity;
                    //List<Keyword> Key = context.Entry(keywords).Entity;

                    context.Fiches.Add(new FicheCours() { Id = ficInvalide.Id, Description = ficInvalide.Description, Matiere = ficInvalide.Matiere, Niveau = ficInvalide.Niveau, Temperature = ficInvalide.Temperature, Theme = ficInvalide.Theme, Titre = ficInvalide.Titre, UrlJPG = ficInvalide.UrlJPG, UrlPDF = ficInvalide.UrlPDF, User = ficInvalide.User, UserId = ficInvalide.UserId });
                    DeleteFicheCoursInvalide(id);
                    //context.Keywords.AddRange(Key);

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
        public void RefuserFiche(int id)
        {
            DeleteFicheCoursInvalide(id);
        }


        public void DeleteFicheCoursInvalide(int id)
        {
            try
            {
                try
                {

                    var ficI = context.FichesInvalide.Where(x => x.Id == id).First();

                    /*
                    var keywords = ficI.Keywords.ToList();

                    context.Entry(keywords[0]).State = EntityState.Deleted;
                    context.Entry(keywords[1]).State = EntityState.Deleted;
                    context.Entry(keywords[2]).State = EntityState.Deleted;
                    context.SaveChanges();
                    */

                    context.Entry(ficI).State = EntityState.Deleted;

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

        public async Task DeleteFicheCoursInvalideAsync(int id)
        {
            try
            {
                var ficI = await context.FichesInvalide.Where(x => x.Id == id).FirstAsync();

                var keywords = ficI.Keywords.ToList();

                context.Entry(keywords[0]).State = EntityState.Deleted;
                context.Entry(keywords[1]).State = EntityState.Deleted;
                context.Entry(keywords[2]).State = EntityState.Deleted;

                await context.SaveChangesAsync();

                context.Entry(ficI).State = EntityState.Deleted;

                await context.SaveChangesAsync();
            }
            catch (Exception e)
            {
                System.Diagnostics.Debug.WriteLine(e.Message);
                throw e;
            }
        }


        public void UpdateFicheCoursInvalide(FicheCoursInvalide ficI)
        {
            try
            {
                context.Entry(ficI).State = EntityState.Modified;
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
