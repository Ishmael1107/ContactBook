let rootPath = "https://mysite.itvarsity.org/api/ContactBook/";
let apiKey = localStorage.getItem("apikey");

function getApiKey() {
    if (!apiKey) {
        window.open("enter-api-key.html", "_self");
    }
    return apiKey;
}