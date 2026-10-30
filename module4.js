let session = 0;


// Load Module 3 Safety Score

window.onload = function () {

    let safetyScore =
        localStorage.getItem("safetyScore");


    if (safetyScore) {

        document.getElementById("safetyScore").value =
            safetyScore;
    }
};


function generateCoaching() {

    let safetyScore =
        Number(
            document.getElementById("safetyScore").value
        );


    let speed =
        document.getElementById("speedControl").value;


    let braking =
        document.getElementById("braking").value;


    let lane =
        document.getElementById("lane").value;


    let score = safetyScore;


    // Speed

    if (speed === "moderate") {

        score -= 10;
    }

    else if (speed === "poor") {

        score -= 20;
    }


    // Braking

    if (braking === "moderate") {

        score -= 8;
    }

    else if (braking === "hard") {

        score -= 18;
    }


    // Lane

    if (lane === "moderate") {

        score -= 8;
    }

    else if (lane === "unsafe") {

        score -= 18;
    }


    if (score < 0) {

        score = 0;
    }


    if (score > 100) {

        score = 100;
    }


    score = Math.round(score);


    let performance;
    let coachingLevel;
    let message;


    if (score >= 80) {

        performance = "EXCELLENT";

        coachingLevel = "ADVANCED";

        message =
            "Excellent driving performance! " +
            "Continue maintaining safe speed, smooth braking " +
            "and stable lane discipline.";
    }

    else if (score >= 60) {

        performance = "GOOD";

        coachingLevel = "INTERMEDIATE";

        message =
            "Good progress! Focus on improving speed control, " +
            "braking and lane discipline.";
    }

    else {

        performance = "NEEDS IMPROVEMENT";

        coachingLevel = "BASIC";

        message =
            "Your driving performance needs improvement. " +
            "Practice safe speed control, smooth braking " +
            "and proper lane discipline.";
    }


    if (speed === "poor") {

        message +=
            " 🚗 Tip: Maintain a safe and consistent speed.";
    }


    if (braking === "hard") {

        message +=
            " 🛑 Tip: Avoid sudden braking and brake smoothly.";
    }


    if (lane === "unsafe") {

        message +=
            " 🛣️ Tip: Maintain your lane and avoid sudden lane changes.";
    }


    document.getElementById("performance").innerText =
        performance;


    document.getElementById("coachingLevel").innerText =
        coachingLevel;


    document.getElementById("score").innerText =
        score + "/100";


    document.getElementById("coachingMessage").innerText =
        message;


    // Progress bar

    document.getElementById("progressBar").style.width =
        score + "%";


    document.getElementById("progressText").innerText =
        score + "% Performance";


    // History

    session++;


    let table =
        document.getElementById("historyTable");


    let row =
        table.insertRow();


    row.innerHTML = `
        <td>Session ${session}</td>
        <td>${score}/100</td>
        <td>${performance}</td>
    `;
}