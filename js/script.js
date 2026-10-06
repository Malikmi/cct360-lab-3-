let version = "A";
let step = 1;

let folder= "images/";
let extension = ".jpg";

let mainImage = document.getElementById("mainImage");
let caption = document.getElementById("caption");
let stage = document.getElementById("stage");
let storyTitle = document.getElementById("storyTitle");

let btnA=document.getElementById("btnA");
let btnB=document.getElementById("btnB");
let btnNext =document.getElementById("btnNext");
let btnBack =document.getElementById("btnBack");

let thumb1=document.getElementById("thumb1");
let thumb2=document.getElementById("thumb2");
let thumb3=document.getElementById("thumb3");

function getImageName(v,s){
    if (v=== "A") {
        if (s === 1) { return "argue";}
        if (s === 2){ return "alone";}
        return "together";
    } else {
        if (s===1) { return "together";}
        if (s===2){ return "argue";}
        return "alone";
    }
}

function getCaption (v,s){
    if (v=== "A") {
        if (s===1) { return "It started with a fight. Neither of them would back downn.";}
        if (s===2){ return "Alone, she realized the fight wasn't worth losing him.";}
        return "Together, they realized they were better together than apart.";
    } else {
        if (s===1) { return "They used to be inseparable.";}
        if (s===2){ return "Then a small fight got bigger.";}
        return "Until one day, she was on her own.";
    }
}

function getStageName (s) {
    if (s===1) { return "Beginning";}
    if (s===2){ return "Middle";}
    return "End";
}

function highlightThumbs(thumb, number){
    if (number === step) {
        thumb.style.borderColor = "#c0392b";
        thumb.style.opacity = "1";
    } else {
        thumb.style.borderColor = "transparent";
        thumb.style.opacity = "0.4";
    }
}

function updateScene() {
    let imageName = getImageName(version, step);
    let text = getCaption(version, step);

    mainImage.src = folder + imageName + extension;
    mainImage.alt = text;
    caption.innerHTML = text;
    stage.innerHTML = getStageName(step) + "(" + step + " of 3)";

    thumb1.src = folder + getImageName(version, 1) + extension;
    thumb2.src = folder + getImageName(version, 2) + extension;
    thumb3.src = folder + getImageName(version, 3) + extension;

    highlightThumbs(thumb1, 1);
    highlightThumbs(thumb2, 2);
    highlightThumbs(thumb3, 3);

    btnBack.disabled = (step === 1);
    btnNext.disabled = (step === 3);

    console.log("Updated scene to version " + version + ", step " + step+ ": " + imageName);
}

function changeVersion(newVersion) {
    version = newVersion;
    step = 1;

    if (version === "A") {
        storyTitle.innerHTML = "Version A: The Makeup";
        document.body.style.backgroundColor = "#fbeee6";
        btnA. className = "version-btn active";
        btnB.className = "version-btn";
    } else {
        storyTitle.innerHTML = "Version B: The Breakup";
        document.body.style.backgroundColor = "#e6f7fb";
        btnA.className = "version-btn";
        btnB.className = "version-btn active";
    }
updateScene();
}

function nextStep() {
    if (step < 3) {
        step += 1;
        updateScene();
    }
}

function backStep() {
    if (step > 1) {
        step -= 1;
        updateScene();
    }
}

function goToStep (number) {
    step = number;
    updateScene();
}

function showVersionA() { changeVersion("A"); }
function showVersionB() { changeVersion("B"); }
function goToStep1() { goToStep(1); }
function goToStep2() { goToStep(2); }
function goToStep3() { goToStep(3); }

btnA.addEventListener("click", showVersionA);
btnB.addEventListener("click", showVersionB);

btnNext.addEventListener("click", nextStep);
btnBack.addEventListener("click", backStep);
mainImage.addEventListener("click", nextStep);

thumb1.addEventListener("click", goToStep1);
thumb2.addEventListener("click", goToStep2);
thumb3.addEventListener("click", goToStep3);

updateScene();