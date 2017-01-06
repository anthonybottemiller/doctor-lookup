var Doctor = require('./../js/doctor.js').doctorModule;

$(document).ready(function() {
  var doctorObject = new Doctor();
  $("#get-doctors").click(function() {
      doctorObject.getDoctors();
  });
});