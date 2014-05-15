$(window).resize(function() {
  $("body").css("width","");
  pupMakeup();
  makeup();
});

$(window).load(function() {
  $("body").css("width",$("body").width()-1).css("width",$("body").width()+1);
  makeup();
});


$(window).scroll(function() {
  if ($(".fixed-menu").length) {
    if ($(window).scrollTop() > $(".main-menu-wrapper").outerHeight()) {
      $(".fixed-menu").fadeIn(150)
    } else {
      $(".fixed-menu").fadeOut(150)
    }
  }
});

$(document).ready(function () {

	// Наши преимущества, попапы
	
	$(".pros-item .descr, .pros-item .pic").click(function() {
		var tooltip = $(this).parents(".pros-item").find(".pros-tooltip");
		
		$(".pros-item .pros-tooltip").hide();
		$(".pros-item-act").removeClass("pros-item-act");
		
		tooltip.fadeIn(200);
		
		$(this).parents(".pros-item").addClass("pros-item-act")
		
	});
	
	$(".pros-tooltip .close").click(function() {
		$(this).parents(".pros-tooltip").fadeOut(150);
		$(this).parents(".pros-item").removeClass("pros-item-act");
	});
	
	$(document).mouseup(function (e) {
    var container1 = $(".pros-tooltip");
    var container2 = $(".pros-item .descr, .pros-item .pic");

    if (!container1.is(e.target) && !container2.is(e.target) // if the target of the click isn't the container...
        && container1.has(e.target).length === 0 && container2.has(e.target).length === 0) // ... nor a descendant of the container
    {
        container1.fadeOut(150);
				$(".pros-item-act").removeClass("pros-item-act");
    }
  });

	// Наши преимущества, попапы END
	
  $(".tabbed-content").each(function() {
    var tabs = $(this).children(".tabs").find(".tab");
    var tabContents = $(this).children(".tabs-content").children(".tab-content");
    
    if (!tabs.hasClass("act")) {
      tabs.first().addClass("act");
    }
    
    tabContents.hide();
    tabContents.filter("[rel='"+tabs.filter(".act").attr("rel")+"']").show();
    
    tabs.click(function() {
      tabs.removeClass("act");
      $(this).addClass("act");
      
      tabContents.hide();
      
      tabContents.filter("[rel='"+$(this).attr("rel")+"']").fadeIn(250);
      
    });
  
  });
  

  $(".main-menu a").click(function() {
    
    $("html,body").animate({
      scrollTop: $("a[name='"+$(this).attr("href").replace("#","")+"']").offset().top - 58
    },1000);
    
    return false;
  });
  
  if ($(".main-slider").length) {
    $(".main-slider").mainSlider();
  }
  
  if ($(".menu-slider").length) {
    $(".menu-slider").mainSlider();
  }
  
  $(".people-slider").each(function() {
    $(this).bind({
      slidechange : function(event,ui) {
        val = ui.value;
        $(this).find(".ui-slider-handle").html(val);
        $(this).find(".ui-slider-handle").formatNumber();
        $(this).parents(".calc-cont").find(".area-val").html(parseFloat($(this).attr("areafactor"))*parseInt(val));
        $(this).parents(".calc-cont").find(".area-val").formatNumber();
        $(this).parents(".calc-cont").find(".price-val").html(parseInt(val)*parseInt($(this).parents(".calc-cont").find(".price-slider .ui-slider-handle").html().replace(" ","")));
        $(this).parents(".calc-cont").find(".price-val").formatNumber();
      },
      slidecreate : function(event,ui) {
        var sldr = $(this);
        $(this).parents(".slider-wrapper").append("<div class='begin-link' />");
        $(this).parents(".slider-wrapper").append("<div class='end-link' />");
        var val=$(this).slider('value');
        $(this).find(".ui-slider-handle").html(val);
        $(this).find(".ui-slider-handle").formatNumber();
        $(this).parents(".calc-cont").find(".area-val").html(parseFloat($(this).attr("areafactor"))*parseInt(val));
        $(this).parents(".calc-cont").find(".area-val").formatNumber();
        $(this).parents(".slider-wrapper").find(".begin-link").on("click",function() {
          sldr.slider("value",sldr.slider("option","min"));
        });
        $(this).parents(".slider-wrapper").find(".end-link").on("click",function() {
          sldr.slider("value",sldr.slider("option","max"))
        });
      }
    }).slider({
        step: 10,
        range: "min",
        min: 50,
        max: 500,
        animate: "slow",
        slide: function(event, ui) {
          val = ui.value;
          $(this).find(".ui-slider-handle").html(val);
          $(this).find(".ui-slider-handle").formatNumber();
          $(this).parents(".calc-cont").find(".area-val").html(parseFloat($(this).attr("areafactor"))*parseInt(val));
          $(this).parents(".calc-cont").find(".area-val").formatNumber();
          $(this).parents(".calc-cont").find(".price-val").html(parseInt(val)*parseInt($(this).parents(".calc-cont").find(".price-slider .ui-slider-handle").html().replace(" ","")));
          $(this).parents(".calc-cont").find(".price-val").formatNumber();
        }
    });
  });
  
  // $(".people-slider").each(function() {
    // $(this).slider({
      // step: 10,
      // range: "min",
      // min: 50,
      // max: 500,
      // animate: "slow",
      // create: function( e, ui ) {
        // var sldr = $(this);
        // $(this).parents(".slider-wrapper").append("<div class='begin-link' />");
        // $(this).parents(".slider-wrapper").append("<div class='end-link' />");
        // var val=$(this).slider('value');
        // $(this).find(".ui-slider-handle").html(val);
        // $(this).find(".ui-slider-handle").formatNumber();
        // $(this).parents(".calc-cont").find(".area-val").html(parseFloat($(this).attr("areafactor"))*parseInt(val));
        // $(this).parents(".calc-cont").find(".area-val").formatNumber();
        // $(this).parents(".slider-wrapper").find(".begin-link").on("click",function() {
          // sldr.slider("value",sldr.slider("option","min"));
        // });
        // $(this).parents(".slider-wrapper").find(".end-link").on("click",function() {
          // sldr.slider("value",sldr.slider("option","max"))
        // });
      // },
      // slide: function(event, ui) {
        // val = ui.value;
        // $(this).find(".ui-slider-handle").html(val);
        // $(this).find(".ui-slider-handle").formatNumber();
        // $(this).parents(".calc-cont").find(".area-val").html(parseFloat($(this).attr("areafactor"))*parseInt(val));
        // $(this).parents(".calc-cont").find(".area-val").formatNumber();
        // $(this).parents(".calc-cont").find(".price-val").html(parseInt(val)*parseInt($(this).parents(".calc-cont").find(".price-slider .ui-slider-handle").html().replace(" ","")));
        // $(this).parents(".calc-cont").find(".price-val").formatNumber();
      // }
    // });
  // });
  
  $(".price-slider").each(function() {
    var prices = $(this).attr("prices").split("-");
    var minVal = parseInt(prices[0]);
    var midVal = parseInt(prices[1]);
    var maxVal = parseInt(prices[prices.length-1]);
    
    $(this).bind({
      slidecreate : function(event,ui) {
        var sldr = $(this);
        $(this).parents(".slider-wrapper").append("<div class='begin-link' />");
        $(this).parents(".slider-wrapper").append("<div class='end-link' />");
        var val=minVal;
        $(this).find(".ui-slider-handle").html(val);
        $(this).find(".ui-slider-handle").formatNumber();
        $(this).parents(".calc-cont").find(".personprice-val").html(val);
        $(this).parents(".calc-cont").find(".personprice-val").formatNumber();
        $(this).parents(".calc-cont").find(".price-val").html(parseInt(val)*parseInt($(this).parents(".calc-cont").find(".people-slider").slider('value')));
        $(this).parents(".calc-cont").find(".price-val").formatNumber();
        $(this).parents(".calc-cont").find(".result-table-cont").hide();
        $(this).parents(".calc-cont").find(".result-table-cont").eq(0).fadeIn(150);
        
        $(this).parents(".slider-wrapper").find(".begin-link").on("click",function() {
          sldr.slider("value",sldr.slider("option","min"))
          val = minVal;
          sldr.find(".ui-slider-handle").html(val);
          sldr.find(".ui-slider-handle").formatNumber();
          sldr.parents(".calc-cont").find(".price-val").formatNumber();
          sldr.find(".ui-slider-handle").html(val);
          sldr.find(".ui-slider-handle").formatNumber();
          sldr.parents(".calc-cont").find(".personprice-val").html(val);
          sldr.parents(".calc-cont").find(".personprice-val").formatNumber();
          sldr.parents(".calc-cont").find(".price-val").html(parseInt(val)*parseInt(sldr.parents(".calc-cont").find(".people-slider").slider('value')));
          sldr.parents(".calc-cont").find(".price-val").formatNumber();
          sldr.parents(".calc-cont").find(".result-table-cont").hide();
          sldr.parents(".calc-cont").find(".result-table-cont").eq(0).fadeIn(150);
        });
        $(this).parents(".slider-wrapper").find(".end-link").on("click",function() {
          sldr.slider("value",sldr.slider("option","max"))
          val = maxVal;
          sldr.find(".ui-slider-handle").html(val);
          sldr.find(".ui-slider-handle").formatNumber();
          sldr.parents(".calc-cont").find(".price-val").formatNumber();
          sldr.find(".ui-slider-handle").html(val);
          sldr.find(".ui-slider-handle").formatNumber();
          sldr.parents(".calc-cont").find(".personprice-val").html(val);
          sldr.parents(".calc-cont").find(".personprice-val").formatNumber();
          sldr.parents(".calc-cont").find(".price-val").html(parseInt(val)*parseInt(sldr.parents(".calc-cont").find(".people-slider").slider('value')));
          sldr.parents(".calc-cont").find(".price-val").formatNumber();
          sldr.parents(".calc-cont").find(".result-table-cont").hide();
          sldr.parents(".calc-cont").find(".result-table-cont").eq(2).fadeIn(150);
        });
        
      },
      slidestop : function(event,ui) {
        sliderVal = ui.value;
        if (sliderVal <= 250) {
          $(this).slider( "value", 0 );
          $(this).parents(".calc-cont").find(".result-table-cont").hide();
          $(this).parents(".calc-cont").find(".result-table-cont").eq(0).fadeIn(150);
          val = minVal;
        }
        if (sliderVal > 250 && sliderVal <= 750) {
          $(this).slider( "value", 500 );
          $(this).parents(".calc-cont").find(".result-table-cont").hide();
          $(this).parents(".calc-cont").find(".result-table-cont").eq(1).fadeIn(150);
          val = midVal;
        }
        if (sliderVal > 750) {
          $(this).slider( "value", 1000);
          $(this).parents(".calc-cont").find(".result-table-cont").hide();
          $(this).parents(".calc-cont").find(".result-table-cont").eq(2).fadeIn(150);
          val = maxVal;
        }
        // val = $(this).slider("value");
        $(this).find(".ui-slider-handle").html(val);
        $(this).find(".ui-slider-handle").formatNumber();
        $(this).parents(".calc-cont").find(".price-val").formatNumber();
        $(this).find(".ui-slider-handle").html(val);
        $(this).find(".ui-slider-handle").formatNumber();
        $(this).parents(".calc-cont").find(".personprice-val").html(val);
        $(this).parents(".calc-cont").find(".personprice-val").formatNumber();
        $(this).parents(".calc-cont").find(".price-val").html(parseInt(val)*parseInt($(this).parents(".calc-cont").find(".people-slider").slider('value')));
        $(this).parents(".calc-cont").find(".price-val").formatNumber();
      }
    }).slider({
      step: 10,
      range: "min",
      min: 0,
      max: 1000,
      animate: "slow"
    });
  });
  
  // $(".price-slider").each(function() {
    // var prices = $(this).attr("prices").split("-");
    // var minVal = parseInt(prices[0]);
    // var midVal = parseInt(prices[1]);
    // var maxVal = parseInt(prices[prices.length-1]);
    // $(this).slider({
      // step: 10,
      // range: "min",
      // min: 0,
      // max: 1000,
      // animate: "slow",
      // create: function( e, ui ) {
        // var sldr = $(this);
        // $(this).parents(".slider-wrapper").append("<div class='begin-link' />");
        // $(this).parents(".slider-wrapper").append("<div class='end-link' />");
        // var val=minVal;
        // $(this).find(".ui-slider-handle").html(val);
        // $(this).find(".ui-slider-handle").formatNumber();
        // $(this).parents(".calc-cont").find(".personprice-val").html(val);
        // $(this).parents(".calc-cont").find(".personprice-val").formatNumber();
        // $(this).parents(".calc-cont").find(".price-val").html(parseInt(val)*parseInt($(this).parents(".calc-cont").find(".people-slider").slider('value')));
        // $(this).parents(".calc-cont").find(".price-val").formatNumber();
        // $(this).parents(".slider-wrapper").find(".begin-link").on("click",function() {
          // sldr.slider("value",sldr.slider("option","min"))
        // });
        // $(this).parents(".slider-wrapper").find(".end-link").on("click",function() {
          // sldr.slider("value",sldr.slider("option","max"))
        // });
        // $(this).parents(".calc-cont").find(".result-table-cont").hide();
        // $(this).parents(".calc-cont").find(".result-table-cont").eq(0).fadeIn(150);
      // },
      // slide: function(event, ui) {
        // val = ui.value;
      // },
      // stop: function(event, ui) {
        // sliderVal = ui.value;
        // if (sliderVal <= 250) {
          // $(this).slider( "value", 0 );
          // $(this).parents(".calc-cont").find(".result-table-cont").hide();
          // $(this).parents(".calc-cont").find(".result-table-cont").eq(0).fadeIn(150);
          // val = minVal;
        // }
        // if (sliderVal > 250 && sliderVal <= 750) {
          // $(this).slider( "value", 500 );
          // $(this).parents(".calc-cont").find(".result-table-cont").hide();
          // $(this).parents(".calc-cont").find(".result-table-cont").eq(1).fadeIn(150);
          // val = midVal;
        // }
        // if (sliderVal > 750) {
          // $(this).slider( "value", 1000);
          // $(this).parents(".calc-cont").find(".result-table-cont").hide();
          // $(this).parents(".calc-cont").find(".result-table-cont").eq(2).fadeIn(150);
          // val = maxVal;
        // }
        // // val = $(this).slider("value");
        // $(this).find(".ui-slider-handle").html(val);
        // $(this).find(".ui-slider-handle").formatNumber();
        // $(this).parents(".calc-cont").find(".price-val").formatNumber();
        // $(this).find(".ui-slider-handle").html(val);
        // $(this).find(".ui-slider-handle").formatNumber();
        // $(this).parents(".calc-cont").find(".personprice-val").html(val);
        // $(this).parents(".calc-cont").find(".personprice-val").formatNumber();
        // $(this).parents(".calc-cont").find(".price-val").html(parseInt(val)*parseInt($(this).parents(".calc-cont").find(".people-slider").slider('value')));
        // $(this).parents(".calc-cont").find(".price-val").formatNumber();
      // }
      
    // });
  // });
    
    
  /* --------------------------------------------------------- */

  $(".form-text").each(function() {
    if ($(this).val()) {
      $(this).prev(".placeholder").hide();
    }
  });

  $(".form-phone").mask("+7 (999) 999-99-99");

  validateForms();

  makeup();
  
  
});

