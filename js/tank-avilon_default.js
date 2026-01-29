/* ==========================================================================
   Mindbox Initialization
   ========================================================================== */
mindbox = window.mindbox || function() { mindbox.queue.push(arguments); };
mindbox.queue = mindbox.queue || [];
mindbox('create', {
    endpointId: 'avilon.WebsiteTank-avilon.ru'
});
// нужно добавить скрипт инициализации модуля веб-пушей
mindbox("webpush.create");

/* ==========================================================================
   Calltouch Widget Handlers
   ========================================================================== */
document.addEventListener("DOMContentLoaded", function(event) {
  jQuery('.TRADEIN').click(function(){		
  	window.ct('modules','widgets','openExternal','Trade-in');
  });
	jQuery('.CREDIT').click(function(){
  	window.ct('modules','widgets','openExternal','credit');
  });
	jQuery('.TANK1').click(function(){		
  	window.ct('modules','widgets','openExternal','TANK1');
  });
	jQuery('.TANK2').click(function(){		
  	window.ct('modules','widgets','openExternal','TANK2');
  });
	jQuery('.TANK700').click(function(){		
  	window.ct('modules','widgets','openExternal','TANK 700');
  });
	jQuery('.TESTDRIVE').click(function(){		
  	window.ct('modules','widgets','openExternal','test-drive');
  });
	jQuery('.Callback').click(function(){		
  	window.ct('modules','widgets','openExternal','Callback');
  });
});

['click','touchend'].forEach(ev => document.addEventListener(ev, e => {
    if (e.target.closest('.calltouch-widget-trigger') && window.ct) {
        e.preventDefault();
        window.ct('modules','widgets','openExternal','callback');
    }
}));

document.addEventListener("DOMContentLoaded", function(event) {
  jQuery('.clt-btn a').click(function(){
  	window.ct('modules','widgets','openExternal','TANK2');
  });
});

/* ==========================================================================
   Calltouch Initialization
   ========================================================================== */
(function(w,d,n,c){w.CalltouchDataObject=n;w[n]=function(){w[n]["callbacks"].push(arguments)};if(!w[n]["callbacks"]){w[n]["callbacks"]=[]}w[n]["loaded"]=false;if(typeof c!=="object"){c=[c]}w[n]["counters"]=c;for(var i=0;i<c.length;i+=1){p(c[i])}function p(cId){var a=d.getElementsByTagName("script")[0],s=d.createElement("script"),i=function(){a.parentNode.insertBefore(s,a)},m=typeof Array.prototype.find === 'function',n=m?"init-min.js":"init.js";s.async=true;s.src="https://mod.calltouch.ru/"+n+"?id="+cId;if(w.opera=="[object Opera]"){d.addEventListener("DOMContentLoaded",i,false)}else{i()}}})(window,document,"ct","mr1mmkvw");

/* ==========================================================================
   Calltouch Form Submission Handler
   ========================================================================== */
jQuery(document).on('submit', 'form', function() { 
	var form = jQuery(this);
	var phone = form.find('input[name="form_fields[tel]"]').val();
	var fio = form.find('input[name="form_fields[name]"]').val();
	var tags = form.find('select[name="form_fields[email]"]').val();
	var sub = form.find('input[name="referer_title"]').val();
	var ct_site_id = '55954'; 

	var ct_data = { 
		fio: fio,
		phoneNumber: phone,
		email: tags,
		subject: sub,
		tags: tags,
		requestUrl: location.href,
		sessionId: window.ct('calltracking_params','mr1mmkvw').sessionId 
	};

	if(form.find('input[name="form_fields[tel]"]').length){

		if (typeof(phone)!='undefined' && phone!=''){
			jQuery.ajax({ 
				url: 'https://api.calltouch.ru/calls-service/RestAPI/requests/'+ct_site_id+'/register/', 
				dataType: 'json', 
				type: 'POST', 
				data: ct_data,
				async: false
			}); 
		}
	}
	if(form.find('input[name="form_fields[email]"]').length){
		if (typeof(tags)!='undefined' && tags!=''){
			jQuery.ajax({ 
				url: 'https://api.calltouch.ru/calls-service/RestAPI/requests/'+ct_site_id+'/register/', 
				dataType: 'json', 
				type: 'POST', 
				data: ct_data,
				async: false
			}); 
		}
	}
});

/* ==========================================================================
   Yandex Metrika
   ========================================================================== */
(function(m,e,t,r,i,k,a){
    m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
    m[i].l=1*new Date();
    for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
    k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
})(window, document,'script','https://mc.yandex.ru/metrika/tag.js', 'ym');

ym(94271725, 'init', {webvisor:true, clickmap:true, accurateTrackBounce:true, trackLinks:true});

