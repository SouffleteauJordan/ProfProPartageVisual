using ProfProPartage.Bll;
using ProfProPartage.Dal;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProfProPartage.Bll
{
    public class BusinessLocator
    {

        private DbContextProfProPartage _dbContextProfProPartage;

        public DbContext DbContext
        {
            get
            {
                if (_dbContextProfProPartage == null)
                { _dbContextProfProPartage = new DbContextProfProPartage(); }
                return _dbContextProfProPartage;
            }

        }

        private FicheCoursBll _ficheCoursBll;

        public FicheCoursBll FicheCoursBll
        {
            get
            {
                if (_ficheCoursBll == null)
                {
                    _ficheCoursBll = new FicheCoursBll(this);
                }
                return _ficheCoursBll;
            }

        }

        private FicheCoursInvalideBll _ficheCoursInvalideBll;

        public FicheCoursInvalideBll FicheCoursInvalideBll
        {
            get
            {
                if (_ficheCoursInvalideBll == null)
                {
                    _ficheCoursInvalideBll = new FicheCoursInvalideBll(this);
                }
                return _ficheCoursInvalideBll;
            }

        }


        private KeywordBll _keywordBll;

        public KeywordBll KeywordBll
        {
            get
            {
                if (_keywordBll == null)
                {
                    _keywordBll = new KeywordBll(this);
                }
                return _keywordBll;
            }

        }
    }
}
