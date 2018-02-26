#wget -O menu.png 
convert -crop 50%x32% menu.jpg item.jpg
tesseract item-0.jpg output-0 -l por
tesseract item-1.jpg output-1 -l por
tesseract item-2.jpg output-2 -l por
tesseract item-3.jpg output-3 -l por
tesseract item-4.jpg output-4 -l por
tesseract item-5.jpg output-5 -l por

