function rollDice(){

    const numOfDice = document.getElementById("numOfDice").value;
    const diceResult = document.getElementById("diceResult");
    const getnumber = document.getElementById("getnumber");
    const frontimg = document.getElementById("frontimg");
    const diceImages = document.getElementById("diceImages");
    const values = [];
    const images = [];

    for(let i = 0; i < numOfDice; i++){
       const value = Math.floor(Math.random() * 231) + 1;
       values.push(value);
       images.push(`<img style="width:300px;" src="pics/${value}.jpg" alt="Image is missing!">`);

    }
    //diceResult.textContent = `dice: ${values.join(', ')}`;
    diceImages.innerHTML = images.join('');
    getnumber.style.display = "block";
    frontimg.style.display = "none";

}
