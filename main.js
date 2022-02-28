"use strict";

function createAnArtist (firstname, lastname, age, etnicity, gender){
    let artist = {
        firstname: firstname,
        lastname: lastname,
        age: age,
        etnicity: etnicity,
        gender: gender,
    };

    return artist;
}

function addNewArtistToChart(chart, artist){
    chart.push(artist);
}

function placeArtist (artist) {
    let artistsElement = document.querySelector("#artists");
    artistsElement.innerHTML = "";
}