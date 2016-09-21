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
  $button.on('click', function(){
    myBus.trigger("dataEnter", [$input.val()]);
    $input.val("");
  });
  $deactivate.on('click', function(){
    myBus.off("dataEnter", append);
  });
  $activate.on('click', function(){
    myBus.off("dataEnter", append);
    myBus.on("dataEnter", append);
  });
});