function makeup() {

  $("input.form-submit").each(function () {
    if ($(this)[0].tagName == "INPUT" && !$(this).parents("form").find("div.form-submit").length) {
      var divBtn = $("<div></div>");
      var submit = $(this);
      divBtn.attr("class",$(this).attr("class")).attr("id",$(this).attr("id")).html("<span>" + $(this).val() + "</span>");
      $(this).after(divBtn);
      $(this).hide();
      
      if ($(this).is(":disabled")) {
        divBtn.addClass("button-disabled")
      }
      
      divBtn.on("click",function () {
        submit.click();
      });
    }
    
  });
  
  $("input:text, input:password, textarea").each(function() {
    $(this).addClass("initial");
    
    if ($(this).prop("tagName") == "INPUT") {
      // if (!$(this).parents(".input-wrapper").length) $(this).wrap("<div class='input-wrapper'></div>");
      if ($(this).hasClass("form-phone")) {
        $(this).focus(function() {
          $(this).removeClass("initial");
          $(this).parents(".form-item").find(".placeholder").hide();
        });
      } else {
        $(this).keydown(function() {
          $(this).removeClass("initial");
          $(this).parents(".form-item").find(".placeholder").hide();
        });
      }
      $(this).blur(function() {
        $(this).prev().prev(".placeholder").hide();
        if (!$(this).val()) {
          $(this).addClass("initial");
          $(this).parents(".form-item").find(".placeholder").show();
        }
      });
    } else {
      $(this).focus(function() {
        $(this).removeClass("initial");
        $(this).parents(".form-item").find(".placeholder").hide();
      });
      $(this).blur(function() {
        if (!$(this).val()) {
          $(this).addClass("initial");
          $(this).parents(".form-item").find(".placeholder").show();
        }
      });
    }
      
    $(this).parents(".form-item").find(".placeholder").click(function() {
      $(this).focus();
    });
    
  });
  
}

