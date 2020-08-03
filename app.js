function info(url) {
    return fetch(url).then(resp => resp.json())
}

var quote_API = { info }

function get_quote() {
    quote_API.info("https://quote-garden.herokuapp.com/api/v2/quotes/random").then(data => insert_quote(data['quote']['quoteText']))
}

var quote_message = document.querySelector("h2#quote")

function insert_quote(quote) {
    quote_message.innerText = quote;
}

var moreButton = document.querySelector("button#more")
moreButton.addEventListener("click", ()=> get_quote())

document.body.onload = get_quote

var agree = 0;

function agrees() {
        agree += 1;
        document.getElementById("num_agree").innerHTML = agree;
 }

var disagree = 0;
function disagrees() {
        disagree += 1;
        document.getElementById("num_disagree").innerHTML = disagree;
 }

var progress_length = document.getElementById("progress_bar").value;

function increase_progress() {

  if (progress_length < 99) {
    progress_length += 1
    document.getElementById("progress_bar").value = progress_length;
  } else if ((progress_length > 99 && progress_length < 100)) {
    progress_length == 100;
    document.getElementById("progress_bar").value = progress_length;
  }
}

function reset(){
	document.getElementById("num_agree").innerHTML = 0; 
	document.getElementById("num_disagree").innerHTML = 0; 
	document.getElementById("progress_bar").value = 0;
}
