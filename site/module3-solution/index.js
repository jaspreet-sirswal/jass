//Change icon
$(document).ready(function() {
  $(".dropdownMenu").on("hide.bs.dropdown", function() {
    $(".btnMenu").html('Menu <span class="caret"></span>');
    $("#btSwitch").removeClass('is-active');
  });
  $(".dropdownMenu").on("show.bs.dropdown", function() {
    $(".btnMenu").html('Menu <span class="caret caret-up"></span>');
    $("#btSwitch").addClass('is-active');
  });
});