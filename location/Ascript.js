const button = document.querySelector("button");

button.addEventListener("click", () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(onSuccess, onError); // Fix typo: 'onerror' to 'onError'
    } else {
        button.innerText = "Your browser does not support geolocation.";
    }
});

function onSuccess(position) {
    console.log(position);
}

function onError(error) {
    if (error.code === 1) {
        button.innerText = "You denied the request.";
    } else if (error.code === 2) {
        button.innerText = "Location not available.";
    } else {
        button.innerText = "Something went wrong.";
    }
    button.setAttribute("disabled", "true");
}
