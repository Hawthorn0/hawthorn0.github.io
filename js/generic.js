function generateNav() {
    const container = document.getElementById("nav-gen");
    container.innerHTML = "";

    const anchor = document.createElement("a");
    anchor.href = "index.html";
    const img = document.createElement("img");
    img.src = "assets/images/ClickLogo.png";
    img.alt = "Click Logo";
    anchor.appendChild(img);

    const buttonMusic = document.createElement("button");
    buttonMusic.textContent = "Music";
    buttonMusic.onclick = function() {
        location.href = "music.html";
    };

    const buttonGames = document.createElement("button");
    buttonGames.textContent = "Games";
    buttonGames.onclick = function() {
        location.href = "games.html";
    };


    container.appendChild(anchor);
    container.appendChild(buttonMusic);
    container.appendChild(buttonGames);
}

function generateFooter() {
    const container = document.getElementById("footer-gen");
    container.innerHTML = "";


    const buttonSpotify = document.createElement("button");
    buttonSpotify.textContent = "Spotify";
    buttonSpotify.onclick = function() {
        location.href = "https://open.spotify.com/artist/6APZX6QDxzhzeEs4Ln8Ook";
    };

    const buttonYoutube = document.createElement("button");
    buttonYoutube.textContent = "Youtube";
    buttonYoutube.onclick = function() {
        location.href = "https://www.youtube.com/channel/UC0kbKFTcjRdmQpHfL6n8FRQ";
    };

    const buttonLinkedIn = document.createElement("button");
    buttonLinkedIn.textContent = "LinkedIn";
    buttonLinkedIn.onclick = function() {
        location.href = "https://www.linkedin.com/in/hawthorn-wood-652393347/";
    };

    container.appendChild(buttonSpotify);
}

window.addEventListener("load", function () {
    generateNav();
    generateFooter();
});