namespace AppProfProPartage.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class t : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.FicheCours", "NombreVote", c => c.Int(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.FicheCours", "NombreVote");
        }
    }
}