function validateForms() {
  
  $(".common-form form").each(function() {
    $(this).validate({
      focusInvalid: false,
      sendForm : false,
      errorPlacement: function(error, element) {
        // element.parents(".input-wrapper").addClass("input-wrapper-error");
        if (element.attr("errortext")) {
          error.html(element.attr("errortext"))
        }
        error.insertAfter(element).wrap("<div class='error-wrapper' />");
        element.prev(".placeholder").addClass("placeholder-error")
        if (element[0].tagName == "SELECT") {
          element.parents(".form-item").find(".param-selector").addClass("param-sel-error")
        }
      },
      unhighlight: function(element, errorClass, validClass) {
        // $(element).parents(".input-wrapper").removeClass("input-wrapper-error");
        $(element).removeClass(errorClass);
        $(element).next(".error-wrapper").remove();
        $(element).prev(".placeholder").removeClass("placeholder-error");
        if ($(element)[0].tagName == "SELECT") {
          $(element).parents(".form-item").find(".param-selector").removeClass("selector-error")
        }
      },
      invalidHandler: function(form, validatorcalc) {
          var errors = validatorcalc.numberOfInvalids();
          if (errors && validatorcalc.errorList[0].element.tagName == "INPUT") {                    
              validatorcalc.errorList[0].element.focus();
          }
      }
    });
    
    if ($(this).find(".form-email").length) {
      $(this).find(".form-email").rules('add', {
        email: true,
        messages: {
          required:  "Введите правильный адрес!"
        }
      });
    }
    
    if ($(this).find(".form-date").length) {
      $(this).find(".form-date").rules('add', {
        messages: {
          required:  "Выберите дату!"
        }
      });
    }
    
    if ($(this).find(".form-email").length && $(this).find(".form-phone").length) {
      var thisField = $(this).find(".form-phone");
      var relatedField = $(this).find(".form-email");
      thisField.rules('add', {
        required: function(element) {
          if (relatedField.val() == "") {
            return true;
          } else {
            return false;
          }
        }
      });
      var thisField2 = $(this).find(".form-email");
      var relatedField2 = $(this).find(".form-phone");
      thisField2.rules('add', {
        required: function(element) {
          if (relatedField2.val() == "") {
            return true;
          } else {
            return false;
          }
        }
      });
    }
    
  });  
    
}

