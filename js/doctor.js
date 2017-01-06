var apiKey = require('./../.env').apiKey;

function Doctor(){
}

Doctor.prototype.getDoctors = function() {
    console.log("Works so far!");
}

exports.doctorModule = Doctor;