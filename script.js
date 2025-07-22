let home = document.getElementById("markhome")
let guest = document.getElementById("markguest")
let homemarkdiv = document.getElementById("markh")
let guestmarkdiv = document.getElementById("markg")


let add = 0
let add_guest = 0

function plus1h() {

    add++
    home.innerHTML = add
    homemarkdiv.style.border = "none"
    guestmarkdiv.style.border = "none"
    if (add > add_guest) {
        homemarkdiv.style.border = "3px solid #F94F6D"

    }
    else if (add === add_guest) {
        homemarkdiv.style.border = "3px solid #F94F6D"
        guestmarkdiv.style.border = "3px solid #F94F6D"
    }
    else {
        guestmarkdiv.style.border = "3px solid #F94F6D"
    }


}

function plus2h() {

    add += 2
    home.innerHTML = add;
    homemarkdiv.style.border = "none"
    guestmarkdiv.style.border = "none"
    if (add > add_guest) {
        homemarkdiv.style.border = "3px solid #F94F6D"

    }
    else if (add === add_guest) {
        homemarkdiv.style.border = "3px solid #F94F6D"
        guestmarkdiv.style.border = "3px solid #F94F6D"
    }
    else {
        guestmarkdiv.style.border = "3px solid #F94F6D"
    }

}

function plus3h() {

    add += 3
    home.innerHTML = add;
    homemarkdiv.style.border = "none"
    guestmarkdiv.style.border = "none"
    if (add > add_guest) {
        homemarkdiv.style.border = "3px solid #F94F6D"

    }
    else if (add === add_guest) {
        homemarkdiv.style.border = "3px solid #F94F6D"
        guestmarkdiv.style.border = "3px solid #F94F6D"
    }
    else {
        guestmarkdiv.style.border = "3px solid #F94F6D"
    }

}

function plus1g() {

    add_guest++
    guest.innerHTML = add_guest;
    homemarkdiv.style.border = "none"
    guestmarkdiv.style.border = "none"
    if (add > add_guest) {
        homemarkdiv.style.border = "3px solid #F94F6D"

    }
    else if (add === add_guest) {
        homemarkdiv.style.border = "3px solid #F94F6D"
        guestmarkdiv.style.border = "3px solid #F94F6D"
    }
    else {
        guestmarkdiv.style.border = "3px solid #F94F6D"
    }

}

function plus2g() {

    add_guest += 2
    guest.innerHTML = add_guest;
    homemarkdiv.style.border = "none"
    guestmarkdiv.style.border = "none"
    if (add > add_guest) {
        homemarkdiv.style.border = "3px solid #F94F6D"

    }
    else if (add === add_guest) {
        homemarkdiv.style.border = "3px solid #F94F6D"
        guestmarkdiv.style.border = "3px solid #F94F6D"
    }
    else {
        guestmarkdiv.style.border = "3px solid #F94F6D"
    }

}

function plus3g() {

    add_guest += 3
    guest.innerHTML = add_guest;
    homemarkdiv.style.border = "none"
    guestmarkdiv.style.border = "none"
    if (add > add_guest) {
        homemarkdiv.style.border = "3px solid #F94F6D"

    }
    else if (add === add_guest) {
        homemarkdiv.style.border = "3px solid #F94F6D"
        guestmarkdiv.style.border = "3px solid #F94F6D"
    }
    else {
        guestmarkdiv.style.border = "3px solid #F94F6D"
    }

}


function newgamehome() {
    add = 0
    home.innerText = 0
    homemarkdiv.style.border = "none"
    guestmarkdiv.style.border = "none"
}

function newgameguest() {
    add_guest = 0
    guest.innerText = 0
    homemarkdiv.style.border = "none"
    guestmarkdiv.style.border = "none"
}