function closePopup() {
  $(".tint").fadeTo(500,0,function() {
    $(this).remove();
  });
  $(".popup-act").removeClass("popup-act").fadeTo(300,0,function() {
    $(this).hide();
  });
}

function pupMakeup() {
  var popup = $(".popup-act");
  var pupTop = $(window).scrollTop() + ($(window).height() - popup.outerHeight(true))/2;
  if (pupTop < $(window).scrollTop() + 20) pupTop = $(window).scrollTop() + 20;  $(".tint").css("height",$(window).height()).css("width",$("body").width());
  if (!popup.hasClass("price-popup")) {
    popup.css("top",pupTop).css("left",($(window).width()-popup.outerWidth(true))/2 - 20);
  } else {
    popup.css("margin-top",$(window).scrollTop() - popup.parent().offset().top - popup.parent().outerHeight(true) + ($(window).height()-popup.outerHeight(true))/2);
  }
  
}

function openPopup(pupId) {
  var popup = $("#"+pupId);
  $("body").append("<div class='tint' style='display:none;' />");
  popup.addClass("popup-act").fadeTo(500,1);
  
  $(".tint").fadeTo(300,1);
  pupMakeup();
  
  if (!popup.children(".popup-shadow").length) {
    popup.append("<div class='popup-shadow' />");
  } 
  
  jQuery(document).keydown(function(e){
    if (e == null) { // ie
      keycode = event.keyCode;
    } else { // mozilla
      keycode = e.which;
    }
    
    if(keycode == 27){ // escape, close box
      closePopup()
    }
    
  });
  
  $(".tint").on("click", function () {
    closePopup()
  });
  
  $(".popup .close, .popup .cancel").on("click", function () {
    closePopup()
  });
}

