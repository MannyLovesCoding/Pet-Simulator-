let clicks = 0;
let coins = 0;
let currentPet = 'cat';
let level = 1;
let clickBoost = 1;
function addClick() { // Adds Clicks via click
    console.log('Added Click');
    clicks = clicks + clickBoost;
    console.log(clicks);
    const clicksElement = document.getElementById('clicks');
    clicksElement.innerHTML = clicks; 
}

function sellClicks() {  // Adds coins by selling clicks [10 clicks = 1 coin]
    console.log('Selling Clicks');
    const coinsElement = document.getElementById('coins');
    coins = coins + (clicks * 10);
    console.log(coins);
    clicks = 0;
    const clicksElement = document.getElementById('clicks'); // This and the one below change back the stats of the clicks to 0 once you sell
    clicksElement.innerHTML = 0;
    coinsElement.innerHTML = coins;
}

function changeSize1() { // Affects img when you hover over it
    document.getElementById("pet-img").style.height = "235px";
    document.getElementById("pet-img").style.marginBottom = "10px";
  }

  function changeSize2() { // Affects img when you hover over it
    document.getElementById("pet-img").style.height = "250px";
    document.getElementById("pet-img").style.marginBottom = "0px";
  }

// Next adds levels + shop + mystery box
// create a function that accepts to parameters . a img and a text for the pet if they buy it ex function buyItem('itemName', 'imgLink')

function buyPet(petName, imgLink, price) {
    if (petName == 'monkey') {
        if (coins >= price && currentPet != petName) {
            level += 1;
            clickBoost = 2;
            console.log('Bought Monkey');
            currentPet = 'monkey';
            const petImg = document.getElementById("pet-img");
            const nameOfPet = document.getElementById('petName');
            coins -= price;
            document.getElementById('coins').innerHTML = coins;
            petImg.src = imgLink;
            nameOfPet.innerHTML = petName;
        } else {
            alert('Not enough coins or you are already using this pet!');
        } 
    } else if (petName == 'unicorn') {
        if (coins >= price && currentPet != petName) {
            level += 1;
            clickBoost = 4;
            console.log('Bought Unicorn');
            currentPet = 'unicorn';
            const petImg = document.getElementById("pet-img");
            const nameOfPet = document.getElementById('petName');
            coins -= price;
            document.getElementById('coins').innerHTML = coins;
            petImg.src = imgLink;
            nameOfPet.innerHTML = petName;
        } else {
            alert('Not enough coins or you already own this pet!');
        } 
    }  else if (petName == 'eagle') {
        if (coins >= price && currentPet != petName) {
            level += 1;
            clickBoost = 8;
            console.log('Bought Eagle');
            currentPet = 'eagle';
            const petImg = document.getElementById("pet-img");
            const nameOfPet = document.getElementById('petName');
            coins -= price;
            document.getElementById('coins').innerHTML = coins;
            petImg.src = imgLink;
            nameOfPet.innerHTML = petName;
        } else {
            alert('Not enough coins or you already own this pet!');
        } 
    }  else if (petName == 'bat') {
        if (coins >= price && currentPet != petName) {
            level += 1;
            clickBoost = 16;
            console.log('Bought bat');
            currentPet = 'bat';
            const petImg = document.getElementById("pet-img");
            const nameOfPet = document.getElementById('petName');
            coins -= price;
            document.getElementById('coins').innerHTML = coins;
            petImg.src = imgLink;
            nameOfPet.innerHTML = petName;
        } else {
            alert('Not enough coins or you already own this pet!');
        } 
    } else if (petName == 'grim repear') {
        if (coins >= price && currentPet != petName) {
            level += 1;
            clickBoost = 32;
            console.log('Bought bat');
            currentPet = 'grim repear';
            const petImg = document.getElementById("pet-img");
            const nameOfPet = document.getElementById('petName');
            coins -= price;
            document.getElementById('coins').innerHTML = coins;
            petImg.src = imgLink;
            nameOfPet.innerHTML = petName;
        } else {
            alert('Not enough coins or you already own this pet!');
        } 
    }   
    else if (petName == 'phoenix') {
        if (coins >= price && currentPet != petName) {
            level += 1;
            clickBoost = 12;
            console.log('Bought phoenix');
            currentPet = 'phoenix';
            const petImg = document.getElementById("pet-img");
            const nameOfPet = document.getElementById('petName');
            coins -= price;
            document.getElementById('coins').innerHTML = coins;
            petImg.src = imgLink;
            nameOfPet.innerHTML = petName;
        } else {
            alert('Not enough coins or you already own this pet!');
        } 
    } 
}

function showShop() {
    if (document.getElementById('shop-container2').style.visibility == 'hidden') {
        document.getElementById('shop-container2').style.visibility = 'visible';
    } else {
        document.getElementById('shop-container2').style.visibility = 'hidden';
    }
}

function showMysteryBox() {
    if (document.getElementById('mystery-box-container3').style.visibility == 'hidden') {
        document.getElementById('mystery-box-container3').style.visibility = 'visible';
    } else {
        document.getElementById('mystery-box-container3').style.visibility = 'hidden';
    } 
}

// Add not enough coins message that u can exit + add click boost + mystery box

function buyMysteryBox() {

    if (coins >= 1000000) {
        coins -= 1000000;
        document.getElementById('coins').innerHTML = coins;
        const randomNumber = Math.ceil(Math.random() * 100); // random number
        console.log(randomNumber);
    
        if (randomNumber == 1 || randomNumber == 2 || randomNumber == 3 || randomNumber == 4 || randomNumber == 5 ) { // 5% 
            currentPet = 'Dark Matter';
            clickBoost = 264;
            console.log('You Got Dark Matter!');
            const petImg = document.getElementById("pet-img");
            const nameOfPet = document.getElementById('petName');
            petImg.src = './resources/imgs/pets/dark-matter-pet.png';
            nameOfPet.innerHTML = 'Dark Matter';
        } else {
            currentPet = 'Ice Cube';
            clickBoost = 64;
            console.log('You Got Ice Cube!');
            const petImg = document.getElementById("pet-img");
            const nameOfPet = document.getElementById('petName');
            petImg.src = './resources/imgs/pets/ice-cube-pet.png';
            nameOfPet.innerHTML = 'Ice Cube';
        }
    } else {
        alert(`You don't have enough coins!`);
    }
}

// Now just add click mulitplier

function changeBackgroundColor() {
    console.log('Changing Colour')
    const newColor = document.getElementById('newBackgroundColor').value;
    document.body.style.backgroundColor = newColor;

    document.getElementById('settings-container2').style.visibility = 'hidden';
}   

function showSettings() {
    if (document.getElementById('settings-container2').style.visibility == 'hidden') {
        document.getElementById('settings-container2').style.visibility = 'visible';
    } else {
        document.getElementById('settings-container2').style.visibility = 'hidden';
    } 
}