namespace AppProfProPartage.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class InitialCreate : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.FicheCours", "DateNaissance", c => c.DateTime(nullable: false));
            AddColumn("dbo.FicheCours", "DateDebutCarriere", c => c.DateTime(nullable: false));
            AddColumn("dbo.FicheCours", "Pseudo", c => c.String());
            AddColumn("dbo.FicheCours", "Departement", c => c.Int(nullable: false));
            AddColumn("dbo.FicheCours", "Classe", c => c.String());
            AddColumn("dbo.AspNetUsers", "DateDebutCarriere", c => c.DateTime(nullable: false));
            AddColumn("dbo.AspNetUsers", "Pseudo", c => c.String());
            AddColumn("dbo.AspNetUsers", "Departement", c => c.Int(nullable: false));
            AddColumn("dbo.AspNetUsers", "Classe", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.AspNetUsers", "Classe");
            DropColumn("dbo.AspNetUsers", "Departement");
            DropColumn("dbo.AspNetUsers", "Pseudo");
            DropColumn("dbo.AspNetUsers", "DateDebutCarriere");
            DropColumn("dbo.FicheCours", "Classe");
            DropColumn("dbo.FicheCours", "Departement");
            DropColumn("dbo.FicheCours", "Pseudo");
            DropColumn("dbo.FicheCours", "DateDebutCarriere");
            DropColumn("dbo.FicheCours", "DateNaissance");
        }
    }
}
