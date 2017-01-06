var Search = require('./../js/lookup.js').searchModule;

var displayDoctors = function(medicalIssue, result){
  $('.showDoctors').text("Doctors for " + medicalIssue + "is " + result);
};

$(document).ready(function() {
  var foundDoctors = new Search();
    $('#doctor').click(function() {
      var medicalIssue = $('#medicalIssue').val();
      $('#medicalIssue').val("");
      foundDoctors.getDoctors(medicalIssue, displayDoctors);
  });
});