/* ==========================================================================
   jQuery Masked Input Plugin (minified)
   ========================================================================== */
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof exports?e(require("jquery")):e(jQuery)}((function(e){var t,n=navigator.userAgent,a=/iphone/i.test(n),i=/chrome/i.test(n),r=/android/i.test(n);e.mask={definitions:{9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},autoclear:!0,dataName:"rawMaskFn",placeholder:"_"},e.fn.extend({caret:function(e,t){var n;if(0!==this.length&&!this.is(":hidden")&&this.get(0)===document.activeElement)return"number"==typeof e?(t="number"==typeof t?t:e,this.each((function(){this.setSelectionRange?this.setSelectionRange(e,t):this.createTextRange&&((n=this.createTextRange()).collapse(!0),n.moveEnd("character",t),n.moveStart("character",e),n.select())}))):(this[0].setSelectionRange?(e=this[0].selectionStart,t=this[0].selectionEnd):document.selection&&document.selection.createRange&&(n=document.selection.createRange(),e=0-n.duplicate().moveStart("character",-1e5),t=e+n.text.length),{begin:e,end:t})},unmask:function(){return this.trigger("unmask")},mask:function(n,o){var c,l,u,f,s,h,g;if(!n&&this.length>0){var m=e(this[0]).data(e.mask.dataName);return m?m():void 0}return o=e.extend({autoclear:e.mask.autoclear,placeholder:e.mask.placeholder,completed:null},o),c=e.mask.definitions,l=[],u=h=n.length,f=null,n=String(n),e.each(n.split(""),(function(e,t){"?"==t?(h--,u=e):c[t]?(l.push(new RegExp(c[t])),null===f&&(f=l.length-1),e<u&&(s=l.length-1)):l.push(null)})),this.trigger("unmask").each((function(){var m=e(this),d=e.map(n.split(""),(function(e,t){if("?"!=e)return c[e]?k(t):e})),p=d.join(""),v=m.val();function b(){if(o.completed){for(var e=f;e<=s;e++)if(l[e]&&d[e]===k(e))return;o.completed.call(m)}}function k(e){return e<o.placeholder.length?o.placeholder.charAt(e):o.placeholder.charAt(0)}function y(e){for(;++e<h&&!l[e];);return e}function x(e,t){var n,a;if(!(e<0)){for(n=e,a=y(t);n<h;n++)if(l[n]){if(!(a<h&&l[n].test(d[a])))break;d[n]=d[a],d[a]=k(a),a=y(a)}R(),m.caret(Math.max(f,e))}}function j(e){S(),m.val()!=v&&m.change()}function A(e,t){var n;for(n=e;n<t&&n<h;n++)l[n]&&(d[n]=k(n))}function R(){m.val(d.join(""))}function S(e){var t,n,a,i=m.val(),r=-1;for(t=0,a=0;t<h;t++)if(l[t]){for(d[t]=k(t);a++<i.length;)if(n=i.charAt(a-1),l[t].test(n)){d[t]=n,r=t;break}if(a>i.length){A(t+1,h);break}}else d[t]===i.charAt(a)&&a++,t<u&&(r=t);return e?R():r+1<u?o.autoclear||d.join("")===p?(m.val()&&m.val(""),A(0,h)):R():(R(),m.val(m.val().substring(0,r+1))),u?t:f}m.data(e.mask.dataName,(function(){return e.map(d,(function(e,t){return l[t]&&e!=k(t)?e:null})).join("")})),m.one("unmask",(function(){m.off(".mask").removeData(e.mask.dataName)})).on("focus.mask",(function(){var e;m.prop("readonly")||(clearTimeout(t),v=m.val(),e=S(),t=setTimeout((function(){m.get(0)===document.activeElement&&(R(),e==n.replace("?","").length?m.caret(0,e):m.caret(e))}),10))})).on("blur.mask",j).on("keydown.mask",(function(e){if(!m.prop("readonly")){var t,n,i,r=e.which||e.keyCode;g=m.val(),8===r||46===r||a&&127===r?(n=(t=m.caret()).begin,(i=t.end)-n==0&&(n=46!==r?function(e){for(;--e>=0&&!l[e];);return e}(n):i=y(n-1),i=46===r?y(i):i),A(n,i),x(n,i-1),e.preventDefault()):13===r?j.call(this,e):27===r&&(m.val(v),m.caret(0,S()),e.preventDefault())}})).on("keypress.mask",(function(t){if(!m.prop("readonly")){var n,a,i,o=t.which||t.keyCode,c=m.caret();if(!(t.ctrlKey||t.altKey||t.metaKey||o<32)&&o&&13!==o){if(c.end-c.begin!=0&&(A(c.begin,c.end),x(c.begin,c.end-1)),(n=y(c.begin-1))<h&&(a=String.fromCharCode(o),l[n].test(a))){if(function(e){var t,n,a,i;for(t=e,n=k(e);t<h;t++)if(l[t]){if(a=y(t),i=d[t],d[t]=n,!(a<h&&l[a].test(i)))break;n=i}}(n),d[n]=a,R(),i=y(n),r){setTimeout((function(){e.proxy(e.fn.caret,m,i)()}),0)}else m.caret(i);c.begin<=s&&b()}t.preventDefault()}}})).on("input.mask paste.mask",(function(){m.prop("readonly")||setTimeout((function(){var e=S(!0);m.caret(e),b()}),0)})),i&&r&&m.off("input.mask").on("input.mask",(function(e){var t=m.val(),n=m.caret();if(g&&g.length&&g.length>t.length){for(S(!0);n.begin>0&&!l[n.begin-1];)n.begin--;if(0===n.begin)for(;n.begin<f&&!l[n.begin];)n.begin++;m.caret(n.begin,n.begin)}else{S(!0);var a=t.charAt(n.begin);n.begin<h&&(l[n.begin]||n.begin++,l[n.begin].test(a)&&n.begin++),m.caret(n.begin,n.begin)}b()})),S()}))}})}));

