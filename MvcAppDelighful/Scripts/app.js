var initCarousel = function(){
	if($(".carousel .item").length > 0){
		$(".carousel").carousel({
		  interval: 3000
		});
	}
}
var initClose = function(){
	if($(".btn-close").length > 0){
		$(".btn-close").click(function(e){
			e.preventDefault();			
			var id = $(this).attr("data-id");
			$(id).addClass("hidden");
		});
	}
}
var initCommon = function(){
	if($(".printIt").length > 0){
		$(".printIt").click(function(e){
			e.preventDefault();
			window.print();
		});
	}
}
var initdatasTable = function(){
	if($(".datas-table").length > 0){
		$(".datas-table").on("post-body.bs.table", function(){
	    initPercircle();
	    initTooltip();
		});
	}
};
var initDatepicker = function(){
	// Bootstrap Datepicker
	if($(".filterDatepicker").length > 0){
		$(".filterDatepicker").datepicker({
	    format: "dd/mm/yyyy",
	    language: "fr",
	    autoclose: true,
	    todayHighlight: true,
	    orientation: "bottom left"
		});
		var today = new Date();
		$(".filterDateStart").datepicker("setDate", today);
		$(".filterDateEnd").datepicker("setDate", today);
	}
	if($(".control-date").length > 0){
		$(".control-date").datepicker({
	    format: "dd/mm/yyyy",
	    language: "fr",
	    autoclose: true,
	    todayHighlight: true,
	    orientation: "bottom left"
		});
		var today = new Date();
		$(".control-date").datepicker("setDate", today);
	}
}
var initDeleteProfile = function(){
	if($(".delete-profile").length > 0){
		$(".delete-profile").click(function(e){
			e.preventDefault();
			// Delete the profile on the server side....
			// then delete the html of the profile
			$(this).parents(".data-item").remove();
		});
	}
}
var initDisplayBy = function(){
	if($("#displayBy").length > 0){
		$("#displayBy").change(function(){			
			$(".stat-content.active").hide().removeClass("active");
			var id = $(this).val();
			$(id).slideDown("fast", function(){$(id).addClass("active")});
		});
	}
}
var initDropdown = function(){
	if($(".btn-dropdown").length > 0){
		$(".btn-dropdown").click(function(e){
			e.preventDefault(e);
			$(".dropdown-menu").not($(this).next(".dropdown-menu")).removeClass("in");
			$(".btn-dropdown").not($(this)).addClass("collapsed");
		});
		$("body").click(function(e){
			if (!$(".dropdown-menu").is(e.target) && $(".dropdown-menu").has(e.target).length === 0 && !$(".btn-dropdown").is(e.target) && e.target.className !== "select2-selection__choice__remove"){
        $(".dropdown-menu").removeClass("in");
  			$(".btn-dropdown").addClass("collapsed").attr("aria-expanded", "false");
	    }
		});
	}
	if($(".close-dropdown").length > 0){
		$(".close-dropdown").click(function(e){
			e.preventDefault();
			var id = $(this).data("id");
			$(id).animate({marginLeft: "100%"}, 500, function(){
				$(this).removeAttr("style");
				$(this).removeClass("in").attr("aria-expanded", "false");
				$(".btn-dropdown[data-target='" + id + "']").attr("aria-expanded", "false").addClass("collapsed");
  		});
		});
	}
	if($(".apply-filter").length > 0){
		$(".apply-filter").click(function(e){
			e.preventDefault();
			//Add Server Side's code here to update results

			//Then close the dropdown menu
			var id = "#" + $(this).parents(".dropdown-menu").attr("id");
			$(".btn-dropdown[data-target='" + id + "']").attr("aria-expanded", "false").addClass("collapsed");
			if($(this).parents(".dropdown-header").length > 0){
				$(id).animate({marginLeft: "100%"}, 500, function(){
					$(this).removeAttr("style");
					$(this).removeClass("in").attr("aria-expanded", "false");
	  		});
			}
			else{
				$(id).removeClass("in").attr("aria-expanded", "false");
			}
		});
	}

	if($(".show-popover").length > 0){
		$("body").click(function(e){
			if(!$(".box-popover").is(e.target) && $(".box-popover").has(e.target).length === 0 && !$(".show-popover").is(e.target) && e.target.className !== "show-popover"){
        $(".box-popover").removeClass("in");
  			$(".show-popover").addClass("collapsed").attr("aria-expanded", "false");
	    }
		});
	}
}
var initFilter = function(){
	if($(".delete-filter").length > 0){
		$(".delete-filter").click(function(e){
			e.preventDefault();
			//Server side code here to delete a filter
			// ....

			//Hide the selected filters zone if 0 selected-filter left
			if($(this).parents(".selected-filters").children(".selected-filter").length - 1 == 0){
				$(this).parents(".selected-filters").fadeOut();
			}
			// Then remove the html from the page
			$(this).parents(".selected-filter").remove();
		});
	}

	if($(".reset-filters").length > 0){
		$(".reset-filters").click(function(e){
			e.preventDefault();
			//Server side code here to delete all filters
			// ....

			// Then remove the html from the page
			$(this).parents(".selected-filters").find(".selected-filter").remove();
			$(this).parents(".selected-filters").fadeOut();
		});
	}
}
var initForm = function(){
	if($(".add-form").length > 0){
		$(".add-form").change(function(){
			var id = $(this).data("id");
			if($(this).hasClass("closeAddedForm")){
				$(id).slideUp();
			}
			else{
				if($(this).is(":checked")){
					$(id).slideDown();
				}
				else{
					$(id).slideUp();
				}
			}		
		});	
	}

	if($(".show-rents-chain").length > 0){
		$(".show-rents-chain").change(function(){
			if($(this).is(":checked")){
				$(".rents-chain").slideDown();
			}
			else{
				$(".rents-chain").slideUp();
			}
		});	
	}

	if($("#calculate-simulation").length > 0){		
		$("#calculate-simulation").click(function(e){
			e.preventDefault();
			$(".form-message").slideUp();
			$("#simulation-results").slideDown();
			return false;
		});
	}

	if($(".show-btn").length > 0){
		$(".show-btn").each(function(){
			if($(this).is(":checked")){
				var id = $(this).data("id");
				$(id).show();
			}
		});
		$(".show-btn").click(function(){
			$(".hidden-btn").hide();
			var id = $(this).data("id");
			$(id).show();
		});	
	}

	// Hide hidden form in profiles selection
	if($("#profiles .radio input").length > 0){
		$("#profiles .radio input").change(function(){
			$("#profiles .hidden-form").hide();
			$(this).parents(".radio").next(".hidden-form").show();
		});
	}

	// Show confirmation
	if($(".btn-confirm").length > 0){
		$(".btn-confirm").click(function(e){
			e.preventDefault();
			// Add employee on server side
			// then hide the popin
			$(this).parents(".popin-modal").find(".close").trigger("click");
			// and show the confirmation message
			var id = $(this).data("id");
			$(id).removeClass("hidden");
			return false;
		});
	}

	if($(".decrease").length > 0){
		$(".decrease").click(function(e){
			e.preventDefault();
			var newVal = 0;
			if(parseInt($(this).next("input.form-quantity").val()) > 0){
				newVal = parseInt($(this).next("input.form-quantity").val()) - 1;
			}
			$(this).next("input.form-quantity").val(newVal);
		});
	}
	if($(".increase").length > 0){
		$(".increase").click(function(e){
			e.preventDefault();
			var quantity = parseInt($(this).parents("tr").find(".quantity").data("origine-quantity"));
			var newVal = quantity;
			if(parseInt($(this).prev("input.form-quantity").val()) < quantity){
				newVal = parseInt($(this).prev("input.form-quantity").val()) + 1;
			}
			$(this).prev("input.form-quantity").val(newVal);
		});
	}

	if($(".reintegrateEquipment").length > 0){
		$(".reintegrateEquipment").click(function(e){
			e.preventDefault();
			var row = $(this).parents("tr");
			if(parseInt(row.find(".quantityToIntegrate").val()) > 0){
				if($("#listSelections .li" + row.attr("class")).length > 0){
					$("#listSelections .li" + row.attr("class")).find(".addedQuantity").text(row.find(".quantityToIntegrate").val());
				}
				else{
					var html =  '<li class="li' + row.attr("class") + '"><a href="#" onclick="removeEquipment(\''+ row.attr("class") +'\'); return false;"><strong><span class="addedQuantity">' + row.find(".quantityToIntegrate").val() + '</span> ' + row.find(".equipmentName").text() + '</strong>';
		          html += row.find(".equipmentDetails").text() + '<br>' + row.find(".equipmentRef").text() + '</a></li>';
					$("#listSelections").append(html);
				}
				var remainingQuantity = parseInt(row.find(".quantity").data("origine-quantity")) - parseInt(row.find(".quantityToIntegrate").val());
				row.find(".quantity").text(remainingQuantity);
				$("#emptySelection").hide();
				row.find(".quantityToIntegrate").val("0");
			}
		});
	}

	if($(".selectContract").length > 0){
		$(".selectContract").click(function(e){
			e.preventDefault();
			var row = $(this).parents("tr");
			var html =  '<li class="li' + row.attr("class") + '"><a href="#" onclick="removeItem(\''+ row.attr("class") +'\', this); return false;"><strong>' + row.find(".contractNumber").text() + ' - ' + row.find(".companyName").text() + '</strong>';
          html += row.find(".rentalType").text() + '<br>' + row.find(".rentalPrice").text() + ' (' + row.find(".rentalDetails").text() + ')</a></li>';
			$("#listSelections").append(html);
			row.hide();
			$("#emptySelection").hide();
		});
	}

	if($(".reassign").length > 0){
		$(".reassign").click(function(e){
			e.preventDefault();
			var row = $(this).parents("tr");
			if(row.find("select").length > 0 && row.find("select").val() == "0"){
				return false;
			}
			else{
				var wasReassigned = false;
				if(row.find("select").length > 0){
					$("#listSelections li.li" + row.attr("class") + " .reassignedEmployee").each(function(){
						if($(this).text().indexOf(row.find("select option:selected").text()) != -1){
							wasReassigned = true;
						}
					});
				}
				else{
					if($("#listSelections li.li" + row.attr("class")).length > 0){
						wasReassigned = true;
					}
				}

				if(!wasReassigned){
					var html =  '<li class="li' + row.attr("class") + '"><a href="#" onclick="removeItem(\''+ row.attr("class") +'\', this); return false;"><strong>' + row.find(".reassignmentNumber").text() + '</strong>';
		          html += row.find(".companyDetails").text() + '<br>' + row.find(".reassignmentDate").text();
				      if(row.find("select").length > 0){
				      	html += '<br>Réaffecté à <span class="reassignedEmployee">' + row.find("select option:selected").text() + '</span></a></li>';
				      }
		          html += '</a></li>';	
					$("#listSelections").append(html);
					$("#emptySelection").hide();
				}
			}
		});
	}


	if($(".showPassword").length > 0){
		$(".showPassword").click(function(){
			var id = $(this).data("target");
			if($(this).is(":checked")){
				$(id).attr("type", "text");
			}
			else{
				$(id).attr("type", "password");
			}
		});
	}

	if($(".btn-edit-comment").length > 0){
		$(".btn-edit-comment").click(function(e){
			e.preventDefault();
			var inputId = $(this).data("target");
			$(inputId).removeAttr("disabled");			
		});
	}

}

