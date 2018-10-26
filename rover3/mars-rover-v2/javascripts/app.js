var rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: [],
};


function turnRight(rover){
  console.log("turnRight was called!");
  switch (rover.direction){
    case "N":
      rover.direction = "E"
    break;
    case "E":
      rover.direction = "S"
    break;
    case "S":
      rover.direction = "W"
    break;
    case "W":
      rover.direction = "N"
    break;
  }
  console.log(rover.direction);
}

function turnLeft(rover){
  console.log("turnLeft was called!");
  switch (rover.direction){
    case "N":
      rover.direction = "W"
    break;
    case "W":
      rover.direction = "S"
    break;
    case "S":
      rover.direction = "E"
    break;
    case "E":
      rover.direction = "N"
    break;
  }
  console.log(rover.direction);
}

function moveForward(rover){
  console.log("moveForward was called");
  switch (rover.direction){
    case "N":
      rover.y--
    break;
    case "E":
      rover.x++
    break;
    case "S":
      rover.y++
    break;
    case "W":
      rover.x--
    break;
  }
  console.log("x " + rover.x + " y "+ rover.y);
}

function moveBackward(rover){
  console.log("moveBackward was called");
  switch (rover.direction){
    case "N":
      rover.y++
    break;
    case "E":
      rover.x--
    break;
    case "S":
      rover.y--
    break;
    case "W":
      rover.x++
    break;
  }
  console.log("x " + rover.x + " y "+ rover.y);
}

function movement(command){
  for(var i = 0;  i < command.length; i++){  
    switch(command[i]){
      case "f":
        moveForward(rover);
        if (rover.y < 0 || rover.y > 10 || rover.x < 0 || rover.x > 10){
          console.log("Out of the map");
          moveBackward(rover);
        }
        rover.travelLog.push("x " + rover.x + " y "+ rover.y);
      break;
      case "b":
        moveBackward(rover);
        if (rover.y < 0 || rover.y > 10 || rover.x < 0 || rover.x > 10){
          console.log("Out of the map");
          moveForward(rover);
        }
        rover.travelLog.push("x " + rover.x + " y "+ rover.y);
        break;
      case "r":
        turnRight(rover)
      break;
      case "l":
        turnLeft(rover)
      break;
      default:
        console.log("Wrong command")
      break;
    }
  }
}


var command = "fr";


movement(command);
console.log(rover.travelLog);

