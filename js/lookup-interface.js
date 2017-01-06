var Search = require('./../js/lookup.js').searchModule;

var displayDoctors = function(medicalIssue, doctors){
  $('.showDoctors').text("Doctors for " + medicalIssue + "is " + result.doctors);
};

$(document).ready(function() {
  var foundDoctors = new Search();
    $('#doctor').click(function() {
      var medicalIssue = $('#medicalIssue').val();
      $('#medicalIssue').val("");
      foundDoctors.getDoctors(medicalIssue, displayDoctors);
  });
});
