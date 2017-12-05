// Write your Javascript code.
var niv = "all";
var mat = "all";
var the = "all";

var Matiere_List = [
    ["Francais", "Maths", "Anglais", "Decouverte du monde", "Sport", "Instruction civique et morale", "Pratique et histoire des arts", "Jeux educatifs", "Outils", "Evenements de l'annee"],
    ["Francais", "Maths", "Anglais", "Decouverte du monde", "Sport", "Instruction civique et morale", "Pratique et histoire des arts", "Jeux educatifs", "Outils", "Evenements de l'annee"],
    ["Francais", "Maths", "Anglais", "Geographie", "Sport", "Instruction civique et morale", "Pratique et histoire des arts", "Sciences", "Histoire", "Jeux educatifs", "Evenements de l'annee", "Outils"],
    ["Francais", "Maths", "Anglais", "Geographie", "Sport", "Instruction civique et morale", "Pratique et histoire des arts", "Sciences", "Histoire", "Jeux educatifs", "Evenements de l'annee", "Outils"],
    ["Francais", "Maths", "Anglais", "Geographie", "Sport", "Instruction civique et morale", "Pratique et histoire des arts", "Sciences", "Histoire", "Jeux educatifs", "Evenements de l'annee", "Outils"],
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
    ["Geographie locale", "Territoire fancais dans l'UE", "Produire en France", "Population fancaise dans l'UE", "Se deplacer en Europe", "France dans le monde", "Outils : Geographie"],
    ["Realiser une performance", "Adapter ses deplacements", "Cooperer et s'opposer", "Actions esthetiques", "Outils : EPS"],
    ["Principes de la morale", "Regles de vie collectives", "Education a la sante", "Education a la securite", "Veme Republique", "Union Europeenne", "Commerations et fetes", "Outils : instruction civique"],
    ["Arts visuels", "Education musicale", "Histoire des arts", "Outils : arts"],
    ["Objets", "Le developpement durable", "La matiere", "Le Ciel et la Terre", "Le vivant (anatomie)", "Le vivant (etre vivants)", "TIC", "Outils : Sciences"],
    ["Prehistoire", "Antiquite", "Moyen-Age", "Temps modernes", "Revolution et XIXeme siecle", "XXeme siecle", "Outils : Histoire"],
    ["Jeux de francais", "Jeux de mathematiques", "Jeux de sciences", "Jeux pour l'histoire", "Jeux de geographie", "Jeux d'anglais", "Jeux d'arts visuels"],
    ["Noel", "Evenements annuels", "Automne", "Hiver", "Printemps", "Ete"],
    ["Outils pour la classe", "Travail en autonomie", "Logiciels"],
];

var $btnsNiv = $('#checkNiveau').click(function () {
    $('#checkMatiere').empty();
    $('#checkTheme').empty();
    mat = "all";
    the = "all";

    if (this.id == 'all') {
        $('#parent > a').fadeIn(450);
        niv = "all";
        mat = "all";
        the = "all";
        $(".line").hide();
    } else {
        $(".line").show();
        if (mat != "all") {
            var $el = $('.' + this.id + "." + mat).fadeIn(450);
            $('#parent > a').not($el).hide();
        }
        else {
            var $el = $('.' + this.id).fadeIn(450);
            $('#parent > a').not($el).hide();
        }

        if (this.id == "CP") {
            setFilterMat(Matiere_List[0], 0);
        } else if (this.id == "CE1") {
            setFilterMat(Matiere_List[1], 1);
        } else if (this.id == "CE2") {
            setFilterMat(Matiere_List[2], 2);
        } else if (this.id == "CM1") {
            setFilterMat(Matiere_List[3], 3);
        } else if (this.id == "CM2") {
            setFilterMat(Matiere_List[4], 4);
        }
    }
    niv = this.id;
    $btnsNiv.removeClass('active');
    $(this).addClass('active');
});

function setFilterMat(tab, indice) {
    $('#FilterMatiere').empty();
    for (var i = 0; i < tab.length ; i++) {
        var filtre = "<li onclick='javascript:changeTheme(\"" + tab[i].replaceAll(" ", "_").replaceAll("'", "") + "\"" + ", " + i +");'><button class='btnP btnMat' id=" + tab[i].replaceAll(" ", "_").replaceAll("'", "") + " >" + tab[i] + " </button></li>";
        $('#FilterMatiere').append(filtre);
    }
    var matLabel = "<li><h4><small class='subTitle'>(Matiere)</small></h4></li>";
    $('#FilterMatiere').append(matLabel);

}

