var Search = require('./../js/lookup.js').searchModule;

var displayDoctors = function(medicalIssue, doctors){
  $('.showDoctors').text("Doctors for" + medicalIssue + "is" + doctors);
}

$(document).ready(function() {
  var foundDoctors = new Search()
    $('#medicalIssue').click(function() {
      var medicalIssue = $('#doctor').val();
      $('#doctor').val("");
      foundDoctors.getDoctors(medicalIssue, doctors);
  });
});
