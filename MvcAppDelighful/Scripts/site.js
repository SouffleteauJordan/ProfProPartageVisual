// Write your Javascript code.
var niv = "all";
var mat = "all";
var the = "all";

var Matiere_List2 = [
    ["Francais", "Maths", "Anglais", "Decouverte du monde", "Sport", "Instruction civique et morale", "Pratique et histoire des arts", "Jeux educatifs", "Outils", "Evenements de l'annee"],
    ["Francais", "Maths", "Anglais", "Decouverte du monde", "Sport", "Instruction civique et morale", "Pratique et histoire des arts", "Jeux educatifs", "Outils", "Evenements de l'annee"],
    ["Francais", "Maths", "Anglais", "Geographie", "Sport", "Instruction civique et morale", "Pratique et histoire des arts", "Sciences", "Histoire", "Jeux educatifs", "Evenements de l'annee", "Outils"],
    ["Francais", "Maths", "Anglais", "Geographie", "Sport", "Instruction civique et morale", "Pratique et histoire des arts", "Sciences", "Histoire", "Jeux educatifs", "Evenements de l'annee", "Outils"],
    ["Francais", "Maths", "Anglais", "Geographie", "Sport", "Instruction civique et morale", "Pratique et histoire des arts", "Sciences", "Histoire", "Jeux educatifs", "Evenements de l'annee", "Outils"],
];



var Niveau_List = [
    { key: 'CP', data: 'CP' },
    { key: 'CE1', data: 'CE1' },
    { key: 'CE2', data: 'CE2' },
    { key: 'CM1', data: 'CM1' },
    { key: 'CM2', data: 'CM2' }
];

var Matiere_List = [
      { niv1: 'CP', niv2: 'CE1', niv3: 'CE2', niv4: 'CM1', niv5: 'CM2', data: "Anglais", key: "Anglais" },
      { niv1: 'CP', niv2: 'CE1', niv3: 'CE2', niv4: '', niv5: '', data: "Decouverte du monde", key: "Decouverte_du_monde" },
      { niv1: 'CP', niv2: 'CE1', niv3: 'CE2', niv4: 'CM1', niv5: 'CM2', data: "Evenements de l'annee", key: "Evenements_de_lannee" },
      { niv1: 'CP', niv2: 'CE1', niv3: 'CE2', niv4: 'CM1', niv5: 'CM2', data: "Francais", key: "Francais" },
      { niv1: '', niv2: '', niv3: '', niv4: 'CM1', niv5: 'CM2', data: "Geographie", key: "Geographie" },
      { niv1: '', niv2: '', niv3: '', niv4: 'CM1', niv5: 'CM2', data: "Histoire", key: "Histoire" },
      { niv1: 'CP', niv2: 'CE1', niv3: 'CE2', niv4: 'CM1', niv5: 'CM2', data: "Instruction civique et morale", key: "Instruction_civique_et_morale" },
      { niv1: 'CP', niv2: 'CE1', niv3: 'CE2', niv4: 'CM1', niv5: 'CM2', data: "Jeux educatifs", key: "Jeux_educatifs" },
      { niv1: 'CP', niv2: 'CE1', niv3: 'CE2', niv4: 'CM1', niv5: 'CM2', data: "Maths", key: "Maths" },
      { niv1: 'CP', niv2: 'CE1', niv3: 'CE2', niv4: 'CM1', niv5: 'CM2', data: "Outils", key: "Outils" },
      { niv1: 'CP', niv2: 'CE1', niv3: 'CE2', niv4: 'CM1', niv5: 'CM2', data: "Pratique et histoire des arts", key: "Pratique_et_histoire_des_arts" },
      { niv1: '', niv2: '', niv3: '', niv4: 'CM1', niv5: 'CM2', data: "Sciences", key: "Sciences" },
      { niv1: 'CP', niv2: 'CE1', niv3: 'CE2', niv4: 'CM1', niv5: 'CM2', data: "Sport", key: "Sport" }
];

