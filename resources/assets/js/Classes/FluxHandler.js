FluxHandler = function () {
  this.init();
}

FluxHandler.prototype.init = function () {
  this.monthList = ['Décembre','Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre'];
  this.parsingDates();
  this.parsingTags();
  this.trimTable();
};

FluxHandler.prototype.parsingDates = function () {
  var that = this;
  $('.actus-articles__entreprises .article__footer .date, .actus-articles__cabinet .article__date, .gallery__item .article__date, .echo-article__date').each(function () {
    var val = $(this).text();
    var year = val.substring(0,4);
    if (val.substring(5,7) >= 10){
      var month = val.substring(5,7);
    }else{
      var month = val.substring(6,7);
    }
    month = that.getMonth(month);
    var day = val.substring(8,10);
    var date = 'Publié le '+day+' '+month+' '+year;
    $(this).text(date);
  })
};

FluxHandler.prototype.parsingTags = function () {
  var parsedContent = $.parseHTML($('.echo-article__content').text());
  var parsedTable = $.parseHTML($('.echo-article__table').text());
  $('.echo-article__content').html(parsedContent);
  $('.echo-article__table').html(parsedTable);
};

FluxHandler.prototype.trimTable = function () {
  $('.echo-article__table td').each(function () {
    var trimmed = $(this).text().split('').join('');
    $(this).text(trimmed);
  })
  $('.echo-article__table tr').each(function () {
    if($(this).children().length==1) {
      $(this).find('td').attr('colspan',8).addClass('full');
    }
  })
};

FluxHandler.prototype.testLink = function (val) {
  return /^[A-Za-z0-9]+(?:-[A-Za-z0-9]+)*$/.test(val);
};

FluxHandler.prototype.replace = function (val) {
  var special = ["À","Á","Â","Ã","Ä","Å","Æ","Ç","È","É","Ê","Ë","Ì","Í","Î","Ï","Ð","Ñ","Ò","Ó","Ô","Õ","Ö","Ø","Ù","Ú","Û","Ü","Ý","ß","à","á","â","ã","ä","å","æ","ç","è","é","ê","ë","ì","í","î","ï","ñ","ò","ó","ô","õ","ö","ø","ù","ú","û","ü","ý","ÿ","’",":",'&nbsp','/']
  var literal = ["A","A","A","A","A","A","AE","C","E","E","E","E","I","I","I","I","D","N","O","O","O","O","O","O","U","U","U","U","Y","s","a","a","a","a","a","a","ae","c","e","e","e","e","i","i","i","i","n","o","o","o","o","o","o","u","u","u","u","y","y","","-","",'-']
  for (i=0;i<special.length;i++) {
    if(val.indexOf(special[i])!==-1) {
      while(val.indexOf(special[i])!==-1) {
        val = val.replace(special[i],literal[i]);
      }
    }
  }
  val = val.replace(/ /g, "-");
  val = val.replace('--','-');
  val = val.toLowerCase();
  return val;
};

FluxHandler.prototype.removeSpecials = function (str) {
  var specialChars = "!@#$^&%*()+=-[]\{}|:<>?,.";
  for (var i = 0; i < specialChars.length; i++) {
      str = str.replace(new RegExp("\\" + specialChars[i], 'gi'), '');
  }
  return str;
};


FluxHandler.prototype.getMonth = function (index) {
    if(index==12) {
        return this.monthList[0]; // return current month as String (e.g: Juin)
    } else {
        return this.monthList[index];
    }
};

fluxXML = new FluxHandler();
