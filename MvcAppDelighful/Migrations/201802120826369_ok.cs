namespace AppProfProPartage.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class ok : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.AspNetUsers", "DateDebutCarriere", c => c.DateTime(nullable: false));
            AddColumn("dbo.AspNetUsers", "Pseudo", c => c.String());
            AddColumn("dbo.AspNetUsers", "Departement", c => c.Int(nullable: false));
            AddColumn("dbo.AspNetUsers", "Classe", c => c.Int(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.AspNetUsers", "Classe");
            DropColumn("dbo.AspNetUsers", "Departement");
            DropColumn("dbo.AspNetUsers", "Pseudo");
            DropColumn("dbo.AspNetUsers", "DateDebutCarriere");
        }
    }
}
