var tesseract = require('node-tesseract'); 
var cheerio = require('cheerio'); 
var request = require('request'); 
var fs = require('fs'); 
 
 
 
request( 
  "http://www.uel.br/ru/pages/cardapio.php", 
  (error, response, body)=>{ 
    if(error){ 
      console.error(error); 
    }else{ 
      res = body 
      var $ = cheerio.load(res); 
      $("img").map((it, el)=>{ 
        if(/(CARDAPIO).*\.jpg/i.test(el.attribs.src)){ 
          console.log(el.attribs.src); 
          request(el.attribs.src).pipe(fs.createWriteStream('menu.jpg')); 
        } 
      }); 
    } 
  } 
); 
