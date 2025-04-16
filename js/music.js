const mp3Files = [
    { 
        title: "Lotus", 
        file: "assets/songs/Lotus.mp3", 
        tags: ["rock", "energetic", "epic", "bossfight", "my favorites"] 
    },
    { 
        title: "Seaboss", 
        file: "assets/songs/seaboss.mp3", 
        tags: ["electronic", "energetic", "epic", "fantasy", "bossfight", "watery", "my favorites"] 
    },
    { 
        title: "Wavezone", 
        file: "assets/songs/Wavezone.mp3", 
        tags: ["electronic", "spacey", "icy", "my favorites"] 
    },
    { 
        title: "Stalactite", 
        file: "assets/songs/Stalactite.mp3", 
        tags: ["chill", "upbeat", "cavey", "my favorites"] 
    },
    { 
        title: "Mirage", 
        file: "assets/songs/Mirage.mp3", 
        tags: ["fantasy", "deserty", "my favorites"] 
    },
    { 
        title: "Fresh Beginnings", 
        file: "assets/songs/Fresh Beginnings.mp3", 
        tags: ["upbeat", "fantasy", "grassy", "my favorites"] 
    },
    { 
        title: "Building Time", 
        file: "assets/songs/Building Time.mp3", 
        tags: ["chill", "upbeat", "grassy", "foresty", "deserty"] 
    },
    { 
        title: "Iceflow", 
        file: "assets/songs/Iceflow.mp3", 
        tags: ["chill", "icy"] 
    },
    { 
        title: "Icy Winds", 
        file: "assets/songs/Icy Winds.mp3", 
        tags: ["icy"] 
    },
    { 
        title: "Thing 24", 
        file: "assets/songs/thing24.mp3", 
        tags: ["electronic", "energetic", "strange", "my favorites"] 
    },
    { 
        title: "String Warfare", 
        file: "assets/songs/String Warfare.mp3", 
        tags: ["energetic", "epic", "fantasy", "bossfight", "my favorites"] 
    },
    { 
        title: "Electrostasis", 
        file: "assets/songs/Electrostasis.mp3", 
        tags: ["electronic", "energetic", "spacey"] 
    },
    { 
        title: "Scorched", 
        file: "assets/songs/Scorched.mp3", 
        tags: ["deserty", "bossfight", "my favorites"] 
    },
    { 
        title: "Autumn Waltz", 
        file: "assets/songs/Autumn Waltz.mp3", 
        tags: ["upbeat", "waltz", "my favorites"] 
    },
    { 
        title: "Outerstellar", 
        file: "assets/songs/Outerstellar.mp3", 
        tags: ["chill", "epic", "spacey", "my favorites"] 
    },
    { 
        title: "Mirror Cemetery", 
        file: "assets/songs/Mirror Cemetery.mp3", 
        tags: ["electronic", "scary"] 
    },
    { 
        title: "Fire", 
        file: "assets/songs/fire.mp3", 
        tags: ["electronic", "energetic", "upbeat"] 
    },
    { 
        title: "Broken Road", 
        file: "assets/songs/Broken_Road.mp3", 
        tags: ["electronic", "vocal"] 
    },
    { 
        title: "Dubstep Trial", 
        file: "assets/songs/dubsteptrial.mp3", 
        tags: ["electronic", "energetic"] 
    },
    { 
        title: "Screamer", 
        file: "assets/songs/screamer.mp3", 
        tags: ["electronic", "scary"] 
    },
    { 
        title: "Fever Dream", 
        file: "assets/songs/fever dream.mp3", 
        tags: ["chill", "strange"] 
    },
    { 
        title: "Mushroom Village", 
        file: "assets/songs/Mushroom Village.mp3", 
        tags: ["chill", "silly", "fantasy", "foresty", "my favorites"] 
    },
    { 
        title: "Upstairs", 
        file: "assets/songs/Upstairs.mp3", 
        tags: ["rock", "vocal", "silly"] 
    },
    { 
        title: "Silly Cat Song", 
        file: "assets/songs/silly cat song.mp3", 
        tags: ["electronic", "retro", "upbeat", "silly", "grassy", "my favorites"] 
    },
    { 
        title: "Vocality", 
        file: "assets/songs/vocality.mp3", 
        tags: ["vocal", "epic", "fantasy", "foresty"] 
    },
    { 
        title: "Lost in Space", 
        file: "assets/songs/Lost in Space.mp3", 
        tags: ["electronic", "chill", "spacy"] 
    },
    { 
        title: "Sad Story", 
        file: "assets/songs/Sad Story.mp3", 
        tags: ["chill", "sad", "icy", "spacey"] 
    },
    { 
        title: "8-Bit Caveman", 
        file: "assets/songs/8bit caveman.mp3", 
        tags: ["electronic", "retro"] 
    },
    { 
        title: "Arctic Winds", 
        file: "assets/songs/Arctic Winds.mp3", 
        tags: ["chill", "icy"] 
    },
    { 
        title: "Articos", 
        file: "assets/songs/Articos.mp3", 
        tags: ["chill", "ambient", "icy"] 
    },
    { 
        title: "Bit Waltz", 
        file: "assets/songs/Bit Waltz.mp3", 
        tags: ["retro", "chill", "waltz"] 
    },
    { 
        title: "Christmas Level", 
        file: "assets/songs/Christmas Level.mp3", 
        tags: ["energetic", "icy", "upbeat"] 
    },
    { 
        title: "Cornered", 
        file: "assets/songs/Cornered.mp3", 
        tags: ["ambient", "scary"] 
    },
    { 
        title: "Drone", 
        file: "assets/songs/drone.mp3", 
        tags: ["ambient", "scary"] 
    },
    { 
        title: "Ethereal Sands", 
        file: "assets/songs/Ethereal Sands.mp3", 
        tags: ["chill"] 
    },
    { 
        title: "Eurobeat Attempt", 
        file: "assets/songs/Eurobeat Attempt.mp3", 
        tags: ["electronic", "upbeat"] 
    },
    { 
        title: "Evolution", 
        file: "assets/songs/Evolution.mp3", 
        tags: ["electronic", "chill", "strange"] 
    },
    { 
        title: "Fear", 
        file: "assets/songs/Fear.mp3", 
        tags: ["ambient", "scary"] 
    },
    { 
        title: "Piano with Velocity", 
        file: "assets/songs/GrandPianoWithVelocity.mp3", 
        tags: ["epic"] 
    },
    { 
        title: "Guitar Doodling 7", 
        file: "assets/songs/Guitar Doodling 7.mp3", 
        tags: ["rock", "energetic"] 
    },
    { 
        title: "Heaven Boss", 
        file: "assets/songs/Heaven Boss.mp3", 
        tags: ["energetic", "epic", "bossfight"] 
    },
    { 
        title: "Heavenly Randomness", 
        file: "assets/songs/Heavenly Randomness.mp3", 
        tags: ["energetic"] 
    },
    { 
        title: "Irish 2", 
        file: "assets/songs/irish2.mp3", 
        tags: ["fantasy", "grassy"] 
    },
    { 
        title: "Lofi Test 3", 
        file: "assets/songs/LofiTest3.mp3", 
        tags: ["electronic", "chill"] 
    },
    { 
        title: "Mood Reel Test 2", 
        file: "assets/songs/mood reel test 2.mp3", 
        tags: ["electronic", "chill", "ambient"] 
    },
    { 
        title: "Old Synth", 
        file: "assets/songs/OldSynth.mp3", 
        tags: ["electronic", "retro", "chill"] 
    },
    { 
        title: "One Dollar One Cent", 
        file: "assets/songs/One Dollar One Cent.mp3", 
        tags: ["electronic", "chill", "cavey"] 
    },
    { 
        title: "Overdrive", 
        file: "assets/songs/overdrive.mp3", 
        tags: ["electronic", "energetic"] 
    },
    { 
        title: "Overgrown Heart", 
        file: "assets/songs/Overgrown Heart.mp3", 
        tags: ["chill", "upbeat", "grassy", "foresty"] 
    },
    { 
        title: "Phase Step", 
        file: "assets/songs/Phase Step.mp3", 
        tags: ["electronic", "energetic"] 
    },
    { 
        title: "Pizza", 
        file: "assets/songs/pizza.mp3", 
        tags: ["electronic", "energetic"] 
    },
    { 
        title: "Place Space", 
        file: "assets/songs/Place Space.mp3", 
        tags: ["electronic", "vocal"] 
    },
    { 
        title: "Pop and Earth", 
        file: "assets/songs/Pop and Earth.mp3", 
        tags: ["upbeat"] 
    },
    { 
        title: "Potential Desert", 
        file: "assets/songs/potential desert.mp3", 
        tags: ["deserty"] 
    },
    { 
        title: "Purple City", 
        file: "assets/songs/Purple City.mp3", 
        tags: ["electronic", "chill"] 
    },
    { 
        title: "Raiser", 
        file: "assets/songs/Raiser.mp3", 
        tags: ["electronic", "energetic", "scary"] 
    },
    { 
        title: "Reverberance", 
        file: "assets/songs/Reverberance one week.mp3", 
        tags: ["electronic", "epic", "foresty", "cavey"] 
    },
    { 
        title: "Rune Run", 
        file: "assets/songs/Rune Run.mp3", 
        tags: ["electronic", "retro", "energetic", "upbeat", "cavey"] 
    },
    { 
        title: "A Symbol of Flame", 
        file: "assets/songs/SAB-MOD A Symbol of Flame.mp3", 
        tags: ["energetic", "epic", "fantasy", "bossfight"] 
    },
    { 
        title: "HW Song 2", 
        file: "assets/songs/School HW Song 2.mp3", 
        tags: ["electronic", "energetic", "upbeat", "strange"] 
    },
    { 
        title: "Seashore", 
        file: "assets/songs/seashore.mp3", 
        tags: ["chill", "watery"] 
    },
    { 
        title: "Sequence Vocal", 
        file: "assets/songs/sequencevocal.mp3", 
        tags: ["electronic", "chill", "strange", "foresty"] 
    },
    // { 
    //     title: "Simmer", 
    //     file: "assets/songs/Simmer.mp3", 
    //     tags: ["rock", "energetic"] 
    // },
    { 
        title: "Slow Burn", 
        file: "assets/songs/SlowBurn.mp3", 
        tags: ["scary", "sad"] 
    },
    { 
        title: "Snow Boss", 
        file: "assets/songs/SnowBoss.mp3", 
        tags: ["electronic", "energetic", "bossfight", "icy"] 
    },
    { 
        title: "Space", 
        file: "assets/songs/space.mp3", 
        tags: ["electronic", "upbeat", "spacey"] 
    },
    { 
        title: "Spacial Tear", 
        file: "assets/songs/Spacial Tear.mp3", 
        tags: ["electronic", "energetic"] 
    },
    { 
        title: "Sparkle", 
        file: "assets/songs/Sparkle.mp3", 
        tags: ["electronic", "upbeat", "spacey"] 
    },
    { 
        title: "Static Wave", 
        file: "assets/songs/Static Wave.mp3", 
        tags: ["electronic", "energetic", "upbeat"] 
    },
    { 
        title: "Thing 5", 
        file: "assets/songs/thing5.mp3", 
        tags: ["electronic", "energetic"] 
    },
    { 
        title: "Thing 11", 
        file: "assets/songs/thing11.mp3", 
        tags: ["electronic", "energetic", "deserty"] 
    },
    { 
        title: "Thing 17", 
        file: "assets/songs/thing17.mp3", 
        tags: ["energetic"] 
    },
    { 
        title: "Thing 20", 
        file: "assets/songs/thing20.mp3", 
        tags: ["rock", "energetic"] 
    },
    { 
        title: "Thing 21", 
        file: "assets/songs/thing21.mp3", 
        tags: ["electronic", "energetic"] 
    },
    { 
        title: "Thing 22", 
        file: "assets/songs/thing22.mp3", 
        tags: ["electronic", "energetic", "upbeat", "strange", "epic"] 
    },
    { 
        title: "Vital Thing", 
        file: "assets/songs/vital_thing.mp3", 
        tags: ["electronic", "energetic", "upbeat"] 
    },
    { 
        title: "Voyage", 
        file: "assets/songs/Voyage.mp3", 
        tags: ["upbeat", "fantasy", "watery"] 
    },
    { 
        title: "Wacky Piano", 
        file: "assets/songs/wacky piano.mp3", 
        tags: ["energetic", "cavey"] 
    },
    { 
        title: "Winter Waltz", 
        file: "assets/songs/Winter Waltz.mp3", 
        tags: ["chill", "waltz", "icy"] 
    },
    // { 
    //     title: "Worn Energy", 
    //     file: "assets/songs/Worn Energy.mp3", 
    //     tags: ["energetic"] 
    // },
];