/* ==========================================================================
   Phone Mask & Form Validation
   ========================================================================== */
jQuery(function ($) {
// Маска
	$phones = $('input[type="tel"]');
    $phones.mask("+7(999)999-99-99", {
      placeholder: "_",
      autoclear: false
    });
	$(".elementor-field-type-submit").find('.elementor-button').on('click',function(e){
		if($(this).parents('form').find('input[type="tel"]').length){
			
				let phone = $(this).parents('form').find('input[type="tel"]').val().replace(/[^0-9]/g, '').length;
				if(phone == 0){
					e.preventDefault();
					if($(this).parents('form').find('.elementor-field-type-tel').find('.form_help').length == 0){
						$(this).parents('form').find('.elementor-field-type-tel').append('<div class="form_help"><span>!</span>Вы пропустили это поле.</div>');
					}
				}
				if(phone < 11){
					e.preventDefault();
					if($(this).parents('form').find('.elementor-field-type-tel').find('.form_help').length == 0){
						$(this).parents('form').find('.elementor-field-type-tel').append('<div class="form_help"><span>!</span>Заполните до конца это поле.</div>');
					}
				}
		 }
		if($(this).parents('form').find('.elementor-field-type-text').find('input').length){
			if($(this).parents('form').find('.elementor-field-type-text').find('input').val().length == 0){
					e.preventDefault();
					if($(this).parents('form').find('.elementor-field-type-text').find('.form_help').length == 0){
						$(this).parents('form').find('.elementor-field-type-text').append('<div class="form_help"><span>!</span>Вы пропустили это поле.</div>');
					}
				}
		}
		if($(this).parents('form').find('.elementor-field-type-email').find('input').length){
			if($(this).parents('form').find('.elementor-field-type-email').find('input').val().length == 0){
					e.preventDefault();
					if($(this).parents('form').find('.elementor-field-type-email').find('.form_help').length == 0){
						$(this).parents('form').find('.elementor-field-type-email').append('<div class="form_help"><span>!</span>Вы пропустили это поле.</div>');
					}
				}
		}
		if($(this).parents('form').find('.elementor-field-type-acceptance').find('input').length){
			if (!$(this).parents('form').find('.elementor-field-type-acceptance').find('input').prop('checked')) {
				e.preventDefault();
				if($(this).parents('form').find('.elementor-field-type-acceptance').find('.form_help').length == 0){
					$(this).parents('form').find('.elementor-field-type-acceptance').append('<div class="form_help"><span>!</span>Вы пропустили это поле.</div>');
				}
			}
		}
	});
	$(document).on('mouseup', function(e) {
		 var $target = $(e.target);
		 var $myElement = $(".elementor-field-type-submit").find('.elementor-button');
		 if ( !$myElement.is(e.target) && $myElement.has(e.target).length === 0 ) {
				 $('.form_help').remove();
		}
	});

});

/* ==========================================================================
   Revolution Slider Start Size
   ========================================================================== */
function setREVStartSize(e){
	//window.requestAnimationFrame(function() {
		window.RSIW = window.RSIW===undefined ? window.innerWidth : window.RSIW;
		window.RSIH = window.RSIH===undefined ? window.innerHeight : window.RSIH;
		try {
			var pw = document.getElementById(e.c).parentNode.offsetWidth,
				newh;
			pw = pw===0 || isNaN(pw) || (e.l=="fullwidth" || e.layout=="fullwidth") ? window.RSIW : pw;
			e.tabw = e.tabw===undefined ? 0 : parseInt(e.tabw);
			e.thumbw = e.thumbw===undefined ? 0 : parseInt(e.thumbw);
			e.tabh = e.tabh===undefined ? 0 : parseInt(e.tabh);
			e.thumbh = e.thumbh===undefined ? 0 : parseInt(e.thumbh);
			e.tabhide = e.tabhide===undefined ? 0 : parseInt(e.tabhide);
			e.thumbhide = e.thumbhide===undefined ? 0 : parseInt(e.thumbhide);
			e.mh = e.mh===undefined || e.mh=="" || e.mh==="auto" ? 0 : parseInt(e.mh,0);
			if(e.layout==="fullscreen" || e.l==="fullscreen")
				newh = Math.max(e.mh,window.RSIH);
			else{
				e.gw = Array.isArray(e.gw) ? e.gw : [e.gw];
				for (var i in e.rl) if (e.gw[i]===undefined || e.gw[i]===0) e.gw[i] = e.gw[i-1];
				e.gh = e.el===undefined || e.el==="" || (Array.isArray(e.el) && e.el.length==0)? e.gh : e.el;
				e.gh = Array.isArray(e.gh) ? e.gh : [e.gh];
				for (var i in e.rl) if (e.gh[i]===undefined || e.gh[i]===0) e.gh[i] = e.gh[i-1];
									
				var nl = new Array(e.rl.length),
					ix = 0,
					sl;
				e.tabw = e.tabhide>=pw ? 0 : e.tabw;
				e.thumbw = e.thumbhide>=pw ? 0 : e.thumbw;
				e.tabh = e.tabhide>=pw ? 0 : e.tabh;
				e.thumbh = e.thumbhide>=pw ? 0 : e.thumbh;
				for (var i in e.rl) nl[i] = e.rl[i]<window.RSIW ? 0 : e.rl[i];
				sl = nl[0];
				for (var i in nl) if (sl>nl[i] && nl[i]>0) { sl = nl[i]; ix=i;}
				var m = pw>(e.gw[ix]+e.tabw+e.thumbw) ? 1 : (pw-(e.tabw+e.thumbw)) / (e.gw[ix]);
				newh =  (e.gh[ix] * m) + (e.tabh + e.thumbh);
			}
			var el = document.getElementById(e.c);
			if (el!==null && el) el.style.height = newh+"px";
			el = document.getElementById(e.c+"_wrapper");
			if (el!==null && el) {
				el.style.height = newh+"px";
				el.style.display = "block";
			}
		} catch(e){
			console.log("Failure at Presize of Slider:" + e)
		}
	//});
};

