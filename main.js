"use strict";

function createAnArtist(firstname, lastname, age, etnicity, gender) {
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
            artists.splice(i, 1);
            return;
        }
    }
}

function getArtistByFirstName(artists, firstname){
    let artistByFirstName = [];

    for (let artist of artists){
        if (artist.firstname.toLowerCase() == firstname.toLowerCase()) {
            artistByFirstName.push(artist);
        }
    }
    return artistByFirstName;
}

function getArtistsByLastName(artists, lastname) {
    let artistByLastName = [];

    for (let artist of artists) {
        if (artist.lastname.toLowerCase() == lastname.toLowerCase()) {
            artistByLastName.push(artist);
        }
    }
    return artistByLastName;
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

function getArtistsByEtnicity(artists, etnicity){
    let artistByEtnicity = [];
    for (let artist of artists){
        if (artist.etnicity.toLowerCase()== etnicity.toLowerCase()){
            artistByEtnicity.push(artist);
        }
    }
    return artistByEtnicity;
}

function getArtistsByGender(artists, gender){
    let artistByGender = [];
    for (let artist of artists){
        if (artist.gender.toLowerCase() == gender.toLowerCase()){
            artistByGender.push(artist);
        }
    }
    return artistByGender;
}

function placeArtist(artist) {
    let div = document.createElement("div");
    div.classList.add("artist");
    div.id = artist.id;

    div.innerHTML = `
        <div>${artist.firstname}</div>
        <div>${artist.lastname}</div>
        <div>${artist.age}</div>
        <div>${artist.etnicity}</div>
        <div>${artist.firstname}</div>
        <div>${artist.gender}</div>
        <button type="button">Erase</buttton>
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

    setEraseArtistControllers ();
}

function addNewArtistSubmit(event){
    event.preventDefault();
    let firstname = document.getElementById("firstname").value;
    let lastname = document.getElementById("lastname").value;
    let age = Number(document.getElementById("age").value);
    let etnicity = document.getElementById("etnicity").value;
    let gender = document.getElementById("gender").value;

    let artist = createNewArtist(firstname, lastname, age, etnicity, gender);
    
    artist.id = chart[chart.length - 1].id + 1;

    addNewArtistToChart(chart, artist)
    placeArtists(chart);

    let form = document.getElementById("addArtistForm");
    form.reset();
}

function setAddArtistControllers (){
    let form = document.getElementById("addArtistForm");
    form.addEventListener("submit", addNewArtistSubmit);
}

function onEraseArtistClick(event){
    let button = event.target;
    let id = button.parentElement.id;
    eraseArtistById(chart, id);
    placeArtists(chart);
}

function setEraseArtistControllers(){
    let buttons = document.querySelectorAll("artist button");

    for (let button of buttons){
        button.addEventListener("click", onEraseArtistClick);
    }
}

function onFilterByEtnicity(event){
    event.preventDefault();
    let etnicity = document.getElementById("filterEtnicity").value;
    let artists = getArtistsByEtnicity(chart, etnicity);
    placeArtist(artists);
}

function onFilterByGender(event){
    event.preventDefault();
    let gender = document.getElementById("filterGender").value;
    let artists = getArtistsByGender(chart, gender);
    placeArtist(artists);
}