var removeEquipment = function(rowClass, elt){
	var origineQuantity = $("." + rowClass).find(".quantity").data("origine-quantity");
	$("." + rowClass).find(".quantity").text(origineQuantity);
	$(".li" + rowClass).remove();
	if($("#listSelections li").size() > 0){
		$("#emptySelection").hide();
	}
	else{
		$("#emptySelection").show();
	}
}

var removeItem = function(rowClass, elt){
	$(elt).parents("li").remove();
	$("tr." + rowClass).show();
	if($("tr." + rowClass).find("select").length > 0){
		$("tr." + rowClass).find("select option:selected").removeAttr("selected");
	}
	if($("#listSelections li").size() > 0){
		$("#emptySelection").hide();
	}
	else{
		$("#emptySelection").show();
	}
}
var initMenuAccount = function(){
	if($(".show-menu-account").length > 0){
		$(".show-menu-account").click(function(e){
			e.preventDefault();
			var id = $(this).attr("data-target");
			if(!$(this).hasClass("menuOpen")){
				$(id).animate({right: 0, duration: 200, easing: 'easeOutBounce'});
				$(this).addClass("menuOpen");
				if($(window).width() < 1169){
					$("body").addClass("noScroll");
				}
			}
			else{
				$(id).animate({right: "-350px", duration: 200, easing: 'easeOutBounce'});
				$(this).removeClass("menuOpen");
				if($(window).width() < 1169){
					$("body").removeClass("noScroll");
				}
			}
		});

		$("body").click(function(e){
			if (!$(".account-menu").is(e.target) && $(".account-menu").has(e.target).length === 0 && !$(".show-menu-account").is(e.target) && $(".show-menu-account").has(e.target).length === 0){
        $(".account-menu").animate({right: "-350px", duration: 200, easing: 'easeOutBounce'});
				$("body").removeClass("noScroll");
	    }
		});

	}

	if($(".hide-menu-account").length > 0){
		$(".hide-menu-account").click(function(e){
			e.preventDefault();			
			var id = $(this).attr("data-target");
			$(id).animate({right: "-350px", duration: 200, easing: 'easeOutBounce'});
			$(".show-menu-account").removeClass("menuOpen");
			$("body").removeClass("noScroll");
		});
	}
}
var initNavMain = function(){
	if($(".nav-main-item.has-submenu").length > 0){
		$(".nav-main-item.has-submenu").click(function(){
			$(this).siblings(".has-submenu").each(function(){
				$(this).find(".nav-main-link").attr("aria-expanded", "false").addClass("collapsed");
				$(this).find(".nav-main-link").next(".submenu").removeClass("in");
			});

		});
		if($(window).width() < 1169){
			$("body").click(function(e){
				if (!$(".nav-main").is(e.target) && $(".nav-main").has(e.target).length === 0 && !$(".navbar-toggle").is(e.target) && e.target.className !== "navbar-toggle"){
	        $(".nav-main").removeClass("in");
  				$(".navbar-toggle").addClass("collapsed").attr("aria-expanded", "false");
					$("body").removeAttr("style");
		    }
			});
			$(".navbar-toggle").click(function(e){
				e.preventDefault();
				if($(this).hasClass("collapsed")){
					$("body").css({overflow: "hidden", position: "fixed"});
				}
				else{
					$("body").removeAttr("style");
				}
			});
			
		}
	}
}
var initNavTabs = function(){
	if($(".with-btns.nav-tabs > li > a").length > 0){
		$(".with-btns.nav-tabs > li > a").click(function(e){
			e.preventDefault();
			var btnsId = "#btns-" + $(this).attr("aria-controls");
			$(".buttons.active").removeClass("active");
			$(btnsId).addClass("active");
		});
	}
	if($(".statistics-nav-tabs .item-btn").length > 0){
		$(".statistics-nav-tabs .item-btn").click(function(e){
		  e.preventDefault();
		  if(!$(this).hasClass("current")){
	  	  $(".item-btn").removeClass("current");
	  	  var id = $(this).data("tab");
	  	  $(".item-btn[data-tab='" + id + "']").addClass("current"); 	  
	  	  $(".tab-current").fadeIn("fast", function(){
	  	  	$(this).removeClass("tab-current");
	  	  	$(id).fadeOut().addClass("tab-current");
	  	  });
		  }
		});

		$(".next-control").click(function(e){
			e.preventDefault();
			$(".statistics-nav-tabs-scroll").mCustomScrollbar("scrollTo", "-=150",{
		    scrollEasing:"easeOut",
		    scrollInertia:500
			});
		});
		$(".prev-control").click(function(e){
			e.preventDefault();
			$(".statistics-nav-tabs-scroll").mCustomScrollbar("scrollTo", "+=150",{
		    scrollEasing:"easeOut",
		    scrollInertia:500
			});
		});
	}

	if($("#navTabsByTabId a").length > 0){
		var tabId = urlParam("tabId");
		if(tabId==null){
			$("#navTabsByTabId a:eq(0)").trigger("click");
		}
		else{
			$("#navTabsByTabId a[href='#" + tabId + "']").trigger("click");
		}
	}

}