/* ==========================================================================
   Client Sliders Initialization
   ========================================================================== */
jQuery(document).ready(function($){
    const swiper_1 = new Swiper('.slider-client-small', {
      slidesPerView: 5,
      spaceBetween: 36,
      loop: true,
      speed: 1000,
      breakpoints: {
            0: {
                slidesPerView: 2,
                spaceBetween: 8
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 16
            },
            1023: {
                slidesPerView: 5
            }
    },
      navigation: {
        nextEl: '.arrow-small-next',
        prevEl: '.arrow-small-prev',
      },
      
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    }
});
    
    const swiper_2 = new Swiper('.slider-client-big', {
      slidesPerView: 1,
      spaceBetween: 36,
      speed: 1000,
      loop: true,
    pagination: {
        el: '.swiper-pagination-big',
        clickable: true,
    }
    });
    
    const swipeAllSliders = (index) => {
      swiper_1.slideToLoop(index);
      swiper_2.slideToLoop(index);
    };
    
    swiper_1.on('slideChange', () => swipeAllSliders(swiper_1.realIndex));
    swiper_2.on('slideChange', () => swipeAllSliders(swiper_2.realIndex));
    $('.slider-client-small').find('.swiper-slide').click(function(){
        $(this).parents('.slider-client-small').find('.swiper-pagination-bullet').eq($(this).attr('data-swiper-slide-index')).click();
    });
});

/* ==========================================================================
   Popup Close Handler
   ========================================================================== */
jQuery(function($){
	$(document).on('click','.elementor-location-popup a', function(event){
		elementorProFrontend.modules.popup.closePopup( {}, event);
	});
});

/* ==========================================================================
   WooCommerce JS Class Change
   ========================================================================== */
(function () {
	var c = document.body.className;
	c = c.replace(/woocommerce-no-js/, 'woocommerce-js');
	document.body.className = c;
})();

/* ==========================================================================
   Revolution Slider Double jQuery Error Handler
   ========================================================================== */
if(typeof revslider_showDoubleJqueryError === "undefined") {
	function revslider_showDoubleJqueryError(sliderID) {
		console.log("You have some jquery.js library include that comes after the Slider Revolution files js inclusion.");
		console.log("To fix this, you can:");
		console.log("1. Set 'Module General Options' -> 'Advanced' -> 'jQuery & OutPut Filters' -> 'Put JS to Body' to on");
		console.log("2. Find the double jQuery.js inclusion and remove it");
		return "Double Included jQuery Library";
	}
}

/* ==========================================================================
   Scroll Drag Functionality
   ========================================================================== */
document.querySelectorAll( ".scroll-cars .elementor-loop-container, .scroll-container, .scroll-model, .table-scroll, .scroll-video").forEach( function( scroll ) {
    scroll.onmousedown = function( e ) {
        let pageX  = 0;
        let pageY0 = 0;
        let moved  = false;
      
        document.onmousemove = function( e ) {
            if ( pageX !== 0 ) {
                scroll.scrollLeft = scroll.scrollLeft + ( pageX - e.pageX );
            }
            pageX = e.pageX;
            moved = true;
        }
      
        // end drag
        scroll.onmouseup = function() {
            document.onmousemove = null;
            scroll.onmouseup = null;
            if ( moved ) {
                window.addEventListener( "click", captureClick, true );
            }
        }
      
        // disable browser drag
        scroll.ondragstart = function() {
            return false;
        }
        
        function captureClick( e ) {
            e.stopPropagation(); // Stop the click from being propagated.
            window.removeEventListener( "click", captureClick, true ); // cleanup
        }
    }
} );

/* ==========================================================================
   Select Width Adjustment
   ========================================================================== */
jQuery(document).ready(function($) {
	$('#select').find('select').change(function(){
		let gost = $('<span>'+ $(this).find('option:selected').text() +'</span>');
		gost.css({'font-size': '16px', 'font-weight': '500', 'visibility': 'collapse', 'positon': 'absolute'});
		$('#select').append(gost);
		$(this).css({'max-width': gost.width() + 10 + 'px'});
		gost.remove();
	});
});

/* ==========================================================================
   Color Slider
   ========================================================================== */
jQuery(document).ready(function($){
	 const colorSwiper = new Swiper ('.slider-color', {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: 1,
        speed: 1000,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
	});
	function changeColor(){
			$('.block-slider-color').css({
				'background-color': $('.swiper-slide-active').attr('color-car'),
			});
			$('.block-slider-color .elementor-heading-title').css({
				'color': $('.swiper-slide-active').attr('color-car'),
			});
			if($('.swiper-slide-active').attr('color-car') == '#E6E7E8'){
				$('.color-name').css({
					'color': '#363636',
				});
				$('.block-slider-color .elementor-heading-title').css({
					'-webkit-text-stroke': '1px #363636',
				});
			}else{
				$('.color-name').css({
					'color': '#fff',
				});
				$('.block-slider-color .elementor-heading-title').css({
					'-webkit-text-stroke': '1px #fff',
				});
			}
	};
	colorSwiper.on('slideNextTransitionStart', function () {
			changeColor();
	});

	colorSwiper.on('slidePrevTransitionStart', function () {
			changeColor();
	});

});

