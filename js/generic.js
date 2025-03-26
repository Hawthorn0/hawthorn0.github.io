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

window.addEventListener("load", function () {
    generateNav();
});