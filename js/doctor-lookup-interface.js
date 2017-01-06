var doctor = require('./../js/doctor.js').doctorModule;

$(document).ready(function() {
  var doctorObject = new doctor();
  $("#get-doctors").click(function(){
    var medicalIssue = $('#issue').val();
    doctorObject.getDoctors(medicalIssue);
  });
});