/* ==========================================================================
   Active Menu Items
   ========================================================================== */
jQuery(document).ready(function($){
	$('.e-n-menu-title-container[href="'+ window.location.pathname +'"]').parents(".e-n-menu-title").addClass('active');
	$('.e-n-menu-content').find('a[href="'+ window.location.pathname +'"]').parents(".e-n-menu-item").find(".e-n-menu-title").addClass('active');

});

/* ==========================================================================
   Price Display Logic
   ========================================================================== */
jQuery(document).ready(function($){
	if($('.sale-price').length == 0){
		$('.old-price').hide();
		$('.one-price').show();
	}
});

/* ==========================================================================
   Comments Container Width
   ========================================================================== */
jQuery(document).ready(function($){
	function changeWidth(){
		let commentsPadding = ($(window).width() - $(".scroll-container").parents('.comments').width()) / 2 ;
		let commentsWidht = $(window).width() - commentsPadding - $(".scroll-container").siblings('.ya-rating').width() - 16;
		$(".scroll-container").css({
				'width': commentsWidht
		});
	}
	
	changeWidth();
	$(window).resize(function() {
		changeWidth();
	})
});

/* ==========================================================================
   Video Slider Padding
   ========================================================================== */
jQuery(document).ready(function($){
	if(window.matchMedia('(min-width: 1024px)').matches) {
		let sliderPadding = ($(window).width() - 815) / 2 ;
		$(".video-slider").find('.e-n-carousel').css({
			'padding-left': sliderPadding,
			'padding-right': sliderPadding
		});
		$(".video-slider").find('.elementor-swiper-button-prev').css({
			'width': sliderPadding
		});
		$(".video-slider").find('.elementor-swiper-button-next').css({
			'width': sliderPadding
		});
	}else{
		$(".video-slider").find('.e-n-carousel').css({
			'padding-left': '0',
			'padding-right': '0'
		});
		$(".video-slider").find('.elementor-swiper-button-prev').css({
			'width': sliderPadding
		});
		$(".video-slider").find('.elementor-swiper-button-next').css({
			'width': sliderPadding
		});
	}
});

/* ==========================================================================
   Email Input Validation
   ========================================================================== */
jQuery(document).ready(function($){
	$('input[type="email"]').on('input', function() {
		let inputValue = $(this).val();
		let russianRegex = /^[а-яА-ЯёЁ\s]*$/;
		if (russianRegex.test(inputValue)) {
			$(this).val('');
		} 
	});
});

/* ==========================================================================
   Name Input Validation
   ========================================================================== */
jQuery(document).ready(function($) {
	$('.elementor-form').find("#form-field-name").on("input", function() {
    var value = $(this).val();
    var newValue = value.replace(/[0-9]/g, "");
    $(this).val(newValue);
  });
});

/* ==========================================================================
   Mobile Menu Toggle
   ========================================================================== */
jQuery(document).ready(function($) {
	$(document).on("click", ".mobile-menu .e-n-menu-title",  function() {
		if($(this).parents('.elementor-element-4492ce9f').hasClass("elementor-sticky__spacer")){
			$(this).siblings('.e-n-menu-content').toggleClass('e-active');
			$(this).siblings('.e-n-menu-content').find('.e-child').toggleClass('animated undefined e-active active-h');
			$('.e-n-menu-title').removeClass('active');
			if($(this).hasClass("active")){
				$(this).removeClass('active');
			}else{
				$(this).addClass('active');
			}
			
		}else{
			$('.e-n-menu-title').removeClass('active');
			if($(this).hasClass("active")){
				$(this).removeClass('active');
			}else{
				$(this).addClass('active');
			}
			$(this).siblings('.e-n-menu-content').find('.e-child').toggleClass('active-h');
		}
  });
});

/* ==========================================================================
   Interior Color Selector
   ========================================================================== */
jQuery(document).ready(function($) {
	$('.int-color-cirle').on("click",  function() {
		if($('.int-color-cirle').length != 1){
			$(this).addClass('active').siblings().removeClass('active');
		}
		$('.int-block-img').eq($(this).index()).fadeIn().siblings('.int-block-img').hide();
		$('.int-color-name').text($('.int-block-img').eq($(this).index()).attr('int-color'));
  });
});

/* ==========================================================================
   Main Slider Pagination Text
   ========================================================================== */
jQuery(document).ready(function($){
    function addTextPagination(){
        setTimeout(function() {
            if($('.pagination-text').length == 0){
                $('.main-slider').find('.swiper-pagination-bullet').eq(0).html('<span class="pagination-text"><span class="big">Специальные условия на TANK 300</span></span>');
                $('.main-slider').find('.swiper-pagination-bullet').eq(1).html('<span class="pagination-text"><span class="big">TANK в кредит от 0,01% годовых</span></span>');
                $('.main-slider').find('.swiper-pagination-bullet').eq(2).html('<span class="pagination-text"><span class="big">Длительный тест-драйв Tank</span></span>');
            }
        }, 500);
    };
    addTextPagination();
    $(window).resize(function() {
        addTextPagination();
    })
});