var Theme_List = [
      { niv1: 'CP', niv2: 'CE1', niv3: 'CE2', niv4: 'CM1', niv5: 'CM2', mat: 'Francais', data: "Lecture", key: "Lecture" },
      { niv1: 'CP', niv2: 'CE1', niv3: 'CE2', niv4: 'CM1', niv5: 'CM2', mat: 'Francais', data: "Grammaire", key: "Grammaire" },
      { niv1: 'CP', niv2: 'CE1', niv3: 'CE2', niv4: 'CM1', niv5: 'CM2', mat: 'Francais', data: "Conjugaison", key: "Conjugaison" },
      { niv1: 'CP', niv2: 'CE1', niv3: 'CE2', niv4: 'CM1', niv5: 'CM2', mat: 'Francais', data: "Orthographe", key: "Orthographe" },
      { niv1: 'CP', niv2: 'CE1', niv3: 'CE2', niv4: 'CM1', niv5: 'CM2', mat: 'Francais', data: "Vocabulaire", key: "Vocabulaire" },
      { niv1: 'CP', niv2: 'CE1', niv3: 'CE2', niv4: 'CM1', niv5: 'CM2', mat: 'Francais', data: "Language oral", key: "Language_oral" },
      { niv1: 'CP', niv2: 'CE1', niv3: 'CE2', niv4: 'CM1', niv5: 'CM2', mat: 'Francais', data: "Ecriture", key: "Ecriture" },
      { niv1: 'CP', niv2: 'CE1', niv3: 'CE2', niv4: 'CM1', niv5: 'CM2', mat: 'Francais', data: "Redaction", key: "Redaction" },
      { niv1: 'CP', niv2: 'CE1', niv3: 'CE2', niv4: 'CM1', niv5: 'CM2', mat: 'Francais', data: "Devenir lecteur", key: "Devenir_lecteur" },
      { niv1: 'CP', niv2: 'CE1', niv3: 'CE2', niv4: 'CM1', niv5: 'CM2', mat: 'Francais', data: "Litterature de jeunesse", key: "Litterature_de_jeunesse" },
      { niv1: 'CP', niv2: 'CE1', niv3: 'CE2', niv4: 'CM1', niv5: 'CM2', mat: 'Francais', data: "Outils : Francais", key: "Outils_Francais" },

      { niv1: 'CP', niv2: 'CE1', niv3: 'CE2', niv4: 'CM1', niv5: 'CM2', mat: 'Maths', data: "Numeration", key: "Numeration" },
      { niv1: 'CP', niv2: 'CE1', niv3: 'CE2', niv4: 'CM1', niv5: 'CM2', mat: 'Maths', data: "Calculs", key: "Calculs" },
      { niv1: 'CP', niv2: 'CE1', niv3: 'CE2', niv4: 'CM1', niv5: 'CM2', mat: 'Maths', data: "Geometrie", key: "Geometrie" },
      { niv1: 'CP', niv2: 'CE1', niv3: 'CE2', niv4: 'CM1', niv5: 'CM2', mat: 'Maths', data: "Grandeurs et mesures", key: "Grandeurs_et_mesures" },
      { niv1: 'CP', niv2: 'CE1', niv3: 'CE2', niv4: 'CM1', niv5: 'CM2', mat: 'Maths', data: "Organisation des donnees", key: "Organisation_des_donnees" },
      { niv1: 'CP', niv2: 'CE1', niv3: 'CE2', niv4: 'CM1', niv5: 'CM2', mat: 'Maths', data: "Outils : Mathematiques", key: "Outils_Mathematiques" },

      { niv1: 'CP', niv2: 'CE1', niv3: 'CE2', niv4: 'CM1', niv5: 'CM2', mat: 'Anglais', data: "Langue anglaise", key: "Langue_anglaise" },
      { niv1: 'CP', niv2: 'CE1', niv3: 'CE2', niv4: 'CM1', niv5: 'CM2', mat: 'Anglais', data: "Images / flash cards", key: "Images_flash cards" },
      { niv1: 'CP', niv2: 'CE1', niv3: 'CE2', niv4: 'CM1', niv5: 'CM2', mat: 'Anglais', data: "Civilisation anglaise", key: "Civilisation_anglaise" },
      { niv1: 'CP', niv2: 'CE1', niv3: 'CE2', niv4: 'CM1', niv5: 'CM2', mat: 'Anglais', data: "Themes du quotidien", key: "Themes_du_quotidien" },
      { niv1: 'CP', niv2: 'CE1', niv3: 'CE2', niv4: 'CM1', niv5: 'CM2', mat: 'Anglais', data: "Outils : anglais", key: "Outils_anglais" },

      { niv1: 'CP', niv2: 'CE1', niv3: 'CE2', niv4: 'CM1', niv5: 'CM2', mat: 'Geographie', data: "Geographie locale", key: "Geographie_locale" },
      { niv1: 'CP', niv2: 'CE1', niv3: 'CE2', niv4: 'CM1', niv5: 'CM2', mat: 'Geographie', data: "Territoire francais dans l'UE", key: "Territoire_francais_dans_lUE" },
      { niv1: 'CP', niv2: 'CE1', niv3: 'CE2', niv4: 'CM1', niv5: 'CM2', mat: 'Geographie', data: "Produire en France", key: "Produire_en_France" },
      { niv1: 'CP', niv2: 'CE1', niv3: 'CE2', niv4: 'CM1', niv5: 'CM2', mat: 'Geographie', data: "Population francaise dans l'UE", key: "Population_francaise_dans_lUE" },
      { niv1: 'CP', niv2: 'CE1', niv3: 'CE2', niv4: 'CM1', niv5: 'CM2', mat: 'Geographie', data: "Se deplacer en Europe", key: "Se_deplacer_en_Europe" },
      { niv1: 'CP', niv2: 'CE1', niv3: 'CE2', niv4: 'CM1', niv5: 'CM2', mat: 'Geographie', data: "France dans le monde", key: "France_dans_le_monde" },
      { niv1: 'CP', niv2: 'CE1', niv3: 'CE2', niv4: 'CM1', niv5: 'CM2', mat: 'Geographie', data: "Outils : Geographie", key: "Outils_Geographie" },


      { niv1: 'CP', niv2: 'CE1', niv3: 'CE2', niv4: 'CM1', niv5: 'CM2', mat: 'Decouverte_du_monde', data: "Le temps", key: "Le_temps" },
      { niv1: 'CP', niv2: 'CE1', niv3: 'CE2', niv4: 'CM1', niv5: 'CM2', mat: 'Decouverte_du_monde', data: "Le developpement durable", key: "Le_developpement_durable" },
      { niv1: 'CP', niv2: 'CE1', niv3: 'CE2', niv4: 'CM1', niv5: 'CM2', mat: 'Decouverte_du_monde', data: "L'espace", key: "Lespace" },
      { niv1: 'CP', niv2: 'CE1', niv3: 'CE2', niv4: 'CM1', niv5: 'CM2', mat: 'Decouverte_du_monde', data: "Le vivant (anatomie)", key: "Le_vivant_anatomie" },
      { niv1: 'CP', niv2: 'CE1', niv3: 'CE2', niv4: 'CM1', niv5: 'CM2', mat: 'Decouverte_du_monde', data: "Le vivant (etre vivants)", key: "Le_vivant_etre_vivants" },
      { niv1: 'CP', niv2: 'CE1', niv3: 'CE2', niv4: 'CM1', niv5: 'CM2', mat: 'Decouverte_du_monde', data: "La matiere", key: "La_matiere" },
      { niv1: 'CP', niv2: 'CE1', niv3: 'CE2', niv4: 'CM1', niv5: 'CM2', mat: 'Decouverte_du_monde', data: "Objets", key: "Objets" },
      { niv1: 'CP', niv2: 'CE1', niv3: 'CE2', niv4: 'CM1', niv5: 'CM2', mat: 'Decouverte_du_monde', data: "TIC", key: "TIC" },
      { niv1: 'CP', niv2: 'CE1', niv3: 'CE2', niv4: 'CM1', niv5: 'CM2', mat: 'Decouverte_du_monde', data: "Outils : Decouverte du monde", key: "Outils_Decouverte_du_monde" },

      { niv1: 'CP', niv2: 'CE1', niv3: 'CE2', niv4: 'CM1', niv5: 'CM2', mat: 'Sport', data: "Realiser une performance", key: "Realiser_une_performance" },
      { niv1: 'CP', niv2: 'CE1', niv3: 'CE2', niv4: 'CM1', niv5: 'CM2', mat: 'Sport', data: "Adapter ses deplacements", key: "Adapter_ses_deplacements" },
      { niv1: 'CP', niv2: 'CE1', niv3: 'CE2', niv4: 'CM1', niv5: 'CM2', mat: 'Sport', data: "Cooperer et s'opposer", key: "Cooperer_et_sopposer" },
      { niv1: 'CP', niv2: 'CE1', niv3: 'CE2', niv4: 'CM1', niv5: 'CM2', mat: 'Sport', data: "Actions esthetiques", key: "Actions_esthetiques" },
      { niv1: 'CP', niv2: 'CE1', niv3: 'CE2', niv4: 'CM1', niv5: 'CM2', mat: 'Sport', data: "Outils : EPS", key: "Outils_EPS" },

      { niv1: 'CP', niv2: 'CE1', niv3: 'CE2', niv4: 'CM1', niv5: 'CM2', mat: 'Instruction_civique_et_morale', data: "Principes de la morale", key: "Principes_de_la_morale" },
      { niv1: 'CP', niv2: 'CE1', niv3: 'CE2', niv4: 'CM1', niv5: 'CM2', mat: 'Instruction_civique_et_morale', data: "Regles de vie collectives", key: "Regles_de_vie_collectives" },
      { niv1: 'CP', niv2: 'CE1', niv3: 'CE2', niv4: 'CM1', niv5: 'CM2', mat: 'Instruction_civique_et_morale', data: "Education a la sante", key: "Education_a_la_sante" },
      { niv1: 'CP', niv2: 'CE1', niv3: 'CE2', niv4: 'CM1', niv5: 'CM2', mat: 'Instruction_civique_et_morale', data: "Education a la securite", key: "Education_a_la_securite" },
      { niv1: 'CP', niv2: 'CE1', niv3: 'CE2', niv4: 'CM1', niv5: 'CM2', mat: 'Instruction_civique_et_morale', data: "Veme Republique", key: "Veme_Republique" },
      { niv1: 'CP', niv2: 'CE1', niv3: 'CE2', niv4: 'CM1', niv5: 'CM2', mat: 'Instruction_civique_et_morale', data: "Union Europeenne", key: "Union_Europeenne" },
      { niv1: 'CP', niv2: 'CE1', niv3: 'CE2', niv4: 'CM1', niv5: 'CM2', mat: 'Instruction_civique_et_morale', data: "Commerations et fetes", key: "Commerations_et_fetes" },
      { niv1: 'CP', niv2: 'CE1', niv3: 'CE2', niv4: 'CM1', niv5: 'CM2', mat: 'Instruction_civique_et_morale', data: "Outils : instruction civique", key: "Outils_instruction_civique" },

      { niv1: 'CP', niv2: 'CE1', niv3: 'CE2', niv4: 'CM1', niv5: 'CM2', mat: 'Pratique_et_histoire_des_arts', data: "Arts visuels", key: "Arts_visuels" },
      { niv1: 'CP', niv2: 'CE1', niv3: 'CE2', niv4: 'CM1', niv5: 'CM2', mat: 'Pratique_et_histoire_des_arts', data: "Education musicale", key: "Education_musicale" },
      { niv1: 'CP', niv2: 'CE1', niv3: 'CE2', niv4: 'CM1', niv5: 'CM2', mat: 'Pratique_et_histoire_des_arts', data: "Histoire des arts", key: "Histoire_des_arts" },
      { niv1: 'CP', niv2: 'CE1', niv3: 'CE2', niv4: 'CM1', niv5: 'CM2', mat: 'Pratique_et_histoire_des_arts', data: "Outils : arts", key: "Outils_arts" },

      { niv1: 'CP', niv2: 'CE1', niv3: 'CE2', niv4: 'CM1', niv5: 'CM2', mat: 'Sciences', data: "Objets", key: "Objets" },
      { niv1: 'CP', niv2: 'CE1', niv3: 'CE2', niv4: 'CM1', niv5: 'CM2', mat: 'Sciences', data: "Le developpement durable", key: "Le_developpement_durable" },
      { niv1: 'CP', niv2: 'CE1', niv3: 'CE2', niv4: 'CM1', niv5: 'CM2', mat: 'Sciences', data: "La matiere", key: "La_matiere" },
      { niv1: 'CP', niv2: 'CE1', niv3: 'CE2', niv4: 'CM1', niv5: 'CM2', mat: 'Sciences', data: "Le Ciel et la Terre", key: "Le_Ciel_et_la_Terre" },
      { niv1: 'CP', niv2: 'CE1', niv3: 'CE2', niv4: 'CM1', niv5: 'CM2', mat: 'Sciences', data: "Le vivant (anatomie)", key: "Le_vivant_anatomie" },
      { niv1: 'CP', niv2: 'CE1', niv3: 'CE2', niv4: 'CM1', niv5: 'CM2', mat: 'Sciences', data: "Le vivant (etre vivants)", key: "Le_vivant_etre_vivants" },
      { niv1: 'CP', niv2: 'CE1', niv3: 'CE2', niv4: 'CM1', niv5: 'CM2', mat: 'Sciences', data: "TIC", key: "TIC" },
      { niv1: 'CP', niv2: 'CE1', niv3: 'CE2', niv4: 'CM1', niv5: 'CM2', mat: 'Sciences', data: "Outils : Sciences", key: "Outils_Sciences" },

      { niv1: 'CP', niv2: 'CE1', niv3: 'CE2', niv4: 'CM1', niv5: 'CM2', mat: 'Histoire', data: "Prehistoire", key: "Prehistoire" },
      { niv1: 'CP', niv2: 'CE1', niv3: 'CE2', niv4: 'CM1', niv5: 'CM2', mat: 'Histoire', data: "Antiquite", key: "Antiquite" },
      { niv1: 'CP', niv2: 'CE1', niv3: 'CE2', niv4: 'CM1', niv5: 'CM2', mat: 'Histoire', data: "Moyen-Age", key: "Moyen_Age" },
      { niv1: 'CP', niv2: 'CE1', niv3: 'CE2', niv4: 'CM1', niv5: 'CM2', mat: 'Histoire', data: "Temps modernes", key: "Temps_modernes" },
      { niv1: 'CP', niv2: 'CE1', niv3: 'CE2', niv4: 'CM1', niv5: 'CM2', mat: 'Histoire', data: "Revolution et XIXeme siecle", key: "Revolution_et_XIXeme_siecle" },
      { niv1: 'CP', niv2: 'CE1', niv3: 'CE2', niv4: 'CM1', niv5: 'CM2', mat: 'Histoire', data: "XXeme siecle", key: "XXeme_siecle" },
      { niv1: 'CP', niv2: 'CE1', niv3: 'CE2', niv4: 'CM1', niv5: 'CM2', mat: 'Histoire', data: "Outils : Histoire", key: "Outils_Histoire" },

      { niv1: 'CP', niv2: 'CE1', niv3: 'CE2', niv4: 'CM1', niv5: 'CM2', mat: 'Jeux_educatifs', data: "Jeux de francais", key: "Jeux_de_francais" },
      { niv1: 'CP', niv2: 'CE1', niv3: 'CE2', niv4: 'CM1', niv5: 'CM2', mat: 'Jeux_educatifs', data: "Jeux de mathematiques", key: "Jeux_de_mathematiques" },
      { niv1: 'CP', niv2: 'CE1', niv3: 'CE2', niv4: 'CM1', niv5: 'CM2', mat: 'Jeux_educatifs', data: "Jeux de sciences", key: "Jeux_de_sciences" },
      { niv1: 'CP', niv2: 'CE1', niv3: 'CE2', niv4: 'CM1', niv5: 'CM2', mat: 'Jeux_educatifs', data: "Jeux pour l'histoire", key: "Jeux_pour_lhistoire" },
      { niv1: 'CP', niv2: 'CE1', niv3: 'CE2', niv4: 'CM1', niv5: 'CM2', mat: 'Jeux_educatifs', data: "Jeux de geographie", key: "Jeux_de_geographie" },
      { niv1: 'CP', niv2: 'CE1', niv3: 'CE2', niv4: 'CM1', niv5: 'CM2', mat: 'Jeux_educatifs', data: "Jeux d'anglais", key: "Jeux_danglais" },
      { niv1: 'CP', niv2: 'CE1', niv3: 'CE2', niv4: 'CM1', niv5: 'CM2', mat: 'Jeux_educatifs', data: "Jeux d'arts visuels", key: "Jeux_darts_visuels" },

      { niv1: 'CP', niv2: 'CE1', niv3: 'CE2', niv4: 'CM1', niv5: 'CM2', mat: 'Evenements_de_lannee', data: "Noel", key: "Noel" },
      { niv1: 'CP', niv2: 'CE1', niv3: 'CE2', niv4: 'CM1', niv5: 'CM2', mat: 'Evenements_de_lannee', data: "Evenements annuels", key: "Evenements_annuels" },
      { niv1: 'CP', niv2: 'CE1', niv3: 'CE2', niv4: 'CM1', niv5: 'CM2', mat: 'Evenements_de_lannee', data: "Automne", key: "Automne" },
      { niv1: 'CP', niv2: 'CE1', niv3: 'CE2', niv4: 'CM1', niv5: 'CM2', mat: 'Evenements_de_lannee', data: "Hiver", key: "Hiver" },
      { niv1: 'CP', niv2: 'CE1', niv3: 'CE2', niv4: 'CM1', niv5: 'CM2', mat: 'Evenements_de_lannee', data: "Printemps", key: "Printemps" },
      { niv1: 'CP', niv2: 'CE1', niv3: 'CE2', niv4: 'CM1', niv5: 'CM2', mat: 'Evenements_de_lannee', data: "Ete", key: "Ete" },

      { niv1: 'CP', niv2: 'CE1', niv3: 'CE2', niv4: 'CM1', niv5: 'CM2', mat: 'Outils', data: "Outils pour la classe", key: "Outils_pour_la_classe" },
      { niv1: 'CP', niv2: 'CE1', niv3: 'CE2', niv4: 'CM1', niv5: 'CM2', mat: 'Outils', data: "Travail en autonomie", key: "Travail_en_autonomie" },
      { niv1: 'CP', niv2: 'CE1', niv3: 'CE2', niv4: 'CM1', niv5: 'CM2', mat: 'Outils', data: "Logiciels", key: "Logiciels" },
];