jQuery.extend(jQuery.validator.messages, {
    required: "Заполните поле!",
    remote: "Please fix this field.",
    email: "Введите правильный e-mail",
    url: "Please enter a valid URL.",
    date: "Please enter a valid date.",
    dateISO: "Please enter a valid date (ISO).",
    number: "Please enter a valid number.",
    digits: "Please enter only digits.",
    creditcard: "Please enter a valid credit card number.",
    equalTo: "Please enter the same value again.",
    accept: "Please enter a value with a valid extension.",
    maxlength: jQuery.validator.format("Please enter no more than {0} characters."),
    minlength: jQuery.validator.format("Please enter at least {0} characters."),
    rangelength: jQuery.validator.format("Please enter a value between {0} and {1} characters long."),
    range: jQuery.validator.format("Please enter a value between {0} and {1}."),
    max: jQuery.validator.format("Please enter a value less than or equal to {0}."),
    min: jQuery.validator.format("Please enter a value greater than or equal to {0}.")
});

(function( jQuery ) {
  jQuery.fn.mainSlider = function() {
  
  
    var slider = $(this);
    var slides = slider.find(".slide");
    var sliderSize = slides.size();
    
    slides.hide();
    slides.eq(0).show().addClass("slide-act");
    
    //sliderMakeup();
    
    if (sliderSize > 1) {
    
      slides.bind("click",function () {
        if (listerItems.filter(".act").next().length) {
          listerItems.filter(".act").next().click();
        } else {
          listerItems.eq(0).click();
        }
      });
      
      var listerItems = slider.find(".lister-item");
      
      slider.find(".slides").after("<div class='next' />");
      slider.find(".slides").after("<div class='prev' />");
      
      var prevBtn = slider.find(".prev");
      var nextBtn = slider.find(".next");
      
      nextBtn.click(function() {
        curIndex = parseInt(slider.find(".slide-act").prevAll(".slide").length)
        slides.fadeOut(500).removeClass("slide-act");
        if (curIndex < sliderSize-1) {
          curIndex++;
        } else {
          curIndex = 0;
        }
        slides.eq(curIndex).fadeIn(500).addClass("slide-act");
        listerItems.removeClass("act");
        listerItems.filter("[rel='"+slides.eq(curIndex).attr("rel")+"']").addClass("act")
      });
      
      prevBtn.click(function() {
        curIndex = parseInt(slider.find(".slide-act").prevAll(".slide").length)
        slides.fadeOut(500).removeClass("slide-act");
        if (curIndex > 0) {
          curIndex--;
        } else {
          curIndex = slides.length-1;
        }
        slides.eq(curIndex).fadeIn(500).addClass("slide-act");
        listerItems.removeClass("act");
        listerItems.filter("[rel='"+slides.eq(curIndex).attr("rel")+"']").addClass("act")
      });
      
      
      
      listerItems.click(function() {
        var index = slider.find(".slide[rel='"+$(this).attr("rel")+"']").first().prevAll(".slide").length;
        slides.fadeOut(500).removeClass("slide-act");
        slides.eq(index).fadeIn(500).addClass("slide-act");
        listerItems.removeClass("act");
        $(this).addClass("act");
      });
      
    }
    
  }
})( jQuery );

