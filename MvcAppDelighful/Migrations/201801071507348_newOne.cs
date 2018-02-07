namespace AppProfProPartage.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class newOne : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.AspNetUsers", "Titre", c => c.String());
        }
        
        public override void Down()
        {
            AlterColumn("dbo.AspNetUsers", "Titre", c => c.Int(nullable: false));
        }
    }
}