var Theme_List_CP_CE1 = [
    ["Lecture", "Grammaire", "Conjugaison", "Orthographe", "Vocabulaire", "Language oral", "Ecriture", "Redaction", "Devenir lecteur", "Litterature de jeunesse", "Outils : Francais"],
    ["Numeration", "Calculs", "Geometrie", "Grandeurs et mesures", "Organisation des donnees", "Outils : Mathematiques"],
    ["Langue anglaise", "Images / flash cards", "Civilisation anglaise", "Themes du quotidien", "Outils : anglais"],
    ["Le temps", "Le developpement durable", "L'espace", "Le vivant (anatomie)", "Le vivant (etre vivants)", "La matiere", "Objets", "TIC", "Outils : Decouverte du monde"],
    ["Realiser une performance", "Adapter ses deplacements", "Cooperer et s'opposer", "Actions esthetiques", "Outils : EPS"],
    ["Principes de la morale", "Regles de vie collectives", "Education a la sante", "Education a la securite", "Veme Republique", "Union Europeenne", "Commerations et fetes", "Outils : instruction civique"],
    ["Arts visuels", "Education musicale", "Histoire des arts", "Outils : arts"],
    ["Jeux de francais", "Jeux de mathematiques", "Jeux de sciences", "Jeux pour l'histoire", "Jeux de geographie", "Jeux d'anglais", "Jeux d'arts visuels"],
    ["Outils pour la classe", "Travail en autonomie", "Logiciels"],
    ["Noel", "Evenements annuels", "Automne", "Hiver", "Printemps", "Ete"],
];