/* ==========================================================================
   PhotoSwipe UI Default (minified)
   ========================================================================== */
!function(a,b){"function"==typeof define&&define.amd?define(b):"object"==typeof exports?module.exports=b():a.PhotoSwipeUI_Default=b()}(this,function(){"use strict";var a=function(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v=this,w=!1,x=!0,y=!0,z={barsSize:{top:44,bottom:"auto"},closeElClasses:["item","caption","zoom-wrap","ui","top-bar"],timeToIdle:4e3,timeToIdleOutside:1e3,loadingIndicatorDelay:1e3,addCaptionHTMLFn:function(a,b){return a.title?(b.children[0].innerHTML=a.title,!0):(b.children[0].innerHTML="",!1)},closeEl:!0,captionEl:!0,fullscreenEl:!0,zoomEl:!0,shareEl:!0,counterEl:!0,arrowEl:!0,preloaderEl:!0,tapToClose:!1,tapToToggleControls:!0,clickToCloseNonZoomable:!0,shareButtons:[{id:"facebook",label:"Share on Facebook",url:"https://www.facebook.com/sharer/sharer.php?u={{url}}"},{id:"twitter",label:"Tweet",url:"https://twitter.com/intent/tweet?text={{text}}&url={{url}}"},{id:"pinterest",label:"Pin it",url:"http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}"},{id:"download",label:"Download image",url:"{{raw_image_url}}",download:!0}],getImageURLForShare:function(){return a.currItem.src||""},getPageURLForShare:function(){return window.location.href},getTextForShare:function(){return a.currItem.title||""},indexIndicatorSep:" / ",fitControlsWidth:1200},A=function(a){if(r)return!0;a=a||window.event,q.timeToIdle&&q.mouseUsed&&!k&&K();for(var c,d,e=a.target||a.srcElement,f=e.getAttribute("class")||"",g=0;g<S.length;g++)c=S[g],c.onTap&&f.indexOf("pswp__"+c.name)>-1&&(c.onTap(),d=!0);if(d){a.stopPropagation&&a.stopPropagation(),r=!0;var h=b.features.isOldAndroid?600:30;s=setTimeout(function(){r=!1},h)}},B=function(){return!a.likelyTouchDevice||q.mouseUsed||screen.width>q.fitControlsWidth},C=function(a,c,d){b[(d?"add":"remove")+"Class"](a,"pswp__"+c)},D=function(){var a=1===q.getNumItemsFn();a!==p&&(C(d,"ui--one-slide",a),p=a)},E=function(){C(i,"share-modal--hidden",y)},F=function(){return y=!y,y?(b.removeClass(i,"pswp__share-modal--fade-in"),setTimeout(function(){y&&E()},300)):(E(),setTimeout(function(){y||b.addClass(i,"pswp__share-modal--fade-in")},30)),y||H(),!1},G=function(b){b=b||window.event;var c=b.target||b.srcElement;return a.shout("shareLinkClick",b,c),!!c.href&&(!!c.hasAttribute("download")||(window.open(c.href,"pswp_share","scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=550,height=420,top=100,left="+(window.screen?Math.round(screen.width/2-275):100)),y||F(),!1))},H=function(){for(var a,b,c,d,e,f="",g=0;g<q.shareButtons.length;g++)a=q.shareButtons[g],c=q.getImageURLForShare(a),d=q.getPageURLForShare(a),e=q.getTextForShare(a),b=a.url.replace("{{url}}",encodeURIComponent(d)).replace("{{image_url}}",encodeURIComponent(c)).replace("{{raw_image_url}}",c).replace("{{text}}",encodeURIComponent(e)),f+='<a href="https://tank-avilon.ru/'+b+'" target="_blank" class="pswp__share--'+a.id+'"'+(a.download?"download":"")+">"+a.label+"</a>",q.parseShareButtonOut&&(f=q.parseShareButtonOut(a,f));i.children[0].innerHTML=f,i.children[0].onclick=G},I=function(a){for(var c=0;c<q.closeElClasses.length;c++)if(b.hasClass(a,"pswp__"+q.closeElClasses[c]))return!0},J=0,K=function(){clearTimeout(u),J=0,k&&v.setIdle(!1)},L=function(a){a=a?a:window.event;var b=a.relatedTarget||a.toElement;b&&"HTML"!==b.nodeName||(clearTimeout(u),u=setTimeout(function(){v.setIdle(!0)},q.timeToIdleOutside))},M=function(){q.fullscreenEl&&!b.features.isOldAndroid&&(c||(c=v.getFullscreenAPI()),c?(b.bind(document,c.eventK,v.updateFullscreen),v.updateFullscreen(),b.addClass(a.template,"pswp--supports-fs")):b.removeClass(a.template,"pswp--supports-fs"))},N=function(){q.preloaderEl&&(O(!0),l("beforeChange",function(){clearTimeout(o),o=setTimeout(function(){a.currItem&&a.currItem.loading?(!a.allowProgressiveImg()||a.currItem.img&&!a.currItem.img.naturalWidth)&&O(!1):O(!0)},q.loadingIndicatorDelay)}),l("imageLoadComplete",function(b,c){a.currItem===c&&O(!0)}))},O=function(a){n!==a&&(C(m,"preloader--active",!a),n=a)},P=function(a){var c=a.vGap;if(B()){var g=q.barsSize;if(q.captionEl&&"auto"===g.bottom)if(f||(f=b.createEl("pswp__caption pswp__caption--fake"),f.appendChild(b.createEl("pswp__caption__center")),d.insertBefore(f,e),b.addClass(d,"pswp__ui--fit")),q.addCaptionHTMLFn(a,f,!0)){var h=f.clientHeight;c.bottom=parseInt(h,10)||44}else c.bottom=g.top;else c.bottom="auto"===g.bottom?0:g.bottom;c.top=g.top}else c.top=c.bottom=0},Q=function(){q.timeToIdle&&l("mouseUsed",function(){b.bind(document,"mousemove",K),b.bind(document,"mouseout",L),t=setInterval(function(){J++,2===J&&v.setIdle(!0)},q.timeToIdle/2)})},R=function(){l("onVerticalDrag",function(a){x&&a<.95?v.hideControls():!x&&a>=.95&&v.showControls()});var a;l("onPinchClose",function(b){x&&b<.9?(v.hideControls(),a=!0):a&&!x&&b>.9&&v.showControls()}),l("zoomGestureEnded",function(){a=!1,a&&!x&&v.showControls()})},S=[{name:"caption",option:"captionEl",onInit:function(a){e=a}},{name:"share-modal",option:"shareEl",onInit:function(a){i=a},onTap:function(){F()}},{name:"button--share",option:"shareEl",onInit:function(a){h=a},onTap:function(){F()}},{name:"button--zoom",option:"zoomEl",onTap:a.toggleDesktopZoom},{name:"counter",option:"counterEl",onInit:function(a){g=a}},{name:"button--close",option:"closeEl",onTap:a.close},{name:"button--arrow--left",option:"arrowEl",onTap:a.prev},{name:"button--arrow--right",option:"arrowEl",onTap:a.next},{name:"button--fs",option:"fullscreenEl",onTap:function(){c.isFullscreen()?c.exit():c.enter()}},{name:"preloader",option:"preloaderEl",onInit:function(a){m=a}}],T=function(){var a,c,e,f=function(d){if(d)for(var f=d.length,g=0;g<f;g++){a=d[g],c=a.className;for(var h=0;h<S.length;h++)e=S[h],c.indexOf("pswp__"+e.name)>-1&&(q[e.option]?(b.removeClass(a,"pswp__element--disabled"),e.onInit&&e.onInit(a)):b.addClass(a,"pswp__element--disabled"))}};f(d.children);var g=b.getChildByClass(d,"pswp__top-bar");g&&f(g.children)};v.init=function(){b.extend(a.options,z,!0),q=a.options,d=b.getChildByClass(a.scrollWrap,"pswp__ui"),l=a.listen,R(),l("beforeChange",v.update),l("doubleTap",function(b){var c=a.currItem.initialZoomLevel;a.getZoomLevel()!==c?a.zoomTo(c,b,333):a.zoomTo(q.getDoubleTapZoom(!1,a.currItem),b,333)}),l("preventDragEvent",function(a,b,c){var d=a.target||a.srcElement;d&&d.getAttribute("class")&&a.type.indexOf("mouse")>-1&&(d.getAttribute("class").indexOf("__caption")>0||/(SMALL|STRONG|EM)/i.test(d.tagName))&&(c.prevent=!1)}),l("bindEvents",function(){b.bind(d,"pswpTap click",A),b.bind(a.scrollWrap,"pswpTap",v.onGlobalTap),a.likelyTouchDevice||b.bind(a.scrollWrap,"mouseover",v.onMouseOver)}),l("unbindEvents",function(){y||F(),t&&clearInterval(t),b.unbind(document,"mouseout",L),b.unbind(document,"mousemove",K),b.unbind(d,"pswpTap click",A),b.unbind(a.scrollWrap,"pswpTap",v.onGlobalTap),b.unbind(a.scrollWrap,"mouseover",v.onMouseOver),c&&(b.unbind(document,c.eventK,v.updateFullscreen),c.isFullscreen()&&(q.hideAnimationDuration=0,c.exit()),c=null)}),l("destroy",function(){q.captionEl&&(f&&d.removeChild(f),b.removeClass(e,"pswp__caption--empty")),i&&(i.children[0].onclick=null),b.removeClass(d,"pswp__ui--over-close"),b.addClass(d,"pswp__ui--hidden"),v.setIdle(!1)}),q.showAnimationDuration||b.removeClass(d,"pswp__ui--hidden"),l("initialZoomIn",function(){q.showAnimationDuration&&b.removeClass(d,"pswp__ui--hidden")}),l("initialZoomOut",function(){b.addClass(d,"pswp__ui--hidden")}),l("parseVerticalMargin",P),T(),q.shareEl&&h&&i&&(y=!0),D(),Q(),M(),N()},v.setIdle=function(a){k=a,C(d,"ui--idle",a)},v.update=function(){x&&a.currItem?(v.updateIndexIndicator(),q.captionEl&&(q.addCaptionHTMLFn(a.currItem,e),C(e,"caption--empty",!a.currItem.title)),w=!0):w=!1,y||F(),D()},v.updateFullscreen=function(d){d&&setTimeout(function(){a.setScrollOffset(0,b.getScrollY())},50),b[(c.isFullscreen()?"add":"remove")+"Class"](a.template,"pswp--fs")},v.updateIndexIndicator=function(){q.counterEl&&(g.innerHTML=a.getCurrentIndex()+1+q.indexIndicatorSep+q.getNumItemsFn())},v.onGlobalTap=function(c){c=c||window.event;var d=c.target||c.srcElement;if(!r)if(c.detail&&"mouse"===c.detail.pointerType){if(I(d))return void a.close();b.hasClass(d,"pswp__img")&&(1===a.getZoomLevel()&&a.getZoomLevel()<=a.currItem.fitRatio?q.clickToCloseNonZoomable&&a.close():a.toggleDesktopZoom(c.detail.releasePoint))}else if(q.tapToToggleControls&&(x?v.hideControls():v.showControls()),q.tapToClose&&(b.hasClass(d,"pswp__img")||I(d)))return void a.close()},v.onMouseOver=function(a){a=a||window.event;var b=a.target||a.srcElement;C(d,"ui--over-close",I(b))},v.hideControls=function(){b.addClass(d,"pswp__ui--hidden"),x=!1},v.showControls=function(){x=!0,w||v.update(),b.removeClass(d,"pswp__ui--hidden")},v.supportsFullscreen=function(){var a=document;return!!(a.exitFullscreen||a.mozCancelFullScreen||a.webkitExitFullscreen||a.msExitFullscreen)},v.getFullscreenAPI=function(){var b,c=document.documentElement,d="fullscreenchange";return c.requestFullscreen?b={enterK:"requestFullscreen",exitK:"exitFullscreen",elementK:"fullscreenElement",eventK:d}:c.mozRequestFullScreen?b={enterK:"mozRequestFullScreen",exitK:"mozCancelFullScreen",elementK:"mozFullScreenElement",eventK:"moz"+d}:c.webkitRequestFullscreen?b={enterK:"webkitRequestFullscreen",exitK:"webkitExitFullscreen",elementK:"webkitFullscreenElement",eventK:"webkit"+d}:c.msRequestFullscreen&&(b={enterK:"msRequestFullscreen",exitK:"msExitFullscreen",elementK:"msFullscreenElement",eventK:"MSFullscreenChange"}),b&&(b.enter=function(){return j=q.closeOnScroll,q.closeOnScroll=!1,"webkitRequestFullscreen"!==this.enterK?a.template[this.enterK]():void a.template[this.enterK](Element.ALLOW_KEYBOARD_INPUT)},b.exit=function(){return q.closeOnScroll=j,document[this.exitK]()},b.isFullscreen=function(){return document[this.elementK]}),b}};return a});

