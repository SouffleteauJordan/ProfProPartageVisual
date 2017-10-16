namespace AppProfProPartage.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class df : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.FicheCoursInvalide", "UrlPDF", c => c.String());
            AddColumn("dbo.FicheCoursInvalide", "UrlJPG", c => c.String());
            DropColumn("dbo.FicheCoursInvalide", "Url");
        }
        
        public override void Down()
        {
            AddColumn("dbo.FicheCoursInvalide", "Url", c => c.String());
            DropColumn("dbo.FicheCoursInvalide", "UrlJPG");
            DropColumn("dbo.FicheCoursInvalide", "UrlPDF");
        }
    }
}
