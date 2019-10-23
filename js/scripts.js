$(document).ready(function(){
  $("#formOne").submit(function(){
    var personName = $("input#name").val();
    var appointment = $("input#appointmentType").val();
    var time = $("input#time").val();

    $("#inputName").text(personName);
    $("#inputTime").text(time);
    $("#input-appointment").text(appointment);

    $("#confirmation").show();

  event.preventDefault();
  });
});