let tags = ["electronic", "rock", "retro", "vocal", "energetic", "chill", "upbeat", "ambient", "waltz", 
    "scary", "silly", "sad", "strange", "epic", "fantasy", "bossfight", 
    "grassy", "foresty", "icy", "cavey", "deserty", "spacey", "watery", 
    "my favorites"];

function displayTags() {
    const container = document.getElementById("tag-filters");
    container.innerHTML = "";

    for (let i = 0; i < tags.length; i++) {
        const label = document.createElement("label");
        const input = document.createElement("input");
        input.type = "checkbox"; 
        input.value = tags[i];

        label.appendChild(input);
        label.appendChild(document.createTextNode(String(tags[i]).charAt(0).toUpperCase() + String(tags[i]).slice(1)));
                
        container.appendChild(label);
    }
}

function displayMP3Files(files) {
    const container = document.getElementById("mp3-container");
    container.innerHTML = "";

    files.forEach(mp3 => {
        const div = document.createElement("div");
        div.classList.add("mp3-item");

        const title = document.createElement("h3");
        title.textContent = mp3.title;

        const audio = document.createElement("audio");
        audio.controls = true;
        audio.src = mp3.file;

        //const tags = document.createElement("p");
        //tags.textContent = "Tags: " + mp3.tags.join(", ");

        div.appendChild(title);
        div.appendChild(audio);
        //div.appendChild(tags);
        container.appendChild(div);
    });
}

function filterMP3Files() {
    const selectedTags = [...document.querySelectorAll("#tag-filters input:checked")].map(input => input.value);
    const isExclusive = document.getElementById("filter-style").checked;

    if (selectedTags.length === 0) {
        displayMP3Files(mp3Files);
        return;
    }

    let filteredFiles;

    if (isExclusive) {
        filteredFiles = mp3Files.filter(mp3 =>
            selectedTags.every(tag => mp3.tags.includes(tag)) &&
            mp3.tags.length === selectedTags.length
        );
    } else {
        filteredFiles = mp3Files.filter(mp3 =>
            selectedTags.some(tag => mp3.tags.includes(tag))
        );
    }

    displayMP3Files(filteredFiles);
}

window.addEventListener("load", function () {
    displayMP3Files(mp3Files);
    displayTags();
});