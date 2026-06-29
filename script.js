function startSimulation() {
    // Get the values from the input boxes
    const size = document.getElementById('size').value;
    const intensity = document.getElementById('intensity').value;

    // Basic logic to show what is happening
    alert("Simulation Started!\n\nTornado Size: " + size + " yards\nWind Speed: " + intensity + " mph\n\nDestruction in progress...");

    // You can add your actual game simulation code here later!
    console.log("Tornado initialized with size: " + size + " and speed: " + intensity);
}