var Theme_List_CE2_CM1_CM2 = [
    ["Lecture", "Grammaire", "Conjugaison", "Orthographe", "Vocabulaire", "Language oral", "Ecriture", "Redaction", "Devenir lecteur", "Litterature de jeunesse", "Outils : Francais"],
    ["Numeration", "Calculs", "Geometrie", "Grandeurs et mesures", "Organisation des donnees", "Outils : Mathematiques"],
    ["Langue anglaise", "Images / flash cards", "Civilisation anglaise", "Themes du quotidien", "Outils : anglais"],
    ["Geographie locale", "Territoire francais dans l'UE", "Produire en France", "Population fancaise dans l'UE", "Se deplacer en Europe", "France dans le monde", "Outils : Geographie"],
    ["Realiser une performance", "Adapter ses deplacements", "Cooperer et s'opposer", "Actions esthetiques", "Outils : EPS"],
    ["Principes de la morale", "Regles de vie collectives", "Education a la sante", "Education a la securite", "Veme Republique", "Union Europeenne", "Commerations et fetes", "Outils : instruction civique"],
    ["Arts visuels", "Education musicale", "Histoire des arts", "Outils : arts"],
    ["Objets", "Le developpement durable", "La matiere", "Le Ciel et la Terre", "Le vivant (anatomie)", "Le vivant (etre vivants)", "TIC", "Outils : Sciences"],
    ["Prehistoire", "Antiquite", "Moyen-Age", "Temps modernes", "Revolution et XIXeme siecle", "XXeme siecle", "Outils : Histoire"],
    ["Jeux de francais", "Jeux de mathematiques", "Jeux de sciences", "Jeux pour l'histoire", "Jeux de geographie", "Jeux d'anglais", "Jeux d'arts visuels"],
    ["Noel", "Evenements annuels", "Automne", "Hiver", "Printemps", "Ete"],
    ["Outils pour la classe", "Travail en autonomie", "Logiciels"],
];

