let methods = [
    { metode: document.getElementsByClassName('open')[0], bestilling: false },
    { metode: document.getElementsByClassName('open')[1], bagasje: false },
    { metode: document.getElementsByClassName('open')[2], spesielle: false },
    { metode: document.getElementsByClassName('open')[3], reward: false },
    { metode: document.getElementsByClassName('open')[4], holidays: false },
    { metode: document.getElementsByClassName('open')[5], hotell: false },
    { metode: document.getElementsByClassName('open')[6], charterfly: false },
    { metode: document.getElementsByClassName('open')[7], krav: false },
    { metode: document.getElementsByClassName('open')[8], bank: false }
]

methods[0].metode.onclick = function () {
    if (methods[0].bestilling == false) {
        methods[0].metode.style.backgroundColor = "white";
        document.getElementsByClassName("hiddenInfo")[0].style.display = "block"
        document.getElementsByClassName("hiddenInfo")[0].style.cursor = "default"
        methods[0].bestilling = true;
    } else {
        methods[0].metode.style.backgroundColor = "#E3E3E3";
        document.getElementsByClassName("hiddenInfo")[0].style.display = "none";
        methods[0].bestilling = false;
    }
}

methods[1].metode.onclick = function () {
    if (methods[1].bagasje == false) {
        document.getElementsByClassName("hiddenInfo")[1].style.display = "block"
        document.getElementsByClassName("hiddenInfo")[1].style.cursor = "default"
        methods[1].bagasje = true;
    } else {
        document.getElementsByClassName("hiddenInfo")[1].style.display = "none";
        methods[1].bagasje = false;
    }
}

methods[2].metode.onclick = function () {
    if (methods[2].spesielle == false) {
        document.getElementsByClassName("hiddenInfo")[2].style.display = "block"
        document.getElementsByClassName("hiddenInfo")[2].style.cursor = "default"
        methods[2].spesielle = true;
    } else {
        document.getElementsByClassName("hiddenInfo")[2].style.display = "none";
        methods[2].spesielle = false;
    }
}

methods[3].metode.onclick = function () {
    if (methods[3].reward == false) {
        document.getElementsByClassName("hiddenInfo")[3].style.display = "block"
        document.getElementsByClassName("hiddenInfo")[3].style.cursor = "default"
        methods[3].reward = true;
    } else {
        document.getElementsByClassName("hiddenInfo")[3].style.display = "none";
        methods[3].reward = false;
    }
}

methods[4].metode.onclick = function () {
    if (methods[4].holidays == false) {
        document.getElementsByClassName("hiddenInfo")[4].style.display = "block"
        document.getElementsByClassName("hiddenInfo")[4].style.cursor = "default"
        methods[4].holidays = true;
    } else {
        document.getElementsByClassName("hiddenInfo")[4].style.display = "none";
        methods[4].holidays = false;
    }
}

methods[5].metode.onclick = function () {
    if (methods[5].hotell == false) {
        document.getElementsByClassName("hiddenInfo")[5].style.display = "block"
        document.getElementsByClassName("hiddenInfo")[5].style.cursor = "default"
        methods[5].hotell = true;
    } else {
        document.getElementsByClassName("hiddenInfo")[5].style.display = "none";
        methods[5].hotell = false;
    }
}

methods[6].metode.onclick = function () {
    if (methods[6].charterfly == false) {
        document.getElementsByClassName("hiddenInfo")[6].style.display = "block"
        document.getElementsByClassName("hiddenInfo")[6].style.cursor = "default"
        methods[6].charterfly = true;
    } else {
        document.getElementsByClassName("hiddenInfo")[6].style.display = "none";
        methods[6].charterfly = false;
    }
}

methods[7].metode.onclick = function () {
    if (methods[7].krav == false) {
        document.getElementsByClassName("hiddenInfo")[7].style.display = "block"
        document.getElementsByClassName("hiddenInfo")[7].style.cursor = "default"
        methods[7].krav = true;
    } else {
        document.getElementsByClassName("hiddenInfo")[7].style.display = "none";
        methods[7].krav = false;
    }
}

methods[8].metode.onclick = function () {
    if (methods[8].bank == false) {
        document.getElementsByClassName("hiddenInfo")[8].style.display = "block"
        document.getElementsByClassName("hiddenInfo")[8].style.cursor = "default"
        methods[8].bank = true;
    } else {
        document.getElementsByClassName("hiddenInfo")[8].style.display = "none";
        methods[8].bank = false;
    }
}