var urlParam = function(name){
    var results = new RegExp('[\?&]' + name + '=([^]*)').exec(window.location.href);
    if (results==null){
       return null;
    }
    else{
       return results[1] || 0;
    }
}
var initOnOffSwitch = function(){
	if($(".custom-switch").length > 0){
		new DG.OnOffSwitchAuto({
      cls:'.custom-switch',
      height:20,
      listener:function(name, checked){
        if(checked){
          $("input[name=" + name +  "]").parents(".switch-row").find(".checkbox input").removeAttr("disabled");
          $("input[name=" + name +  "]").parents(".switch-row").addClass("on");
        }
        else{
          $("input[name=" + name +  "]").parents(".switch-row").find(".checkbox input").attr("disabled", "disabled").removeAttr("checked");
          $("input[name=" + name +  "]").parents(".switch-row").removeClass("on");
        }
      }
    });

    setTimeout(function(){
    	$("#settings .custom-switch").each(function(){
    		if($(this).is(":checked")){
          $(this).parents(".switch-row").addClass("on");
    		}
    	});
    }, 500);
	}

	if($("#enableAll").length > 0){
		$("#enableAll").click(function(e){
			e.preventDefault();
			$("#settings .switch-row:not(.on) input.custom-switch").trigger("click");
		});
	}

  if($("#disableAll").length > 0){
    $("#disableAll").click(function(e){
      e.preventDefault();
      $("#settings .switch-row.on input.custom-switch").trigger("click");
    });
  }

  if($("#subscribeToAll").length > 0){
    $("#subscribeToAll").click(function(e){
      e.preventDefault();
      $("#communicationOptions input.custom-switch:not(:checked)").trigger("click");
    });
  }

  if($("#unsubscribeToAll").length > 0){
    $("#unsubscribeToAll").click(function(e){
      e.preventDefault();
      $("#communicationOptions input.custom-switch:checked").trigger("click");
    });
  }
  
}
var initPercircle = function(){
	if($(".percircle").length > 0){
		setTimeout(function(){
			$(".percircle").percircle();
		}, 500);		
	}
}
var simulationNb = 2;
var initRangeInput = function(){
	if($("input[data-slider-id]").length > 0){
		$("input[data-slider-id]").slider({
			tooltip: 'always'
		});
	}

	if($(".simulate-more").length > 0){
		$(".simulate-more").click(function(e){
			e.preventDefault();
			simulationNb++;
			var rangeHtml = '<div class="form-range"><span class="range-min">4</span>';
				 rangeHtml += '<input type="text" id="simulationDuration-' + simulationNb + '" data-slider-id="simulationDuration-' + simulationNb + '" id="simulationDuration-' + simulationNb + '" data-slider-min="4" data-slider-max="20" data-slider-step="1" data-slider-value="4" />';
				 rangeHtml += '<span class="range-max">20</span></div>';
			$(rangeHtml).insertBefore($(this));
			$("#simulationDuration-" + simulationNb).slider({
				tooltip: 'always'
			});
		});
	}
}
var horizontalScroll = function(){
	if($(window).width() > 767){
		if($(".horizontal-scroll-all").length > 0){
		  $(".horizontal-scroll-all").mCustomScrollbar({
		    axis:"x",
		    advanced:{
		      autoExpandHorizontalScroll:true
		    }
		  });
			$(".v-scroll .modal-body").mCustomScrollbar();
		}
	
		if($(".statistics-nav-tabs-scroll").length > 0){
		  $(".statistics-nav-tabs-scroll").mCustomScrollbar({
		    axis:"x",
		    advanced:{
		      autoExpandHorizontalScroll:true
		    },
		    callbacks:{
		    	onInit:function(){
		    		$(".statistics-nav-tabs-container").addClass("scrollStart");
		    	},
	      	onScroll:function(){
						$(".statistics-nav-tabs-container").removeClass("scrollStart");
						$(".statistics-nav-tabs-container").removeClass("scrollEnd");
	      	},
	      	onTotalScrollBack:function(){
	      		$(".statistics-nav-tabs-container").addClass("scrollStart");
	      	},
	      	onTotalScroll:function(){
	      		$(".statistics-nav-tabs-container").addClass("scrollEnd");
	      	}
	    	}
		  });
		}	  
	}
}

