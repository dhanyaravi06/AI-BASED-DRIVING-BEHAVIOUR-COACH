function login() {

    let email =
        document.getElementById("email").value;

    let password =
        document.getElementById("password").value;

    if (email === "" || password === "") {

        document.getElementById("loginMessage").innerText =
            "Please enter email and password.";

        return;
    }

    // Save login email
    localStorage.setItem("driverEmail", email);

    // Go to Driver Profile
    window.location.href = "profile.html";
}


function saveProfile() {

    let name =
        document.getElementById("driverName").value;

    let age =
        document.getElementById("age").value;

    let experience =
        document.getElementById("experience").value;

    let carModel =
        document.getElementById("carModel").value;

    let language =
        document.getElementById("language").value;


    if (
        name === "" ||
        age === "" ||
        experience === "" ||
        carModel === "" ||
        language === ""
    ) {

        document.getElementById("profileMessage").innerText =
            "Please fill all the details.";

        return;
    }


    // Save profile data
    localStorage.setItem("driverName", name);
    localStorage.setItem("driverAge", age);
    localStorage.setItem("drivingExperience", experience);
    localStorage.setItem("carModel", carModel);
    localStorage.setItem("language", language);


    document.getElementById("profileMessage").innerText =
        "Driver Profile Saved Successfully!";


    // Go to Module 2
    setTimeout(function () {

        window.location.href = "module2.html";

    }, 1000);
}