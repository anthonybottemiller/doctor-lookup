var apiKey = require('./../.env').apiKey;

function doctor(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

doctor.prototype.getFirstName = function() {
    return this.firstName;
};

doctor.prototype.getLastName = function() {
    return this.lastName;
};

doctor.prototype.getDoctors = function(medicalIssue) {

    $("ul#found-doctors").empty();

    $.get("https://api.betterdoctor.com/2016-03-01/doctors?query=" + medicalIssue + "&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=" + apiKey)
    .then(function(result) {
      var doctors = [];
      if (result.data.length === 0){
          console.log("result empty");
          $("ul#found-doctors").append("<li>Your search did not return any results!</li>");
      }

      else {
        result.data.forEach(function(data) {
          var newDoctor = new doctor(data.profile.first_name, data.profile.last_name);
          doctors.push(newDoctor);
          return doctors;
        });
      }

        doctors.forEach(function(doctor) {
          $("ul#found-doctors").append("<li>" + doctor.getFirstName() + " " + doctor.getLastName() + "</li>");
        });

    })
   .fail(function(error){
      console.log("fail");
    });
};

exports.doctorModule = doctor;