function changeTheme(Matiere, indice) {
    if (niv == "CP" || niv == "CE1")
        setFilterTheme(Theme_List_CP_CE1[indice]);
    else
        setFilterTheme(Theme_List_CE2_CM1_CM2[indice]);

    if (this.id == 'all') {
        $('#parent > a').fadeIn(450);
        niv = "all";
        mat = "all";
        the = "all";
    } else {
        var $el = $('.' + Matiere + "." + niv).fadeIn(450);
        $('#parent > a').not($el).hide();
    }
    mat = Matiere;
    $(".btnMat").removeClass('active');
    $("#" + Matiere).addClass('active');
}

function changeFiche(Theme) {
    if (this.id == 'all') {
        $('#parent > a').fadeIn(450);
        niv = "all";
        mat = "all";
        the = "all";
    } else {
        if (the != "all") {
            var $el = $('.' + Theme + "." + mat + "." + niv).fadeIn(450);
            $('#parent > a').not($el).hide();
        }
        else {
            var $el = $('.' + Theme).fadeIn(450);
            $('#parent > a').not($el).hide();
        }
    }
    the = Theme;
    $(".btnTheme").removeClass('active');
    $("#" + Theme).addClass('active');
}

$('div.PDFViewerButton').on('click', function (e) {

    var UserId = $(this).attr('UserId');
    var UserName = $(this).attr('UserName');
    var User;

    $.ajax({
        type: "POST",
        url: "/Home/getUser",
        data: '{id: "'+ UserId + '"}',
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (user) {
            
            var jour = new Date(parseInt(user.DateNaissance.replace("/Date(", "").replace(")/", ""), 10)).getDate();
            var mois = new Date(parseInt(user.DateNaissance.replace("/Date(", "").replace(")/", ""), 10)).getMonth() + 1;
            var année = new Date(parseInt(user.DateNaissance.replace("/Date(", "").replace(")/", ""), 10)).getFullYear();
            var DateNaissance = jour + "/" + mois + "/" + année;

            var jour = new Date(parseInt(user.DateInscription.replace("/Date(", "").replace(")/", ""), 10)).getDate();
            var mois = new Date(parseInt(user.DateInscription.replace("/Date(", "").replace(")/", ""), 10)).getMonth() + 1;
            var année = new Date(parseInt(user.DateInscription.replace("/Date(", "").replace(")/", ""), 10)).getFullYear();
            var DateInscription = jour + "/" + mois + "/" + année;

            $("#contentPDF").append("<label> Pseudo : </label><p>" + user.UserName + " </p>");
            $("#contentPDF").append("<label> Nom : </label><p>" + user.Nom + " </p>");
            $("#contentPDF").append("<label> Prenom : </label><p>" + user.Prenom + " </p>");
            $("#contentPDF").append("<label> DateNaissance : </label><p>" + DateNaissance + " </p>");
            $("#contentPDF").append("<label> DateInscription : </label><p>" + DateInscription + " </p>");
            $("#contentPDF").append("<label> NombreFicheUpload : </label><p>" + user.NombreFicheUpload + " </p>");
            $("#contentPDF").append("<label> Experience : </label><p>" + user.Experience + " </p>");
            $("#contentPDF").append("<label> Level : </label><p>" + user.Level + " </p>");
            $("#contentPDF").append("<label> Titre : </label><p>" + user.Titre + " </p>");
            $("#contentPDF").append("<label> NombreTelechargement : </label><p>" + user.NombreTelechargement + " </p>");
        },
        failure: function (response) {
            console.log(response.responseText);
        },
        error: function (response) {
            console.log(response.responseText);
        }
    });
    

    var src = $(this).attr('data-src');
    //var height = document.body.clientHeight * 0.75;

    var height = $(window).height() - 200;
    //var height = document.body.clientHeight - "350";
    var width = "100%";
    var title = $(this).attr('title');
    var niveau = $(this).attr('niveau');
    var matiere = $(this).attr('matiere');
    var theme = $(this).attr('theme');
    var temperature = $(this).attr('temperature');
    var description = $(this).attr('description');
    var DateAjout = $(this).attr('DateAjout');
    var NombreTelechargement = $(this).attr('NombreTelechargement');
    var NombreVote = $(this).attr('NombreVote');
    var UserName = $(this).attr('UserName');
    var UserId = $(this).attr('UserId');
    idF = $(this).attr('idFiche');

    $("#PDFViewer iframe").attr({
        'src': src,
        'height': height - 78,
        'width': width
    });

    $("#btnDownload").attr({
        'href': src
    });

    $("#PDFViewer").attr({
        'idFche': idF
    });

    $("#PDFViewerLabel").html(title);

    $("#thermostat").data('data-percent', temperature);
    setTimeout(function () {
        if (temperature > 0) {
            $("#thermostat span").css('color', '#ff0c0c');
            $(".bar").css('border-color', '#ff0c0c');
        } else {
            $("#thermostat span").css('color', '#0085ff');
            $(".bar").css('border-color', '#0085ff');
        }
        $("#thermostat span").append("°C");
    }, 1000)
    $("#NbrDDL").append(NombreTelechargement + " fois");
    $("#dateAjout").append(DateAjout);
    $("#niveauFiche").append(niveau);
    $("#matiereFiche").append(matiere);
    $("#themeFiche").append(theme);


    $("#dataPDF").append("<label> Auteur : </label><p>" + UserName + " </p>");
    $("#dataPDF").append("<label> Auteur identifiant : </label><p>" + UserId + " </p>");

});

