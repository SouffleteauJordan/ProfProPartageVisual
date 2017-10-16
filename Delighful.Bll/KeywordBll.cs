using ProfProPartage.Dal;
using ProfProPartage.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.Entity;

namespace ProfProPartage.Bll
{
    public class KeywordBll
    {
        private DbContextProfProPartage context;

        public KeywordBll(BusinessLocator p_businessLocator)
        {
            context = (DbContextProfProPartage) p_businessLocator.DbContext;
        }
        
        public List<Keyword> GetBookmarksByCriteria(string term)
        {
            return context.Keywords.Where(x => x.Word.StartsWith(term)).ToList();
        }

        public async Task<List<Keyword>> GetBookmarksByCriteriaAsync(string term)
        {
            return await context.Keywords.Where(x=>x.Word.StartsWith(term)).ToListAsync();
        }
    }
}
