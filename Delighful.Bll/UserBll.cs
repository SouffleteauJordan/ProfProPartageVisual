using ProfProPartage.Dal;
using ProfProPartage.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.Entity;
using System.Linq.Expressions;
using ProfProPartage.ViewModel.Model;

namespace ProfProPartage.Bll
{
    public class UserBll
    {

        private DbContextProfProPartage context;
        
        public UserBll(BusinessLocator p_BusinessLocator)
        {
            context = (DbContextProfProPartage) p_BusinessLocator.DbContext;
        }

        public List<ApplicationUser> GetAllUsers()
        {
            return context.Users.ToList();
        }

        public Task<List<ApplicationUser>> GetAllUsersAsync()
        {
            return context.Users.ToListAsync();
        }

        public ApplicationUser GetUsersByCriteria(Func<ApplicationUser, bool> predicat)
        {
            return context.Users.Where(predicat).ToList().First();
        }

        public Task<List<ApplicationUser>> GetUsersByCriteriaAsync(Expression<Func<ApplicationUser, bool>> predicat)
        {
            return context.Users.Where(predicat).ToListAsync();
        }

        public void AddUsers(ApplicationUser user)
        {
            try
            {
                context.Users.Add(user);
                context.SaveChanges();
            }
            catch (Exception e)
            {
                System.Diagnostics.Debug.WriteLine(e.Message);
                throw e;
            }

        }

        public Task<int> AddUsersAsync(ApplicationUser user)
        {
            try
            {
                context.Users.Add(user);
                return context.SaveChangesAsync();
            }
            catch (Exception e)
            {
                System.Diagnostics.Debug.WriteLine(e.Message);
                throw e;
            }

        }
        

        public void DeleteUsers(string email)
        {
            try
            {
                try
                {

                    var user = context.Users.Where(x => x.Email == email).First();
                    
                    context.SaveChanges();

                    context.Entry(user).State = EntityState.Deleted;

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

        public async Task DeleteUsersAsync(string email)
        {
            try
            {
                var user = await context.Users.Where(x => x.Email == email).FirstAsync();
                
                await context.SaveChangesAsync();

                context.Entry(user).State = EntityState.Deleted;

                await context.SaveChangesAsync();
            }
            catch (Exception e)
            {
                System.Diagnostics.Debug.WriteLine(e.Message);
                throw e;
            }
        }


        public void UpdateUsers(ApplicationUser user)
        {
            try
            {
                context.Entry(user).State = EntityState.Modified;
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