/* ==========================================================================
   PhotoSwipe Lightbox Gallery
   ========================================================================== */
jQuery(document).ready(function ($) {

    $('[data-pafe-lightbox-gallery]').each(function () {
        var container = [];
        var bgOpacity = $(this).find('[data-pafe-lightbox-gallery-inner]').attr('data-pafe-lightbox-gallery-background-opacity');
        var bgColor = $(this).attr('data-pafe-lightbox-gallery-background-color');
        let $items = $(this).find('.pafe-pswp');
        let shareButtonsArray = [];
        let shareEl = false;

        if ($(this).find('[data-pafe-lightbox-gallery-inner]').attr('data-pafe-lightbox-gallery-facebook')=='yes') {
            shareEl =true
            shareButtonsArray.push({id:'facebook', label:'Share on Facebook', url:'https://www.facebook.com/sharer/sharer.php?u={{url}}'});
        }

        if ($(this).find('[data-pafe-lightbox-gallery-inner]').attr('data-pafe-lightbox-gallery-tweeter')=='yes') {
            shareEl =true
            shareButtonsArray.push({id:'twitter', label:'Tweet', url:'https://twitter.com/intent/tweet?text={{text}}&url={{url}}'});
        }

        if ($(this).find('[data-pafe-lightbox-gallery-inner]').attr('data-pafe-lightbox-gallery-pinterest')=='yes') {
            shareEl =true
            shareButtonsArray.push({id:'pinterest', label:'Pin it', url:'http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}'});
        }

        if ($(this).find('[data-pafe-lightbox-gallery-inner]').attr('data-pafe-lightbox-gallery-download-image')=='yes') {
            shareEl =true
            shareButtonsArray.push({id:'download', label:'Download image', url:'{{raw_image_url}}', download:true});
        }

        $items.each(function () {
            let $link = $(this).find('.gallery-item');
            let title = $(this).find('.pafe-lightbox__text').html();
            let detail = {
                src: $link.attr('data-href'),
                w: $link.attr('data-width'),
                h: $link.attr('data-height'),
                title: title,
            };
            container.push(detail);
        });
        $items.find('.gallery-item').click(function (event) {
            event.preventDefault();
            var $pswp = $('.pswp')[0];
            $('.pswp__bg').css({'background-color': bgColor});
            var options = {
                index: $items.index(),
                bgOpacity: bgOpacity,
                showHideOpacity: true,
                tapToClose: true,
                shareEl: shareEl,
                shareButtons: shareButtonsArray,
                fullscreenEl: false,
            };
            // Initialize PhotoSwipe
            var gallery = new PhotoSwipe($pswp, PhotoSwipeUI_Default, container, options);
            gallery.init();
        });
    });

});
