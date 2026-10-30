// Load Module 2 data

window.onload = function () {

    let speed =
        localStorage.getItem("speed");

    let acceleration =
        localStorage.getItem("acceleration");

    let braking =
        localStorage.getItem("braking");

    let lane =
        localStorage.getItem("lane");


    if (speed) {

        document.getElementById("speed").value =
            speed;
    }


    if (acceleration) {

        document.getElementById("acceleration").value =
            acceleration;
    }


    if (braking) {

        if (braking === "Hard") {

            document.getElementById("braking").value =
                "hard";
        }

        else {

            document.getElementById("braking").value =
                "normal";
        }
    }


    if (lane) {

        if (
            lane === "Left Shift" ||
            lane === "Right Shift"
        ) {

            document.getElementById("lane").value =
                "unsafe";
        }

        else {

            document.getElementById("lane").value =
                "stable";
        }
    }
};


function analyzeDriving() {

    let speed =
        Number(
            document.getElementById("speed").value
        );


    let acceleration =
        Number(
            document.getElementById("acceleration").value
        );


    let braking =
        document.getElementById("braking").value;


    let lane =
        document.getElementById("lane").value;


    let score = 100;


    if (speed > 80) {

        score -= 30;
    }

    else if (speed > 50) {

        score -= 15;
    }


    if (acceleration > 4) {

        score -= 25;
    }

    else if (acceleration > 2) {

        score -= 10;
    }


    if (braking === "hard") {

        score -= 20;
    }


    if (lane === "unsafe") {

        score -= 20;
    }


    if (score < 0) {

        score = 0;
    }


    let behaviour;
    let risk;
    let message;


    if (score >= 75) {

        behaviour = "SAFE";
        risk = "LOW";

        message =
            "Good driving behaviour. Keep driving safely.";
    }

    else if (score >= 50) {

        behaviour = "MODERATE";
        risk = "MEDIUM";

        message =
            "Be careful. Some unsafe driving behaviour was detected.";
    }

    else {

        behaviour = "RISKY";
        risk = "HIGH";

        message =
            "Warning! High-risk driving behaviour detected.";
    }


    document.getElementById("behaviour").innerText =
        behaviour;


    document.getElementById("risk").innerText =
        risk;


    document.getElementById("score").innerText =
        score + "/100";


    document.getElementById("alert").innerText =
        message;


    // Save Module 3 result

    localStorage.setItem(
        "safetyScore",
        score
    );

    localStorage.setItem(
        "behaviour",
        behaviour
    );

    localStorage.setItem(
        "riskLevel",
        risk
    );


    // Enable Module 4 button

    document.getElementById(
        "module4Button"
    ).style.display = "block";
}


// Go to Module 4

function goToModule4() {

    let score =
        localStorage.getItem("safetyScore");


    if (!score) {

        alert("Please analyze driving first.");

        return;
    }


    window.location.href =
        "module4.html";
}