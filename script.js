function checkPassword() {

    // Get the value entered in the password field

    const password = document.getElementById("password").value;



    // Check if the password is correct

    if (password === "5555") {

        // If correct, show the link to the document

        document.getElementById("link").style.display = "block";

        // Hide the incorrect password image (if it was shown previously)

        document.getElementById("gif").style.display = "none";

    } else {

        // If incorrect, hide the link and show the GIF image

        document.getElementById("link").style.display = "none";

        document.getElementById("gif").style.display = "block";

    }

}