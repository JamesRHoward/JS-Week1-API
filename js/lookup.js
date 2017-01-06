var apiKey = require('./../.env').apiKey;

Search = function(){
};

Search.prototype.getDoctors = function(medicalIssue, displayFunction) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey).then(function(result) {
    displayFunction(medicalIssue, result.main.doctor);
      console.log(result);
    }).fail(function(error){
      $('.showDoctors').text(error.responseJSON.message);
      console.log("fail");
    });
};

exports.searchModule = Search;
