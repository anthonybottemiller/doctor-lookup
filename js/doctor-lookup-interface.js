var doctor = require('./../js/doctor.js').doctorModule;

$(document).ready(function() {
  var doctorObject = new doctor();
  $("#doctor-lookup-form").submit(function(){
    event.preventDefault();
    var medicalIssue = $('#issue').val();
    doctorObject.getDoctors(medicalIssue);
  });
});