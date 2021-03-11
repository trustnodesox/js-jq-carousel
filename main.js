var left = $('.prev');
var right = $('.next');
var last = $('.last');
var first = $(".first");

//if (right.click()) {
  //img.removeClass('active').next().addCLass('active');
//} else if (left.click()){
//  img.removeClass('active').prev().addClass('active')
//}



left.click(function(){
  previous();
})

right.click(function(){
  next();
})

//img.removeClass('active').next().addClass('active');

function previous(){
  var currentImg = $(".active");
  var prevImg = currentImg.prev();
  if(currentImg.hasClass("first")){
    prevImg = last;
  }
  currentImg.removeClass("active");
  prevImg.addClass("active");


}

function next(){
  var currentImg = $(".active");
  var nextImg = currentImg.next();
  if(currentImg.hasClass("last")){
    nextImg = first;
  }
  currentImg.removeClass("active");
  nextImg.addClass("active");
}
