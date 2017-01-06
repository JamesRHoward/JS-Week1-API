var apiKey = require('./../.env').apiKey;

Search = function(){
};

Search.prototype.getDoctors = function(medicalIssue, displayFunction) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+  medicalIssue + '&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=cf6d046cadf9d854c09e021fb320f513').then(function(result) {
    displayFunction(medicalIssue, doctors);
      console.log(result);
    }).fail(function(error){
      $('.showDoctors').text("error");
      console.log("fail");
    });
};

exports.searchModule = Search;