var horizontalScrollTablet = function(){
	if($(window).width() > 767 && $(window).width() < 1171){
		if($(".horizontal-scroll-table .fixed-table-body").length > 0){
	  	$(".horizontal-scroll-table .fixed-table-body").mCustomScrollbar({
		    axis:"x",
		    advanced:{
		      autoExpandHorizontalScroll:true
		    }
		  });
	  }
	}	
}

var initHorizontalScroll = function(){

	setTimeout(horizontalScroll, 500);
	setTimeout(horizontalScrollTablet, 500);

	$(window).resize(function(){

		if($(".horizontal-scroll-all").length > 0){
			$(".horizontal-scroll-all").mCustomScrollbar("destroy");
		}

		if($(".statistics-nav-tabs-scroll").length > 0){
			$(".statistics-nav-tabs-scroll").mCustomScrollbar("destroy");
		}
		
		if($(".horizontal-scroll-table .fixed-table-body").length > 0){
			$(".horizontal-scroll-table .fixed-table-body").mCustomScrollbar("destroy");
		}

		setTimeout(horizontalScroll, 500);
		setTimeout(horizontalScrollTablet, 500);
	});
}
var initSearch = function(){
	if($("#search .typeahead").length > 0){
		$("#search .typeahead").typeahead({
		  hint: true,
		  highlight: true,
		  minLength: 1
		},
		{
		  name: 'states',
		  source: substringMatcher(searchDatas)
		});
	}
}