$('document').ready(function () {
    var height = $(window).height() - 200;
    $("#PDFViewer iframe").height(height - 155);
    $("#PDFViewer #contentPDF").height(height - 155);
    $("#PDFViewer #dataPDF").height(height - 155);
    $("#PDFModal").height(height + 100);
});

$('#PDFViewer').bind('hidden.bs.modal', function () {
    $("#contentPDF").empty();
    $("#dataPDF").empty();
});

$(window).resize(function () {
    var height = $(window).height() - 200;
    $("#PDFViewer iframe").height(height - 155);
    $("#PDFViewer #contentPDF").height(height - 155);
    $("#PDFViewer #dataPDF").height(height - 155);
    $("#PDFModal").height(height + 100);
});

var data = [
    { "Mois": "Janvier", "nbrDown": 400, "Pop2025": 1394 },
    { "Mois": "Fevrier", "nbrDown": 350, "Pop2025": 1396 },
    { "Mois": "Mars", "nbrDown": 322, "Pop2025": 351 },
    { "Mois": "Avril", "nbrDown": 256, "Pop2025": 277 },
    { "Mois": "Mai", "nbrDown": 204, "Pop2025": 218 },
    { "Mois": "Juin", "nbrDown": 215, "Pop2025": 1394 },
    { "Mois": "Juillet", "nbrDown": 175, "Pop2025": 1396 },
    { "Mois": "Aout", "nbrDown": 260, "Pop2025": 351 },
    { "Mois": "Septembre", "nbrDown": 570, "Pop2025": 277 },
    { "Mois": "Octobre", "nbrDown": 460, "Pop2025": 218 },
    { "Mois": "Novembre", "nbrDown": 380, "Pop2025": 277 },
    { "Mois": "Decembre", "nbrDown": 204, "Pop2025": 218 }
];

String.prototype.replaceAll = function (search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};


