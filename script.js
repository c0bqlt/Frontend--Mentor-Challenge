var rating = 0;

function storeVar(el) {
    var element = document.getElementById("selected-button");
    if (element) {
        document.getElementById("selected-button").removeAttribute("id");
    }
    rating =el.getAttribute('value');
    el.setAttribute('id','selected-button');
    document.cookie = rating;
}

function nextPage() {
    if (rating !=0) {
        window.location.href = 'thank-you.html'
    }
    else {
        alert("Please select a rating to submit");
    }
}