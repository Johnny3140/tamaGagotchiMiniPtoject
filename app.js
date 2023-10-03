// alert('test')

const tamagotchi = {
    name: "Tamagotchi",
    hunger: 20,
    happiness: 20,
    sleepiness: 20,


};

function updateStatus() {
    document.getElementById("name").textContent = tamagotchi.name;
    document.getElementById("hunger").textContent = tamagotchi.hunger;
    document.getElementById("happiness").textContent = tamagotchi.happiness;
    document.getElementById("sleepiness").textContent = tamagotchi.sleepiness;
}
function checkEndGame() {
    if (tamagotchi.hunger <= 0 || tamagotchi.happiness <= 0 || tamagotchi.sleepiness <= 0) {
        alert(` ${petName} has died R.I.P!`);
        // You can also reset the game or perform other actions here.
    }
}

function feed() {
    tamagotchi.hunger += 10;
  
   
    checkEndGame();
    updateStatus();
}

function play() {
    tamagotchi.happiness += 5;
    tamagotchi.hunger -= 5;
    tamagotchi.sleepiness -= 5; // Decrease sleepiness while playing

    // Ensure attributes stay within valid ranges
    if (tamagotchi.happiness > 100) {
        tamagotchi.happiness = 100;
    }
    if (tamagotchi.hunger < 0) {
        tamagotchi.hunger = 0;
    }
    if (tamagotchi.sleepiness < 0) {
        tamagotchi.sleepiness = 0;
    }
    checkEndGame();
    updateStatus();
}

function sleep() {
    tamagotchi.hunger -= 5;
    tamagotchi.happiness += 5;
    tamagotchi.sleepiness += 10; // Increase sleepiness while sleeping

    // Ensure attributes stay within valid ranges
    if (tamagotchi.hunger < 0) {
        tamagotchi.hunger = 0;
    }
    if (tamagotchi.happiness > 100) {
        tamagotchi.happiness = 100;
    }
    if (tamagotchi.sleepiness > 100) {
        tamagotchi.sleepiness = 100;
    }
    checkEndGame();
    updateStatus();
}


let petName = prompt("Enter a name for your pet:");
if(petName){
 tamagotchi.name = petName;
}

document.getElementById("feed").addEventListener("click", feed);
document.getElementById("play").addEventListener("click", play);
document.getElementById("sleep").addEventListener("click", sleep);
updateStatus();
