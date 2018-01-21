namespace AppProfProPartage.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class test : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.AspNetUsers", "Nom", c => c.String());
            AddColumn("dbo.AspNetUsers", "Prenom", c => c.String());
            AddColumn("dbo.AspNetUsers", "DateNaissance", c => c.DateTime(nullable: false));
            AddColumn("dbo.AspNetUsers", "DateInscription", c => c.DateTime(nullable: false));
            AddColumn("dbo.AspNetUsers", "NombreFicheUpload", c => c.Int(nullable: false));
            AddColumn("dbo.AspNetUsers", "Experience", c => c.Int(nullable: false));
            AddColumn("dbo.AspNetUsers", "Level", c => c.Int(nullable: false));
            AddColumn("dbo.AspNetUsers", "Titre", c => c.Int(nullable: false));
            AddColumn("dbo.AspNetUsers", "NombreTelechargement", c => c.Int(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.AspNetUsers", "NombreTelechargement");
            DropColumn("dbo.AspNetUsers", "Titre");
            DropColumn("dbo.AspNetUsers", "Level");
            DropColumn("dbo.AspNetUsers", "Experience");
            DropColumn("dbo.AspNetUsers", "NombreFicheUpload");
            DropColumn("dbo.AspNetUsers", "DateInscription");
            DropColumn("dbo.AspNetUsers", "DateNaissance");
            DropColumn("dbo.AspNetUsers", "Prenom");
            DropColumn("dbo.AspNetUsers", "Nom");
        }
    }
}