var searchDatas = [
	"La location financière",
	"Le Leaseback locatif",
	"Leasecom SaaS",
	"Les logiciels complexes",
	"Lease & Go",
	"Le programme Vendor",
	"Nos références"
];

var substringMatcher = function(strs) {
  return function findMatches(q, cb) {
    var matches, substringRegex;

    // an array that will be populated with substring matches
    matches = [];

    // regex used to determine if a string contains the substring `q`
    substrRegex = new RegExp(q, 'i');

    // iterate through the pool of strings and for any string that
    // contains the substring `q`, add it to the `matches` array
    $.each(strs, function(i, str) {
      if (substrRegex.test(str)) {
        matches.push(str);
      }
    });

    cb(matches);
  };
};

var initSelect2 = function(){
	if($(".select2-select").length > 0){
		$(".select2-select").select2({
	    placeholder: "Rechercher...",
	    templateResult: formatResults
	  });
	}
	if($(".select2-select-limit").length > 0){
		$(".select2-select-limit").each(function(){
			var limit = $(this).data("limit");
			$(this).select2({
		    placeholder: "Rechercher...",
		    maximumSelectionLength: limit,	    
		    templateResult: formatResults
		  });
		});
		
	}
}
var formatResults = function(resultItem) {
  if (!resultItem.id) { return resultItem.text; }
  var $resultItem = $(
  	'<span class="select2-item">' + resultItem.text + '</span>'
  );
  return $resultItem;
};
var initToggleFilter = function(){
	if($(".btn-filter").length > 0){
		$(".btn-filter").click(function(e){
			e.preventDefault();
			var id = $(this).data("id");
			$(id).slideToggle("fast");
			$(this).toggleClass("active");
		});
	}
}
var initToggleReadonly = function(){
	if($(".trigger-readonly").length > 0){
		$(".trigger-readonly").click(function(e){
			e.preventDefault();
			var id = "#"+ $(this).attr("for");
      $(id).removeAttr("readonly");
      $(id).focus();
			$(this).hide();
			$(this).siblings(".btn-validate").show();
		});

		$(".btn-validate").click(function(e){
			e.preventDefault();
			$(this).hide();
			$(this).siblings(".trigger-readonly").show();
	    $(this).siblings("input[type='text']").attr("readonly","readonly");
		});
	}
}
var initTooltip = function(){
	if($('[data-toggle="tooltip"]').length > 0){
		$('[data-toggle="tooltip"]').tooltip();
	}
}
$(function(){

	initNavMain();
	initHorizontalScroll();
	initDatepicker();
	initToggleFilter();
	initDropdown();
	initPercircle();
	initdatasTable();
	initTooltip();
	initSearch();
	initSelect2();
	initFilter();
	initNavTabs();
	initCarousel();
	
	initToggleReadonly();
	initRangeInput();
	initForm();
	initClose();
	initMenuAccount();

	initOnOffSwitch();

	initDisplayBy();
	initDeleteProfile();

	initCommon();

});