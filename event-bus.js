$(document).ready(function(){
var myBus = $({}),
  $input = $("input[name='data']"),
  $button = $("#send"),
  $out = $("#out"),
  $deactivate = $("#deactivate"),
  $activate = $("#activate"),
  count = 1;

  function append(ev, data){
    $out.prepend("<div>" + data + "</div>");
  };
  
  myBus.on("dataEnter", append);
  $button.click(function(){
    myBus.trigger("dataEnter", [$input.val()]);
    $input.val("");
  });
  $deactivate.click(function(){
    myBus.off("dataEnter", append);
  });
  $activate.click(function(){
    myBus.on("dataEnter", append);
  });
});