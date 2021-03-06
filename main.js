"use strict";



//Link 2 github:
//https://github.com/claralindbloms/U2_ME132A_Clara.git

function createNewArtist(firstname, lastname, age, etnicity, gender) {
    let artist = {
        firstname: firstname,
        lastname: lastname,
        age: age,
        etnicity: etnicity,
        gender: gender,
    };

    return artist;
}

function addNewArtistToChart(chart, artist) {
    chart.push(artist);
}

function eraseArtistById(artists, id) {
    for (let i = 0; i < artists.length; i++) {
        let artist = artists[i];
        if (artist.id == id) {
            let confirmArtist = confirm(`Are you sure you want to erase ${artist.firstname} ${artist.lastname}?`);
            if (confirmArtist) {
                artists.splice(i, 1);
                return;
            }
        }
    }
}

function getArtistByFirstName(artists, firstname) {
    let artistByFirstName = [];

    for (let artist of artists) {
        if (artist.firstname.toLowerCase() == firstname.toLowerCase()) {
            artistByFirstName.push(artist);
        }
    }
    return artistByFirstName;
}

function getArtistsByLastName(artists, lastname) {
    let artistsByLastName = [];

    for (let artist of artists) {
        if (artist.lastname.toLowerCase() == lastname.toLowerCase()) {
            artistsByLastName.push(artist);
        }
    }
    return artistsByLastName;
}

function getArtistsByAge(artists, age) {
    let artistsByAge = [];

    for (let artist of artists) {
        if (artist.age == age) {
            artistsByAge.push(artist);
        }
    }
    return artistsByAge;
}

function getArtistsByEtnicity(artists, etnicity) {
    let artistsByEtnicity = [];
    for (let artist of artists) {
        if (artist.etnicity.toLowerCase() == etnicity.toLowerCase()) {
            artistsByEtnicity.push(artist);
        }
    }
    return artistsByEtnicity;
}

function getArtistsByGender(artists, gender) {
    let artistsByGender = [];
    for (let artist of artists) {
        if (artist.gender.toLowerCase() == gender.toLowerCase()) {
            artistsByGender.push(artist);
        }
    }
    return artistsByGender;
}

function placeArtist(artist) {
    let div = document.createElement("div");
    div.classList.add("artist");
    div.id = artist.id;

    div.innerHTML = `
        <li>${artist.firstname}</li>
        <div>${artist.lastname}</div>
        <div>${artist.age}</div>
        <div>${artist.etnicity}</div>
        <div>${artist.gender}</div>
        <button type="button">Erase</button>
    `;

    return div;
}

function placeArtists(artists) {
    let artistsElement = document.querySelector("#artists");
    artistsElement.innerHTML = "";

    for (let artist of artists) {
        let artistElement = placeArtist(artist);
        artistsElement.appendChild(artistElement);
    }

    setEraseArtistControllers();
}

function addNewArtistSubmit(event) {
    event.preventDefault();
    let firstname = document.getElementById("firstname").value;
    if (firstname == "") {
        alert("Artists firstname must be filled out");
        return false;
    }
    let lastname = document.getElementById("lastname").value;
    if (lastname == "") {
        alert("Artists lastname must be filled out");
        return false;
    }
    let age = Number(document.getElementById("age").value);
    if (age == "") {
        alert("Artists age must be filled out");
        return false;
    }
    let etnicity = document.getElementById("etnicity").value;
    if (etnicity == "") {
        alert("Artists etnicity must be filled out");
        return false;
    }
    let gender = document.getElementById("gender").value;
    if (gender == "") {
        alert("Artists gender must be filled out");
        return false;
    }

    let artist = createNewArtist(firstname, lastname, age, etnicity, gender);

    artist.id = chart[chart.length - 1].id + 1;

    addNewArtistToChart(chart, artist)
    placeArtists(chart);

    let form = document.getElementById("addArtistForm");
    form.reset();
}

function setAddArtistControllers() {
    let form = document.getElementById("addArtistForm");
    form.addEventListener("submit", addNewArtistSubmit);

}

function onEraseArtistClick(event) {
    let button = event.target;
    let id = button.parentElement.id;
    eraseArtistById(chart, id);
    placeArtists(chart);
}

function setEraseArtistControllers() {
    let buttons = document.querySelectorAll(".artist button");

    for (let button of buttons) {
        button.addEventListener("click", onEraseArtistClick);
    }
}

function onFilterByEtnicitySubmit(event) {
    event.preventDefault();
    let etnicity = document.getElementById("filterEtnicity").value;
    let artists = getArtistsByEtnicity(chart, etnicity);
    placeArtists(artists);
}

function onFilterByGenderSubmit(event) {
    event.preventDefault();
    let gender = document.getElementById("filterGender").value;
    let artists = getArtistsByGender(chart, gender);
    placeArtists(artists);
}

function onShowAllClick() {
    document.getElementById("filterEtnicity").value = "";
    document.getElementById("filterGender").value = "";
    placeArtists(chart);
}

function setFilterArtistControllers() {

    let etnicityForm = document.getElementById("filterByEtnicity");
    let genderForm = document.getElementById("filterByGender");
    let showAll = document.getElementById("showAll");

    etnicityForm.addEventListener("submit", onFilterByEtnicitySubmit);
    genderForm.addEventListener("submit", onFilterByGenderSubmit);
    showAll.addEventListener("click", onShowAllClick);
}


placeArtists(chart);
setAddArtistControllers();
setFilterArtistControllers();

