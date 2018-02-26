var fs = require('fs');
var fileArray = [];
fs.readdir("./", (err, files) => {
  files.forEach(file => {
    var fileContent = {
      day: "",
      menu: []
    };
    if(/output-[0-9].txt/i.test(file)){
      var contentArray = fs.readFileSync("./"+file, "utf-8").split("\n");
      contentArray = contentArray.filter((item)=>{
        if(item){
          return item.trim().length > 0;
        }
      });
      for(var i=0; i < contentArray.length; i++){
        if(i == 0){
          fileContent.day = contentArray[i].replace(/\d{2}.\d{2}.\d{4}/, "").replace(/\s-*\s/,"").replace(/\s/, "-");
          fileContent.date = contentArray[i].match(/(?:\d{2})(.)(?:\d{2})(.)(?:\d{4})/)[0];
          fileContent.date = fileContent.date.split("");
          fileContent.date[2]= "/";
          fileContent.date[5]= "/";
          fileContent.date = fileContent.date.join("");
        } else{
          fileContent.menu.push(contentArray[i]);
        }
      }
      fileArray.push(fileContent);
    }
  });
  fs.writeFileSync("menu.json", JSON.stringify(fileArray), "utf-8");
})