function setFilterTheme(tab) {
    $('#FilterTheme').empty();
    for (var i = 0; i < tab.length ; i++) {
        var filtre = "<li onclick='javascript:changeFiche(\"" + tab[i].replaceAll(" ", "_").replaceAll("'", "").replaceAll("_:_", "-_-").replaceAll("_/_", "---") + "\");'><button class='btnP btnTheme' id=" + tab[i].replaceAll(" ", "_").replaceAll("'", "").replaceAll("_:_", "-_-").replaceAll("_/_", "---") + " >" + tab[i] + " </button></li>";
        $('#FilterTheme').append(filtre);
    }
    var themeLabel = "<li><h4><small class='subTitle'>(Theme)</small></h4></li>";
    $('#FilterTheme').append(themeLabel);
}

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


$('a.PDFViewerButton').on('click', function (e) {
    var src = $(this).attr('data-src');
    var height = $(window).height() * 0.7;
    var width = "766px";
    var title = $(this).attr('title');
    var niveau = $(this).attr('niveau');
    var matiere = $(this).attr('matiere');
    var theme = $(this).attr('theme');
    var temperature = $(this).attr('temperature');
    var description = $(this).attr('description');
    idF = $(this).attr('idFiche');

    $("#PDFViewer iframe").attr({
        'src': src,
        'height': height,
        'width': width
    });

    $("#btnDownload").attr({
        'href': src
    });

    $("#PDFViewer").attr({
        'idFche': idF
    });
    
    $("#PDFViewerLabel").html(title);

    $("#contentPDF").append("<label> Niveau : </label><p>" + niveau + " </p>");
    $("#contentPDF").append("<label> Matiere : </label><p>" + matiere + " </p>");
    $("#contentPDF").append("<label> Theme : </label><p>" + theme + " </p>");
    $("#contentPDF").append("<label> Température : </label><p>" + temperature + " </p>");
    $("#contentPDF").append("<label> Description : </label><p>" + description.replaceAll("_", " ") + " </p>");

    
});

$('#PDFViewer').bind('hidden.bs.modal', function () {
    $("#contentPDF").empty();
});

$(window).resize(function () {
    $("#PDFViewer iframe").height($("#PDFViewer").height()-200);
    $("#PDFModal").height($("#PDFViewer").height() - 60);
});

String.prototype.replaceAll = function (search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};

var expanded = false;

function showCheckNiveau() {
    var checkboxes = document.getElementById("checkNiveau");
    if (!expanded) {
        checkboxes.style.display = "block";
        expanded = true;
    } else {
        checkboxes.style.display = "none";
        expanded = false;
    }
}
function showCheckMatiere() {
    var checkboxes = document.getElementById("checkMatiere");
    if (!expanded) {
        checkboxes.style.display = "block";
        expanded = true;
    } else {
        checkboxes.style.display = "none";
        expanded = false;
    }
}
function showCheckTheme() {
    var checkboxes = document.getElementById("checkTheme");
    if (!expanded) {
        checkboxes.style.display = "block";
        expanded = true;
    } else {
        checkboxes.style.display = "none";
        expanded = false;
    }
}

$(".dropdown2 dt a").on('click', function () {
    $(".dropdown2 dd ul").slideToggle('fast');
});

$(".dropdown2 dd ul li a").on('click', function () {
    $(".dropdown2 dd ul").hide();
});

function getSelectedValue(id) {
    return $("#" + id).find("dt a span.value").html();
}

$(document).bind('click', function (e) {
    var $clicked = $(e.target);
    if (!$clicked.parents().hasClass("dropdown2")) $(".dropdown2 dd ul").hide();
});

$('.mutliSelect input[type="checkbox"]').on('click', function () {

    var title = $(this).closest('.mutliSelect').find('input[type="checkbox"]').val(),
        title = $(this).val() + ",";

    if ($(this).is(':checked')) {
        var html = '<span title="' + title + '">' + title + '</span>';
        $('.multiSel').append(html);
        $(".hida").hide();
    } else {
        $('span[title="' + title + '"]').remove();
        var ret = $(".hida");
        $('.dropdown2 dt a').append(ret);

    }
    if ($('.multiSel').text() == "") {
        $('.multiSel').append("Niveau");
    }
});