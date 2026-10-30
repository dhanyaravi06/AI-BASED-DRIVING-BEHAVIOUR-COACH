let monitoring = false;

let dataCount = 0;

let interval;


// Load vehicle from Module 1

window.onload = function () {

    let carModel =
        localStorage.getItem("carModel");

    if (carModel) {

        document.getElementById("vehicleName").innerText =
            carModel;
    }
    else {

        document.getElementById("vehicleName").innerText =
            "Not Available";
    }
};


// Start / Stop Monitoring

function startMonitoring() {

    const button =
        document.getElementById("startBtn");


    if (!monitoring) {

        monitoring = true;

        button.innerText =
            "Stop Monitoring";


        document.getElementById("monitorStatus").innerText =
            "Monitoring is active";


        document.getElementById("dataStatus").innerText =
            "Collecting Data";


        generateDrivingData();


        interval =
            setInterval(
                generateDrivingData,
                2000
            );


        getLocation();

    }

    else {

        monitoring = false;

        button.innerText =
            "Start Monitoring";


        document.getElementById("monitorStatus").innerText =
            "Monitoring is stopped";


        document.getElementById("dataStatus").innerText =
            "Inactive";


        clearInterval(interval);
    }
}


// Generate driving data

function generateDrivingData() {

    let speed =
        Math.floor(Math.random() * 60) + 20;


    let acceleration =
        (Math.random() * 3).toFixed(1);


    let brakingOptions = [
        "Normal",
        "Normal",
        "Hard",
        "Normal"
    ];


    let braking =
        brakingOptions[
            Math.floor(
                Math.random() *
                brakingOptions.length
            )
        ];


    let laneOptions = [
        "Stable",
        "Stable",
        "Left Shift",
        "Right Shift"
    ];


    let lane =
        laneOptions[
            Math.floor(
                Math.random() *
                laneOptions.length
            )
        ];


    document.getElementById("speed").innerText =
        speed;


    document.getElementById("acceleration").innerText =
        acceleration;


    document.getElementById("braking").innerText =
        braking;


    document.getElementById("lane").innerText =
        lane;


    dataCount++;


    document.getElementById("dataCount").innerText =
        dataCount;


    // Save latest driving data

    localStorage.setItem(
        "speed",
        speed
    );

    localStorage.setItem(
        "acceleration",
        acceleration
    );

    localStorage.setItem(
        "braking",
        braking
    );

    localStorage.setItem(
        "lane",
        lane
    );
}


// GPS

function getLocation() {

    if (navigator.geolocation) {

        navigator.geolocation.getCurrentPosition(
            showPosition,
            showError
        );

    }

    else {

        document.getElementById("gpsStatus").innerText =
            "GPS not supported";
    }
}


function showPosition(position) {

    document.getElementById("latitude").innerText =
        position.coords.latitude.toFixed(6);


    document.getElementById("longitude").innerText =
        position.coords.longitude.toFixed(6);


    document.getElementById("gpsStatus").innerText =
        "Location detected";
}


function showError() {

    document.getElementById("gpsStatus").innerText =
        "Location permission required";
}


// Go to Module 3

function goToModule3() {

    if (!monitoring) {

        alert("Please start monitoring first.");

        return;
    }


    clearInterval(interval);

    window.location.href =
        "module3.html";
}