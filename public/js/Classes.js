About=function(){this.slides=[],this.active=null,this.transitionsProperty=null,this.imagesSuffixPath=null,this.el=null,this.init()},About.prototype.init=function(){this.imagesSuffixPath="/images/",this.el="panel",this.lastSlide=new Date;this.imagesSuffixPath;this.active=1,this.getDatasAndInitView(),this.forceScroll(),this.enableKeyboardListener(),this.scrollListener(),this.mouseListener(),this.loadListener(),this.preloadImages();var t=this;setTimeout(function(){t.clickListener()},50)},About.prototype.getDatasAndInitView=function(){var t=this,e=[];$.getJSON("/a-propos/datas").done(function(i){for(var s=0;s<i.length;s++){var a={};a.list=[],a.title=i[s].title,a.conclusion=i[s].conclusion,a.slogan=i[s].summary,a.cover=i[s].cover;for(var n=0;n<i[s].list_item.length;n++)a.list.push(i[s].list_item[n]);e.push(a)}t.slides=e,t.initFirstView()})},About.prototype.forceScroll=function(){var t=this;$(".about").length>0&&setTimeout(function(){t.isDown()||$("html,body").animate({scrollTop:$(".header").height()},500)},1600)},About.prototype.scrollListener=function(){$(window).on("scroll",function(){$(this).scrollTop()>=$(".header").height()&&$(".panel__mouse svg").addClass("show")})},About.prototype.loadListener=function(){$(window).on("load",function(){$(this).scrollTop()>=$(".header").height()&&$(".panel__mouse svg").addClass("show")})},About.prototype.mouseListener=function(){var t=this;$(document).on("mousewheel DOMMouseScroll",function(e){e.delta=null,e.originalEvent&&(e.originalEvent.wheelDelta?(e.delta=e.originalEvent.wheelDelta,t.canSlide()&&t.isDown()&&e.delta<0&&t.getNext()):e.originalEvent.clientY&&$(window).scrollTop()==$(".header").height()&&void 0==e.originalEvent.wheelDelta&&t.canSlide()&&t.isDown()&&t.getNext())})},About.prototype.isDown=function(){return $(document).scrollTop()>=$(".header").height()},About.prototype.enableKeyboardListener=function(){var t=this;$(document).on("keydown",function(e){var i=e.keyCode||e.which;39==i&&t.canSlide()&&t.getNext()})},About.prototype.clickListener=function(){var t=this;$(document).on("click",".panel__nav .item",function(){var e=$(this).data("index");$(this).hasClass("current")||(1==e?t.active=0:t.active=e-1,setTimeout(function(){$(".panel__nav .item").eq(t.active-1).addClass("current")},1100),t.getNext())})},About.prototype.getNext=function(){var t=$("."+this.el+"--active"),e=this;this.active>=0&&this.active<4?(this.active++,this.handleThisAndCall(t,e.active-1)):4==this.active&&(this.active=1,this.handleThisAndCall(t,e.active-1))},About.prototype.canSlide=function(){return!this.lastSlide||new Date(this.lastSlide.getTime()+2e3)<new Date&&(this.lastSlide=new Date,!0)},About.prototype.highlightCurrent=function(t){$(".panel__nav .wrapper").removeClass("wrapper--active"),$(".panel__nav .wrapper").eq(this.active-1).addClass("wrapper--active")},About.prototype.handleThisAndCall=function(t,e){var i=this;t.addClass(this.el+"--extend"),$("."+this.el+"__slogan").css("visibility","hidden"),$("."+this.el+"__conclusion").css("visibility","hidden"),$("."+this.el+".arguments__item").css("visibility","hidden"),$("."+this.el+"--extend *").fadeOut(150),setTimeout(function(){$(".about").addClass("about--reveal")},100),setTimeout(function(){$(".about__cover").addClass("about__cover--reveal")},450),setTimeout(function(){$(".about__cover").removeClass("about__cover--reveal").css("background-image",'url("'+i.getCover(e)+'")'),$(".about").removeClass("about--reveal"),$("."+i.el+"--extend").fadeOut(500).remove()},700),setTimeout(function(){i.appendSlide(e)},850)},About.prototype.appendSlide=function(t){var e=this,i='<div class="col-xs-6 col-custom panel panel--active panel--slided"></div>';$(".about").append(i);var s=$("."+e.el+"--active");this.appendChildren(s,t),this.getInfos(s,t)},About.prototype.preloadImages=function(){for(var t=0;t<this.slides.length;t++)img=new Image,img.src=this.slides[t].cover,$("body").append('<span id="#preloader"></span>'),img.onload=function(){$("#preloader").css("background-image",'url("'+img.src+'")')};$("#preloader").remove()},About.prototype.appendChildren=function(t,e){var i=this,s='<div class="row wrapper"><div class="col-xs"><h2 class="row panel__title"></h2><div class="row panel__slogan panel__slogan--slided"></div><div class="row arguments"><ul class="arguments__list"></ul></div><div class="row panel__mouse">'+$(".mouse-template").clone().html()+'</div></div></div><div class="row panel__nav panel__nav--slided">'+$(".nav-template").clone().html()+"</div>";setTimeout(function(){$(".panel__mouse svg").addClass("slided"),i.highlightCurrent(e)},50),t.append(s)},About.prototype.getInfos=function(t,e){var i=this.slides[e].title,s=this.slides[e].slogan;t.find(".panel__title").text(i),t.find(".panel__slogan").text(s);for(var a=0;a<this.slides[e].list.length;a++){var n=this.slides[e].list[a].name;t.find(".arguments__list").append('<li class="arguments__item arguments__item--slided">'+n+"</li>")}},About.prototype.getCover=function(t){return this.slides[t].cover},About.prototype.initFirstView=function(){var t=$("."+this.el+"--active"),e=this.slides[this.active-1].title,i=this.slides[this.active-1].slogan;t.find(".panel__title").text(e),t.find(".panel__slogan").text(i);for(var s=0;s<this.slides[this.active-1].list.length;s++){var a=this.slides[this.active-1].list[s].name;t.find(".arguments__list").append('<li class="arguments__item arguments__item--slided">'+a+"</li>")}this.highlightCurrent(this.active-1)},originalNav=new About,Agenda=function(){this.selector=null,this.active=null,this.year=null,this.parsedDates=[],this.monthList=[],this.datepicker=null,this.init()},Agenda.prototype.init=function(){var t=this;this.selector=".agenda-text",this.translate=0,setTimeout(function(){t.datepicker=hillsDatepicker},50),this.year=(new Date).getFullYear(),this.monthList=["Décembre","Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre"],this.clickListener(),this.parseResumes(),this.getDatas(),this.initActive()},Agenda.prototype.getNext=function(){if(this.active<this.dates.length){this.active++;var t=this;if($(".agenda-text__wrapper").fadeOut().fadeIn(),setTimeout(function(){$(".agenda-text__date").text(t.dates[t.active]),$(".agenda-text__content").text(t.listContent[t.active]);var e=$.parseHTML($(".agenda-text__content").text());$(".agenda-text__content").html(e)},400),this.active>1){var e=this.dates[this.active-1].split(" ")[1],i=this.dates[this.active].split(" ")[1];if(e!==i){this.datepicker.getMonthIndex(i);this.datepicker.getNext()}}}},Agenda.prototype.getIndex=function(t){this.active=t;var e=this;$(".agenda-text__wrapper").fadeOut().fadeIn(),setTimeout(function(){$(".agenda-text__date").text(e.dates[e.active]),$(".agenda-text__content").text(e.listContent[e.active]);var t=$.parseHTML($(".agenda-text__content").text());$(".agenda-text__content").html(t)},400)},Agenda.prototype.getMonth=function(t){return this.monthList[t]},Agenda.prototype.initActive=function(){var t=$(".agenda-text__date").text(),e=this;setTimeout(function(){e.active=e.dates.indexOf(t)},10)},Agenda.prototype.getDatas=function(){var t=[],e=[],i=[];$.getJSON("/collection/exceptions/appointements").done(function(s){for(var a=0;a<s.length;a++){var n=s[a].date.split(" "),o=n[0],r=n[1];e.push(s[a].date),i.push(s[a].content),t.push({day:o,month:r})}}),this.listContent=i,this.parsedDates=t,this.dates=e},Agenda.prototype.clickListener=function(){var t=this;$(".agenda-text__button").click(function(){t.getNext()})},Agenda.prototype.parseResumes=function(){$(".agenda-text__content").each(function(){var t=$.parseHTML($(this).text());$(this).html(t)})},comptaAgenda=new Agenda,Datepicker=function(t){this.calendar=null;this.year=null,this.month=null,this.day=null,this.dayList=null,this.engDayList=null,this.container=null,this.monthProperties=null,this.langage=null,this.defaults={langage:"fr"},this.active=null,this.selector=null,this.width=null,this.init()},Datepicker.prototype.init=function(){this.calendar=new Date;var t=this.calendar;this.year=t.getFullYear(),this.month=t.getMonth()+1,this.day=t.getDay(),this.dayList=["Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"],this.engDayList=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],this.monthList=["Décembre","Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre"],null==this.langage&&(this.langage=this.defaults.langage),this.active=this.month,this.agenda=comptaAgenda,this.width=$(".datepicker__body").width(),this.selector=".calendar-list",this.transition=this.setTranslate(),this.createBoards(),this.updateDayLabel(),this.enableClickListeners(),this.addMarkers(this.agenda.parsedDates),$(".month__text").text(this.getThisMonth()+" "+this.year),$(".calendar-list").css("transform","translate3d("+this.translate+"px,0,0)")},Datepicker.prototype.getToday=function(){return this.dayList[this.day]},Datepicker.prototype.getThisMonth=function(){return this.monthList[this.month]},Datepicker.prototype.getMonth=function(t){return this.monthList[t]},Datepicker.prototype.getTodayNumber=function(){return(new Date).toString().split(" ")[2]},Datepicker.prototype.getDayIndex=function(t){var e=this.dayList.indexOf(t);return e},Datepicker.prototype.getMonthIndex=function(t){var e=this.monthList.indexOf(t);return e},Datepicker.prototype.getMonthDayNumber=function(t,e){for(var i=0;this.isPrevDayTheSameMonth(t,e,i);)i--;return-i},Datepicker.prototype.getFirstDayOfMonth=function(t,e){var i=this.getMonthDayNumber(t,e);i=-i;var s=new Date(t,e,i+1).toString().split(" ")[0];return this.translation("day",s)},Datepicker.prototype.isPrevDayTheSameMonth=function(t,e,i){var s=new Date(t,e,0).toString(),a=s.split(" ")[1],n=new Date(t,e,i).toString(),o=n.split(" ")[1];return a==o},Datepicker.prototype.enableClickListeners=function(){var t=this;$(".month__prev").click(function(){t.getPrev()}),$(".month__next").click(function(){t.getNext()}),$(".col[data-day]").click(function(){if($(this).hasClass("col--highlight")){var e=$(this).parent().parent().data("month"),i=$(this).data("day"),s=new Date,a=i+" "+t.getMonth(e)+" "+s.getFullYear(),n=t.agenda.dates.indexOf(a);t.agenda.getIndex(n)}})},Datepicker.prototype.translation=function(t,e){if("fr"==this.langage&&"day"==t){var i=this.engDayList.indexOf(e);return this.dayList[i]}},Datepicker.prototype.getCalendarMonth=function(t){this.active==t,this.setTranslate(),$(".calendar-list").css("transform","translate3d("+this.translate+"px,0,0)"),$(".month__text").text(this.getMonth(this.active)+" "+this.year)},Datepicker.prototype.getNext=function(){this.active<11?(this.active++,this.setTranslate(),$(".calendar-list").css("transform","translate3d("+this.translate+"px,0,0)"),$(".month__text").text(this.getMonth(this.active)+" "+this.year)):11==this.active&&(this.active=0,this.setTranslate(),$(".calendar-list").css("transform","translate3d("+this.translate+"px,0,0)"),$(".month__text").text(this.getMonth(this.active)+" "+this.year))},Datepicker.prototype.getPrev=function(){this.active>1?(this.active--,this.setTranslate(),$(".calendar-list").css("transform","translate3d("+this.translate+"px,0,0)"),$(".month__text").text(this.getMonth(this.active)+" "+this.year)):0==this.active&&(this.active=11,this.setTranslate(),$(".calendar-list").css("transform","translate3d("+this.translate+"px,0,0)"),$(".month__text").text(this.getMonth(this.active)+" "+this.year))},Datepicker.prototype.getDayIndex=function(t){var e=this.dayList.indexOf(t);return e},Datepicker.prototype.updateDayLabel=function(){$(".date__day").html(this.getToday()),$(".date__month").html(this.getThisMonth()),$(".date__number").html(this.getTodayNumber())},Datepicker.prototype.createBoards=function(){el=$(this.selector),$(".calendar-list").css("width",12*this.width);for(var t=1;t<=12;t++)el.append('<div class="calendar" data-month="'+t+'" style="flex-basis:'+$(".datepicker__body").width()+"px;width:"+$(".datepicker__body").width()+'px"></div>');for(var t=0;t<=12;t++)$(".calendar:nth-child("+t+")").append('<div class="calendar__label-list"></div>'),$(".calendar:nth-child("+t+")").append('<div class="calendar__day-list"></div>');for(var t=0;t<=12;t++){for(var e=0;e<this.dayList.length;e++)$(".calendar__label-list").eq(t).append('<div class="col"><span>'+this.dayList[e].substr(0,1)+"</span></div>");for(var i=this.getFirstDayOfMonth(this.year,t+1),s=this.getDayIndex(i),a=1;a<=this.getMonthDayNumber(this.year,t+1)+s;a++)0!==s?a<s+1?$(".calendar__day-list").eq(t).append('<div class="col"></div>'):0==s?$(".calendar__day-list").eq(t).append('<div class="col"><span>'+(a+1)+"</span></div>"):$(".calendar__day-list").eq(t).append('<div data-day="'+(a-s)+'" class="col"><span>'+(a-s)+"</span></div>"):$(".calendar__day-list").eq(t).append('<div data-day="'+a+'"class="col"><span>'+a+"</span></div>")}},Datepicker.prototype.addMarkers=function(t){var e=this;setTimeout(function(){for(var i=0;i<t.length;i++){var s=e.getMonthIndex(t[i].month);$('.calendar[data-month="'+s+'"] .calendar__day-list .col[data-day="'+t[i].day+'"]').addClass("col--highlight")}},1e3)},Datepicker.prototype.setTranslate=function(){if(this.active<12&&this.active>=1){var t=-((this.active-1)*this.width);this.translate=t}else{var t=-(11*this.width);this.translate=t}};var hillsDatepicker=new Datepicker;Faq=function(){this.data={},this.canSkip=null,this.isReady=null,this.topicsList=[],this.step=null,this.selected={},this.articles=[],this.currentArticles=[],this.addMoreTimes=1,this.init()},Faq.prototype.init=function(){this.canSkip=!1,this.isReady=!1,this.step=1,this.data=this.getData(),this.clickListener(),this.keyboardListener()},Faq.prototype.getData=function(){var t={},e=this;$.getJSON("/faq/data").done(function(i){for(var s=0;s<i.rubriques.length;s++){t[i.rubriques[s]]=i.result[s]}e.data=t,e.topicsList=i.rubriques})},Faq.prototype.clickListener=function(){var t=this;$(".search__next i").click(function(){t.canSkip&&t.next()}),$(".faq .buttons__full").click(function(){t.addMore(t.addMoreTimes),t.addMoreTimes++}),$(".faq .buttons__search").click(function(){t.newSearch()}),$(".search__reload").click(function(){t.prev()}),$(document).on("click",".faq .new-search",function(){t.newSearch(),$(this).parent().remove()}),$(document).on("click",".faq .option",function(){var e=$(this).data("content");if(1==t.step)t.canSkip=!0,$(".search__current").text(e).attr("data-content",e),$(".faq .option").removeClass("option--selected"),$(this).toggleClass("option--selected"),$(".search__next i").addClass("ready");else if(2==t.step){if($(this).hasClass("option--selected")){$(this).removeClass("option--selected");var i=$(".search__current").text(),s=i.split(","),a=s.indexOf(e);s.splice(a,1);var n=s.join(",");$(".search__current").text(n)}else if($(this).addClass("option--selected"),""==$(".search__current").text())$(".search__current").text(e).attr("data-content",e);else if($(".search__current").text().indexOf(e)==-1){var o=$(".search__current").text()+","+e;$(".search__current").text(o).attr("data-content",e)}""!==$(".search__current").text()?(t.isReady=!0,$(".search__next i").addClass("ready")):(t.isReady=!1,$(".search__next i").removeClass("ready"))}})},Faq.prototype.keyboardListener=function(){var t=this;$(document).on("keydown",function(e){var i=e.keyCode||e.which;13==i&&t.next()})},Faq.prototype.next=function(){var t=this;if(1==this.step&&this.canSkip){var e=$(".search__select").find(".option--selected").data("content");this.selected.topic=e,$(".search__select").find("li").remove(),$(".search__current").text(""),$(".search__next i").removeClass("ready"),$(".search__reload").addClass("search__reload--show"),setTimeout(function(){$(".search__progress .fill").addClass("step-2")},5),this.createList(".search__select",this.data[this.selected.topic],!1),this.slideTitle("Sélectionnez un ou plusieurs mots-clés"),this.step++}else 2==this.step&&this.isReady&&(this.canSkip=!1,$(".search__progress .fill").addClass("step-3"),this.selected.keywords=[],$(".search__select").find(".option--selected").each(function(){t.selected.keywords.push($(this).data("content"))}),t.getResult(),setTimeout(function(){$(".search").addClass("fade-out")},600),setTimeout(function(){$(".search").addClass("hide")},1100))},Faq.prototype.slideTitle=function(t){$(".search__label").addClass("search__label--down"),setTimeout(function(){$(".search__label").removeClass("search__label--down")},250),setTimeout(function(){$(".search__label").text(t)},200)},Faq.prototype.prev=function(){2==this.step&&($(".search__progress .fill").removeClass("step-2"),$(".search__current").text(""),$(".search__label").removeClass("search__label--change"),$(".search__label").addClass("search__label--rollback"),$(".search__select").find("li").remove(),this.createList(".search__select",this.topicsList,!0),this.slideTitle("Sélectionnez une rubrique"),$(".search__next i").removeClass("ready"),this.isReady=!1,$(".search__reload").removeClass("search__reload--show"),this.step--,this.canSkip=!1)},Faq.prototype.getResult=function(){var t=this;t.articles=[],t.currentArticles=[],$.getJSON("faq/keywords/"+this.selected.topic).done(function(e){var i=0;setTimeout(function(){t.isDone=!0;for(var s=0;s<e.length;s++)if(t.isKeywordInSelection(e[s])&&(t.currentArticles.push(e[s]),i<5)){var a=e[s].reponse,n=e[s].question,o=e[s].title,r='<div class="col-xs-9 faq-item"><div class="row faq-item__title">'+o+'</div><div class="row faq-item__question">'+n+'</div><div class="row faq-item__reponse">'+a+"</div></div>";$(".faq .list").append(r),i++}t.currentArticles.length>5?$(".buttons__full").addClass("buttons__full--show"):0==t.currentArticles.length&&$(".faq .list").append('<span class="no-results">Aucun résultat de recherche, voulez-vous faire <span class="new-search">une nouvelle recherche ?</span></span>'),t.currentArticles.length>0&&$(".buttons__search").addClass("buttons__search--show"),$(".faq-item p").each(function(){""!=$(this).text()&&" "!=$(this).text()||$(this).remove()})},1e3)})},Faq.prototype.isKeywordInSelection=function(t){bool=!1;for(var e=0;e<t.keywords.length;e++)this.selected.keywords.indexOf(t.keywords[e].keyword)!==-1&&this.currentArticles.indexOf(t.id)?bool=!0:1==bool?bool=!0:bool=!1;return bool},Faq.prototype.addMore=function(t){iterationNumber=5,t=t*iterationNumber+1,iterationIndex=iterationNumber+t,this.currentArticles.length<iterationIndex&&(iterationIndex=this.currentArticles.length,$(".buttons__full").removeClass("buttons__full--show"));for(var e=t;e<iterationIndex;e++){var i='<div class="col-xs-9 faq-item"><div class="row faq-item__title">'+this.currentArticles[e].title+'</div><div class="row faq-item__question">'+this.currentArticles[e].question+'</div><div class="row faq-item__reponse">'+this.currentArticles[e].reponse+"</div></div>";$(".faq .list").append(i)}$(".faq-item p").each(function(){""!=$(this).text()&&" "!=$(this).text()||$(this).remove()})},Faq.prototype.newSearch=function(){this.step=1,this.canSkip=!1,this.isReady=!1,$(".search__next i").removeClass("ready"),$(".search").removeClass("hide fade-out"),$(".search__select .option").remove(),this.createList(".search__select",this.topicsList,!0),$(".search__progress .fill").removeClass("step-3 step-2"),$(".search__current").text(""),$(".buttons__search").removeClass("buttons__search--show"),$(".buttons__full").removeClass("buttons__full--show"),this.slideTitle("Sélectionnez une rubrique"),$(".faq-item").fadeOut(500)},Faq.prototype.createList=function(t,e,i){if(i)for(var s=0;s<e.length;s++)$(t).append('<li data-content="'+e[s]+'" class="option">'+e[s]+"</li>");else for(var s=0;s<e.length;s++)$(t).append('<li data-content="'+e[s].name+'" class="option">'+e[s].name+"</li>")},FaqHandler=new Faq,FluxHandler=function(){this.init()},FluxHandler.prototype.init=function(){this.monthList=["Décembre","Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre"],this.parsingDates(),this.parsingTags(),this.trimTable()},FluxHandler.prototype.parsingDates=function(){var t=this;$(".actus-articles__entreprises .article__footer .date, .actus-articles__cabinet .article__date, .gallery__item .article__date, .echo-article__date").each(function(){var e=$(this).text(),i=e.substring(0,4),s=e.substring(6,7);s=t.getMonth(s);var a=e.substring(8,10),n="Publié le "+a+" "+s+" "+i+".";$(this).text(n)})},FluxHandler.prototype.parsingTags=function(){var t=$.parseHTML($(".echo-article__content").text()),e=$.parseHTML($(".echo-article__table").text());$(".echo-article__content").html(t),$(".echo-article__table").html(e)},FluxHandler.prototype.trimTable=function(){$(".echo-article__table td").each(function(){var t=$(this).text().split("").join("");$(this).text(t)}),$(".echo-article__table tr").each(function(){1==$(this).children().length&&$(this).find("td").attr("colspan",8).addClass("full")})},FluxHandler.prototype.testLink=function(t){return/^[A-Za-z0-9]+(?:-[A-Za-z0-9]+)*$/.test(t)},FluxHandler.prototype.replace=function(t){var e=["À","Á","Â","Ã","Ä","Å","Æ","Ç","È","É","Ê","Ë","Ì","Í","Î","Ï","Ð","Ñ","Ò","Ó","Ô","Õ","Ö","Ø","Ù","Ú","Û","Ü","Ý","ß","à","á","â","ã","ä","å","æ","ç","è","é","ê","ë","ì","í","î","ï","ñ","ò","ó","ô","õ","ö","ø","ù","ú","û","ü","ý","ÿ","’",":","&nbsp","/"],s=["A","A","A","A","A","A","AE","C","E","E","E","E","I","I","I","I","D","N","O","O","O","O","O","O","U","U","U","U","Y","s","a","a","a","a","a","a","ae","c","e","e","e","e","i","i","i","i","n","o","o","o","o","o","o","u","u","u","u","y","y","","-","","-"];for(i=0;i<e.length;i++)if(t.indexOf(e[i])!==-1)for(;t.indexOf(e[i])!==-1;)t=t.replace(e[i],s[i]);return t=t.replace(/ /g,"-"),t=t.replace("--","-"),t=t.toLowerCase()},FluxHandler.prototype.removeSpecials=function(t){for(var e="!@#$^&%*()+=-[]{}|:<>?,.",i=0;i<e.length;i++)t=t.replace(new RegExp("\\"+e[i],"gi"),"");return t},FluxHandler.prototype.getMonth=function(t){return this.monthList[t]},fluxXML=new FluxHandler,MouseAnimation=function(){this.classesList={},this.init()},MouseAnimation.prototype.init=function(){this.classesList={wheel:"mousewheel",arrows:"mouse-arrow"},this.anim()},MouseAnimation.prototype.anim=function(){var t=this;t.toggleClasses(),setInterval(function(){t.toggleClasses()},3e3)},MouseAnimation.prototype.toggleClasses=function(){var t=this,e=$("."+t.classesList.wheel),i=$("."+t.classesList.arrows);e.addClass(t.classesList.wheel+"--animated"),setTimeout(function(){e.removeClass(t.classesList.wheel+"--animated")},2e3);for(var s=0;s<i.length;s++)this.setTimer(s,i)},MouseAnimation.prototype.setTimer=function(t,e){var i=this;setTimeout(function(){e.eq(t).addClass(i.classesList.arrows+"--show"),setTimeout(function(){0==t?e.eq(0).removeClass(i.classesList.arrows+"--show"):e.eq(t).removeClass(i.classesList.arrows+"--show")},400+30*t)},500+50*t)},wheelAnim=new MouseAnimation,Slider=function(t,e){this.element=$(t),this.connection=e,this.slideClass=e.params.slideClass,this.slideActiveClass=e.params.slideActiveClass,this.activeSlide=e.params.slideVisibleClass,this.captionClass=".slider-caption",this.speed=e.params.speed,that=this,this.init()},Slider.prototype.init=function(){this.connection.on("transitionEnd",function(){that.show()}),setTimeout(function(){$(".slider-caption").addClass("slider-caption--shown"),$(".slider-caption__title").addClass("slider-caption__title--shown")},150)},Slider.prototype.toggleClasses=function(){var t="."+this.slideActiveClass,e=this.captionClass,i=$(t).find(e),s=$(t).find(e+"__title");$(e).removeClass("slider-caption--shown"),i.addClass("slider-caption--shown"),$(e+"__title").removeClass("slider-caption__title--shown"),s.addClass("slider-caption__title--shown")},Slider.prototype.show=function(){setTimeout(function(){that.toggleClasses()},this.speed-190)},ToolBox=function(){this.enabled=null,this.selector=null,this.el=null,this.widthTransition=null,this.heightTransition=null,this.translateProperties={},this.transition={},this.init()},ToolBox.prototype.init=function(){this.enabled=!1,this.selector=".toolbox",this.el=$(this.selector),this.translateOffsets={translateX:null,translateY:null},this.transition.timers={transform:300,height:500},this.clickListener()},ToolBox.prototype.getTransformTransitionOffset=function(){var t=this.el.css("transform");if(t.indexOf("matrix3d")==-1){t=t.substr(7);var e=t.indexOf(")");t=t.substr(0,e);var i=t.split(","),s=i[4],a=i[5];this.translateOffsets.translateX=s+"px",this.translateOffsets.translateY=a+"px"}},ToolBox.prototype.getTransitionTime=function(t){var e=this.el.css("transition")||this.el.css("-moz-transition");e=e.split(",");for(var i=0;i<e.length;i++)if(e[i].indexOf(t)!==-1){var s=e[i].split(" ")[2];if(s.indexOf("s")!==-1&&s.indexOf("ms")==-1){var a=s.indexOf("s"),n=s.substr(0,a);return n=1e3*n}if(s.indexOf("ms")!==-1)return n}},ToolBox.prototype.clickListener=function(){var t=this;this.el.click(function(){t.toggleState()}),$("body >*:not(.toolbox)").click(function(){t.enabled&&t.close()})},ToolBox.prototype.open=function(){var t=this;this.enabled=!0;var e=this.transition.timers.transform;this.el.addClass("toolbox--open-x"),this.el.removeClass("toolbox--delay"),setTimeout(function(){t.el.addClass("toolbox--open-y")},e)},ToolBox.prototype.close=function(){var t=this,e=this.transition.timers.height;this.el.removeClass("toolbox--open-y"),t.el.addClass("toolbox--delay"),setTimeout(function(){t.el.removeClass("toolbox--open-x")},e),this.enabled=!1},ToolBox.prototype.toggleState=function(){this.enabled?this.close():this.open()},cabinetTools=new ToolBox;