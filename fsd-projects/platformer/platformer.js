$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(100,200,130,12);
createPlatform(200,500,220,9);
createPlatform(650,370,300,15);
createPlatform(470,630,170,19);
createPlatform(525,400,90,5);
createPlatform(1100,400,150,20);
createPlatform(350,300,140,16);
createPlatform(900,500,125,14);
createPlatform(400,150,145,16);
createPlatform(700,200,125,15)
createPlatform(1050,200,230,12)
// TODO 3 - Create Collectables
createCollectable("database",950,450);
createCollectable("database",150,150);
createCollectable("database",1250,150)
createCollectable("database",1350,280)
    // TODO 4 - Create Cannons
createCannon("top",340,900);
    createCannon("bottom",750,900);
    createCannon("top",1150,900);
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
