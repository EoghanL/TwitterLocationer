const rootURL = "https://api.twitter.com/1.1/search/tweets.json?q="
var today = new Date
today = `${today.getFullYear()}-${today.getMonth()+1}-${today.getUTCDate()}`
function queryTwitterAPI(){
  let term = $("#userInput").val()
  debugger
  $.ajax({
    url: rootURL + term + "&until=" + today
  })
}

//https://api.twitter.com/1.1/search/tweets.json?q=%23freebandnames&since_id=24012619984051000&max_id=250126199840518145&result_type=mixed&count=4
