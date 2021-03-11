var left = $('.fa-angle-left')
var right = $('fa-angle-right')
var img = $('img')
var active = $('.active')

if (right.click()) {
  img.removeClass('active').next().addCLass(active);
} else if (left.click()){
  img.removeClass('active').prev().addClass(active)
}


left.click(function(){
  img.addClass(active)
})