(function( jQuery ) {
  jQuery.fn.menuSlider = function() {
  
  
    var slider = $(this);
    var slides = slider.find(".slide");
    var sliderSize = slides.size();
    
    slides.hide();
    slides.eq(0).show().addClass("slide-act");
    
    //sliderMakeup();
    
    if (sliderSize > 1) {
    
      slides.bind("click",function () {
        if (listerItems.filter(".act").next().length) {
          listerItems.filter(".act").next().click();
        } else {
          listerItems.eq(0).click();
        }
      });
      
      var listerItems = slider.find(".lister-item");
      
      slider.find(".slides").after("<div class='next' />");
      slider.find(".slides").after("<div class='prev' />");
      
      var prevBtn = slider.find(".prev");
      var nextBtn = slider.find(".next");
      
      nextBtn.click(function() {
        curIndex = parseInt(slider.find(".slide-act").prevAll(".slide").length)
        slides.fadeOut(500).removeClass("slide-act");
        if (curIndex < sliderSize-1) {
          curIndex++;
        } else {
          curIndex = 0;
        }
        slides.eq(curIndex).fadeIn(500).addClass("slide-act");
        listerItems.removeClass("act");
        listerItems.filter("[rel='"+slides.eq(curIndex).attr("rel")+"']").addClass("act")
      });
      
      prevBtn.click(function() {
        curIndex = parseInt(slider.find(".slide-act").prevAll(".slide").length)
        slides.fadeOut(500).removeClass("slide-act");
        if (curIndex > 0) {
          curIndex--;
        } else {
          curIndex = slides.length-1;
        }
        slides.eq(curIndex).fadeIn(500).addClass("slide-act");
        listerItems.removeClass("act");
        listerItems.filter("[rel='"+slides.eq(curIndex).attr("rel")+"']").addClass("act")
      });
      
      
      
      listerItems.click(function() {
        var index = slider.find(".slide[rel='"+$(this).attr("rel")+"']").first().prevAll(".slide").length;
        slides.fadeOut(500).removeClass("slide-act");
        slides.eq(index).fadeIn(500).addClass("slide-act");
        listerItems.removeClass("act");
        $(this).addClass("act");
      });
      
    }
    
  }
})( jQuery );


(function( $ ) {
  $.fn.formatNumber = function() {
    var obj = $(this);
    obj.each(function () {
      if ($(this).val()) {
        number = $(this).val();
      } else {
        number = $(this).html();
      }
      
      number += '';
      number = number.replace(/\s/g, '');
      x = number.split('.');
      x1 = x[0];
      var rgx = /(\d+)(\d{3})/;
      while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ' ' + '$2');
      }
      
      if ($(this).val()) {
        $(this).val(x1);
      } else {
        $(this).html(x1);
      }
    });
    
  };
})( jQuery );

function fNum(number) {
  number += '';
  number = number.replace(/\s/g, '');
  x = number.split('.');
  x1 = x[0];
  var rgx = /(\d+)(\d{3})/;
  while (rgx.test(x1)) {
    x1 = x1.replace(rgx, '$1' + ' ' + '$2');
  }
  return x1;
}
