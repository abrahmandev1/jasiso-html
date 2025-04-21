
// contact form submission
const form = document.querySelector("form");
statusText = form.querySelector(".formStatus");

form.onsubmit = (e) => {
    e.preventDefault() // preventing form from submiting
    statusText.style.color = "green";
    statusText.style.display = "block";

    let xhr = new XMLHttpRequest(); // creating new xml object
    xhr.open("POST", "contact.php", true); // sending post request to contact.php file
    xhr.onload = () => {// once ajax loaded
        if (xhr.readyState == 4 && xhr.status == 200) {// if ajax status is 200 and 4 then there is no error
            let response = xhr.response; // storing ajax response in response variable

            if (response.indexOf("required") != -1 || response.indexOf("valid") != -1 || response.indexOf("failed") != -1) {
                statusText.style.color = "red";
            } else {
                form.reset();
                setTimeout(() => {
                    statusText.style.display = "none";
                }, 3000);
            }

            statusText.innerText = response;

        }
    }

    let formData = new FormData(form); // creating new form data obj. this obj data use to send form data

    xhr.send(formData); // ending form data
}