//Avoid reload onSubmit
var form = document.getElementById("searchForm");
function handleForm(event) { event.preventDefault(); }
form.addEventListener('submit', handleForm);

//focus input
var input = document.getElementById('searchInput');
input.focus();

//redirects to search the input in google
function searchGoogle() {
    location.href = `https://www.google.com/search?q=${input.value}`;
}

//displays input value on the greetings div
function displayInputValue(){
    var greetingsDiv = document.getElementById("greetings");
    greetingsDiv.innerHTML = input.value + " 🚀";
}