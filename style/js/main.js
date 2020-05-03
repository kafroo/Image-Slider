var sliderContent = document.getElementById('allImages');

var image = ['a', 'b', 'c', 'd', 'e'];
var i = 0;

function nextImage(){
    if(i < image.length){
        i = i+1;
    } else{
        i = 1;
    }
    sliderContent.innerHTML = "<img src=style/images/"+image[i-1]+".jpg>";
}
function prevImage(){
    if(i < image.length+1 && i>1){
        i = i-1;
    } else{
        i = image.length;
    }
    sliderContent.innerHTML = "<img src=style/images/"+image[i-1]+".jpg>";
}