$(function () {
    $(function () {
        $("#checkboxSelectComboNiv").igCombo({
            width: 300,
            dataSource: Niveau_List,
            textKey: "data",
            valueKey: "key",
            locale: {
                placeHolder: "Filtre par niveau(x)"
            },
            multiSelection: {
                enabled: true,
                showCheckboxes: true
            },
            dropDownOrientation: "bottom",
            selectionChanged: function (evt, ui) {
                var filteredCascMatiere = [];
                if (ui.items && ui.items[0]) {
                    var itemData = ui.items;

                    var listNiv = $.map(itemData, function (data) {
                        return data.data.key;
                    });

                    filteredCascMatiere = Matiere_List.filter(function (matiere) {
                        if ($.inArray(matiere.niv1, listNiv) < 0 && $.inArray(matiere.niv2, listNiv) < 0 && $.inArray(matiere.niv3, listNiv) < 0 && $.inArray(matiere.niv4, listNiv) < 0 && $.inArray(matiere.niv5, listNiv) < 0)
                            return false;
                        else
                            return true;
                    });
                }

                var $checkboxSelectComboMat = $("#checkboxSelectComboMat");
                $checkboxSelectComboMat.igCombo("deselectAll", {}, true);
                $checkboxSelectComboMat.igCombo("option", "dataSource", filteredCascMatiere);
                $checkboxSelectComboMat.igCombo("dataBind");

                var disableChildCombo = filteredCascMatiere.length == 0;
                $checkboxSelectComboMat.igCombo("option", "disabled", disableChildCombo);

                var listNivSelected = $.map(ui.items, function (data) {
                    return data.data;
                });
                $("#tableNiv").empty();
                $("#tableMat").empty();
                $("#tableThe").empty();

                $.each(listNivSelected, function (key, value) {
                    $("#tableNiv").append("<li id='" + value.key + "' class='divSelected'><a class='btnFilter btnFilter-icon btnFilter-filter' href='#' onclick='javascript:removeFilter(\"" + value.key + "\");'><i class='fa fa-close'></i><span>" + value.data + "</span></a></li>");
                });

                changeFilter();

            },
            itemsRendered: function (evt, ui) {
                ui.owner.deselectAll();
            }
        });

    });

    $(function () {
        $("#checkboxSelectComboMat").igCombo({
            width: 300,
            dataSource: [],
            textKey: "data",
            valueKey: "key",
            disabled: true,
            locale: {
                placeHolder: "Filtre par matière(s)"
            },
            multiSelection: {
                enabled: true,
                showCheckboxes: true
            },
            dropDownOrientation: "bottom",
            selectionChanged: function (evt, ui) {
                var filteredCascTheme = [];
                if (ui.items && ui.items[0]) {
                    var itemData = ui.items;

                    var listMat = $.map(itemData, function (data) {
                        return data.data.key;
                    });

                    filteredCascTheme = Theme_List.filter(function (theme) {
                        if ($.inArray(theme.mat, listMat) < 0)
                            return false;
                        else
                            return true;
                    });
                }

                var $checkboxSelectComboThe = $("#checkboxSelectComboThe");
                $checkboxSelectComboThe.igCombo("deselectAll", {}, true);
                $checkboxSelectComboThe.igCombo("option", "dataSource", filteredCascTheme);
                $checkboxSelectComboThe.igCombo("dataBind");

                var disableChildCombo = filteredCascTheme.length == 0;
                $checkboxSelectComboThe.igCombo("option", "disabled", disableChildCombo);

                var listMatSelected = $.map(ui.items, function (data) {
                    return data.data;
                });

                $("#tableMat").empty();
                $("#tableThe").empty();
                $.each(listMatSelected, function (key, value) {
                    $("#tableMat").append("<li id='" + value.key + "' class='divSelected'><a class='btnFilter btnFilter-icon btnFilter-filter' href='#' onclick='javascript:removeFilter(\"" + value.key + "\");'><i class='fa fa-close'></i><span>" + value.data + "</span></a></li>");
                });

                changeFilter();
            },
            itemsRendered: function (evt, ui) {
                ui.owner.deselectAll();
            }
        });

    });

    function initCheckbox() {
        if ($(".custom-switch").length > 0) {
            new DG.OnOffSwitchAuto({
                cls: '.custom-switch',
                height: 20,
                listener: function (name, checked) {
                    if (checked) {
                        $("input[name=" + name + "]").parents(".switch-row").find(".checkbox input").removeAttr("disabled");
                        $("input[name=" + name + "]").parents(".switch-row").addClass("on");
                    }
                    else {
                        $("input[name=" + name + "]").parents(".switch-row").find(".checkbox input").attr("disabled", "disabled").removeAttr("checked");
                        $("input[name=" + name + "]").parents(".switch-row").removeClass("on");
                    }
                }
            });

            setTimeout(function () {
                $("#settings .custom-switch").each(function () {
                    if ($(this).is(":checked")) {
                        $(this).parents(".switch-row").addClass("on");
                    }
                });
            }, 500);
        }

        if ($("#enableAll").length > 0) {
            $("#enableAll").click(function (e) {
                e.preventDefault();
                $("#settings .switch-row:not(.on) input.custom-switch").trigger("click");
            });
        }

        if ($("#disableAll").length > 0) {
            $("#disableAll").click(function (e) {
                e.preventDefault();
                $("#settings .switch-row.on input.custom-switch").trigger("click");
            });
        }

        if ($("#subscribeToAll").length > 0) {
            $("#subscribeToAll").click(function (e) {
                e.preventDefault();
                $("#communicationOptions input.custom-switch:not(:checked)").trigger("click");
            });
        }

        if ($("#unsubscribeToAll").length > 0) {
            $("#unsubscribeToAll").click(function (e) {
                e.preventDefault();
                $("#communicationOptions input.custom-switch:checked").trigger("click");
            });
        }
    }

    
    $('document').ready(function () {
        initCheckbox();
    });    

    $(function () {
        $("#checkboxSelectComboThe").igCombo({
            width: 300,
            dataSource: [],
            textKey: "data",
            valueKey: "key",
            disabled: true,
            parentComboKey: "matiere",
            parentCombo: "#checkboxSelectComboMat",
            locale: {
                placeHolder: "Filtre par thème(s)"
            },
            grouping: {
                key: 'mat',
                dir: 'asc'
            },
            multiSelection: {
                enabled: true,
                showCheckboxes: true
            },
            dropDownOrientation: "bottom",
            selectionChanged: function (evt, ui) {
                /*var filteredCascDistrict = [];
                if (ui.items && ui.items[0]) {
                    var itemData = ui.items[0].data;
                    if (itemData.valCountry == "US") {
                        $("#state").css("display", "block");
                        $("#district").css("display", "none");
                    }
                    else {
                        $("#state").css("display", "none");
                        $("#district").css("display", "block");
                    }
                    filteredCascDistrict = dsCascDistrict.filter(function (district) {
                        return district.keyCountry == itemData.valCountry;
                    });
                }
                var $comboDistrict = $("#comboDistrict");
                $comboDistrict.igCombo("deselectAll", {}, true);
                $comboDistrict.igCombo("option", "dataSource", filteredCascDistrict);
                $comboDistrict.igCombo("dataBind");
                var disableChildCombo = filteredCascDistrict.length == 0;
                $comboDistrict.igCombo("option", "disabled", disableChildCombo);
                */
                var listTheSelected = $.map(ui.items, function (data) {
                    return data.data;
                });

                $("#tableThe").empty();
                $.each(listTheSelected, function (key, value) {
                    $("#tableThe").append("<li id='" + value.key + "' class='divSelected'><a class='btnFilter btnFilter-icon btnFilter-filter' href='#' onclick='javascript:removeFilter(\"" + value.key + "\");'><i class='fa fa-close'></i><span>" + value.data + "</span></a></li>");
                });

                changeFilter();
            },
            itemsRendered: function (evt, ui) {
                ui.owner.deselectAll();
            }
        });

    });
});

