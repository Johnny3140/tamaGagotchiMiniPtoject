// alert('test')
//123
const tamagotchi = {
    name: "Tamagotchi",
    hunger: 20,
    happiness: 20,
    sleepiness: 20,
    age: 0,
};
let currentStage = "egg"; // Initialize the current stage as "egg"

function evolve() {
    if (tamagotchi.age === 0) {
        currentStage = "egg";
        
    } else if (tamagotchi.age >= 3 && tamagotchi.age < 6) {
        currentStage = "child";
        
    } else if (tamagotchi.age >= 6) {
        currentStage = "teen";
    }

    // Hide all stages first
    document.getElementById("egg").style.display = "none";
    document.getElementById("child").style.display = "none";
    document.getElementById("teen").style.display = "none";

    // Display the current stage
    document.getElementById(currentStage).style.display = "inline";
}


// Call the evolve function initially to set the correct stage
evolve();

function updateAge() {
    tamagotchi.age++; // Increment the age
    document.getElementById("age").textContent = tamagotchi.age; // Update the displayed age
    document.getElementById("age").textContent = tamagotchi.age;
   evolve();
   updateStatus();
}
const ageInterval = setInterval(updateAge, 5000);
    let isSleeping = false;
function updateStatus() {
    document.getElementById("name").textContent = tamagotchi.name;
    document.getElementById("hunger").textContent = tamagotchi.hunger;
    document.getElementById("happiness").textContent = tamagotchi.happiness;
    document.getElementById("sleepiness").textContent = tamagotchi.sleepiness;
    document.getElementById('age').textContent = tamagotchi.age
}
function checkEndGame() {
    if (tamagotchi.hunger <= 0 || tamagotchi.happiness <= 0 || tamagotchi.sleepiness <= 0) {
        alert(` ${petName} has died R.I.P!`);
       
    }
}
function toggleSleep(){
    isSleeping = !isSleeping;
    const body = document.body;
    if (isSleeping){
        body.classList.add("gradient-background");
    }else{
        body.classList.remove("gradient-background");
    }
    
    updateStatus();
}

function feed() {
    tamagotchi.hunger += 10;
    if (tamagotchi.hunger > 100) {
        tamagotchi.hunger = 100;
    }
    if (tamagotchi.happiness > 100){
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
const decreaseInterval = 4000; 
function decreaseLevels() {
    // Decrease food, sleep, and boredom levels
    tamagotchi.hunger -= 2;
    tamagotchi.sleepiness -= 2;
    tamagotchi.happiness -= 2;

    // Ensure attribute levels stay within valid ranges
    if (tamagotchi.hunger < 0) {
        tamagotchi.hunger = 0;
    }
    if (tamagotchi.sleepiness < 0) {
        tamagotchi.sleepiness = 0;
    }
    if (tamagotchi.happiness < 0) {
        tamagotchi.happiness = 0;
    }
    // Update the status display
    updateStatus();
}

// Set up the interval to decrease levels 
setInterval(decreaseLevels, decreaseInterval);


let petName = 'Tamagotchi';
petName = prompt("Enter a name for your pet to begin playing")
tamagotchi.name = petName;
document.getElementById("name").textContent = tamagotchi.name;

document.getElementById("feed").addEventListener("click", feed);
document.getElementById("play").addEventListener("click", play);
document.getElementById("sleep").addEventListener("click", sleep);
document.getElementById('sleep').addEventListener("click", toggleSleep)
// updateStatus();
