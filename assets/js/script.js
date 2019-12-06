var current_fs, next_fs, previous_fs; //fieldsets
var left, opacity, scale; //fieldset properties which we will animate

$(".next").click(function(){
  current_fs = $(this).parent();
  next_fs = $(this).parent().next();
  //activate next step on progressbar using the index of next_fs

});