function changeFilter() {
    var listNivClass = "";
    var listMatClass = "";
    var listTheClass = "";
    var itemsNiv = $("#checkboxSelectComboNiv").igCombo("selectedItems");
    var itemsMat = $("#checkboxSelectComboMat").igCombo("selectedItems");
    var itemsThe = $("#checkboxSelectComboThe").igCombo("selectedItems");

    var find = "";
    var finded = false;

    if (itemsThe != null) {
        $.each(itemsNiv, function (keyNiv, valueNiv) {
            $.each(itemsMat, function (keyMat, valueMat) {
                $.each(itemsThe, function (keyThe, valueThe) {
                    $.each(Theme_List, function (keyList, valueList) {
                        console.log("Value mat/key: " + valueMat.data.key + "/" + valueThe.data.key + " -- list mat/key: " + valueList.mat + "/" + valueList.key);
                        if (valueList.mat == valueMat.data.key && valueList.key == valueThe.data.key) {
                            if (find != "") {
                                if (!find.endsWith(", "))
                                    find = find + ", ." + valueNiv.data.key + "." + valueMat.data.key + "." + valueThe.data.key;
                                else
                                    find = find + " ." + valueNiv.data.key + "." + valueMat.data.key + "." + valueThe.data.key;
                            } else {
                                find = find + " ." + valueNiv.data.key + "." + valueMat.data.key + "." + valueThe.data.key;
                            }
                            finded = true;
                        }
                    });
                    if (!finded) {
                        if (find != "") {
                            if (!find.endsWith(", "))
                                find = find + ", ." + valueNiv.data.key + "." + valueMat.data.key;
                            else
                                find = find + " ." + valueNiv.data.key + "." + valueMat.data.key;
                        } else {
                            find = find + " ." + valueNiv.data.key + "." + valueMat.data.key;
                        }
                    }
                    finded = false;
                });
            });
        });
    } else if (itemsMat != null) {
        $.each(itemsNiv, function (keyNiv, valueNiv) {
            $.each(itemsMat, function (keyMat, valueMat) {
                if (find != "") {
                    if (!find.endsWith(", "))
                        find = find + ", ." + valueNiv.data.key + "." + valueMat.data.key;
                    else
                        find = find + " ." + valueNiv.data.key + "." + valueMat.data.key;
                } else {
                    find = find + " ." + valueNiv.data.key + "." + valueMat.data.key;
                }
            });
        });
    } else if (itemsNiv != null) {
        $.each(itemsNiv, function (keyNiv, valueNiv) {
            if (find != "") {
                if (!find.endsWith(", "))
                    find = find + ", ." + valueNiv.data.key;
                else
                    find = find + " ." + valueNiv.data.key;
            } else {
                find = find + " ." + valueNiv.data.key;
            }
        });
    } else {
        find = ".box";
    }


    /*if (itemsNiv != null) {
        $.each(itemsNiv, function (keyNiv, valueNiv) {
            if(find != "")
                find = find + ", ";
            if (itemsMat != null) {
                $.each(itemsMat, function (keyMat, valueMat) {
                    if (find != "")
                        if (!find.endsWith(", "))
                            find = find + ", ";
                    if (itemsThe != null) {
                        $.each(itemsThe, function (keyThe, valueThe) {
                            $.each(Theme_List, function (keyList, valueList) {
                                if (valueList.mat == valueMat.data.key && valueList.key == valueThe.data.key) {
                                    find = find + " ." + valueNiv.data.key + "." + valueMat.data.key + "." + valueThe.data.key;
                                    finded = true;
                                }
                            });
                            if (!finded) {
                                find = find + " ." + valueNiv.data.key + "." + valueMat.data.key;
                            }
                        });
                    } else {
                        find = find + " ." + valueNiv.data.key + "." + valueMat.data.key;
                    }
                });
            } else {
                find = find + " ." + valueNiv.data.key;
            }
        });
    }*/

    /*if (itemsMat != null) {
        $.each(itemsMat, function (key, value) {
            listMatClass = listMatClass + " ." + value.data.key;
        });
        find = find + ", " + listMatClass
    }

    if (itemsThe != null) {
        $.each(itemsThe, function (key, value) {
            listTheClass = listTheClass + " ." + value.data.key;
        });
        find = find + ", " + listTheClass
    }*/

    var $el = $("#parent").find(find).fadeIn(450);
    $('#parent > div').not($el).hide();
}

function removeFilter(key) {
    var $checkboxSelectComboNiv = $("#checkboxSelectComboNiv");
    var $checkboxSelectComboMat = $("#checkboxSelectComboMat");
    var $checkboxSelectComboThe = $("#checkboxSelectComboThe");

    $checkboxSelectComboNiv.igCombo("deselectByValue", key);
    $checkboxSelectComboMat.igCombo("deselectByValue", key);
    $checkboxSelectComboThe.igCombo("deselectByValue", key);

    var NivSize = $checkboxSelectComboNiv.igCombo("selectedItems")
    if (NivSize != null)
        NivSize = $checkboxSelectComboNiv.igCombo("selectedItems").length;

    var MatSize = $checkboxSelectComboMat.igCombo("selectedItems");
    if (MatSize != null)
        MatSize = $checkboxSelectComboNiv.igCombo("selectedItems").length;

    var TheSize = $checkboxSelectComboThe.igCombo("selectedItems");
    if (TheSize != null)
        TheSize = $checkboxSelectComboNiv.igCombo("selectedItems").length;

    console.log(NivSize);
    console.log(MatSize);
    console.log(TheSize);

    if (NivSize < 1)
        $checkboxSelectComboMat.igCombo("option", "disabled", true);
    if (MatSize < 1)
        $checkboxSelectComboThe.igCombo("option", "disabled", true);

    $("#" + key).remove();
    changeFilter();
}

