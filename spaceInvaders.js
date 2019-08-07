let defense    
let color;
let color2;
let color3;
let color4;
let color5;
let color6;
let xPos = 500
let yPos = 500
let module = [
    {xPos: 20, 
     yPos: 80
},  {xPos: 130,
     yPos: 80
},  {xPos: 230,
     yPos: 80
 }, {xPos: 300,
    yPos: 400 
}, {xPos:300,
    yPos:400,
    colorOfBullet:"black"
}, {xPos: 330,
    yPos: 80
},  {xPos:430,
    yPos: 80,}


]
function setup(){
    createCanvas(600,600)
    background('black')
    color = "green";
    color2 = "green";
    color3 = "green";
    color4 = "green";
    color5 = "green";
    color6 = "white";
}

function alien(xPos, yPos, colorN){
    fill(colorN)
    rect(xPos, yPos, 30, 30)
}
// function keyIsDown(){
//     if (keyCode === LEFT_ARROW){
//         module[3].xPos -= 25
//     }
//     else if (keyCode === RIGHT_ARROW){
//         module[3].xPos += 25
//     }
//     else if (keyCode === Space_Bar){
//         module[4].yPos += 30


//     }
// }
function player(xPos, yPos, colorN){
    fill(colorN)
    rect(xPos, yPos, 30, 30)
}
function bullet(xPos, yPos, colorN){
    fill(colorN)
    rect(xPos, yPos, 30, 30)
}
function draw(){
    background(0,0,0)
    alien(20,80, color)
    alien(130, 80, color2)
    alien(230, 80, color3)
    alien(330, 80, color4)
    alien(430, 80, color5)
    bullet(module[4].xPos, module[4].yPos, module[4].colorOfBullet)
    player(module[3].xPos, module[3].yPos, color6)

    // let d1 = int(dist(mo)
    
    if (keyIsDown(LEFT_ARROW)){
        module[3].xPos -= 10
        module[4].xPos -= 10
    }
    if (keyIsDown(RIGHT_ARROW)){
        module[3].xPos += 10
        module[4].xPos += 10
    }
    if (keyIsDown(UP_ARROW)){
        module[3].yPos -= 10 
        module[4].yPos -= 10 
    }
    if (keyIsDown(DOWN_ARROW)){
        module[3].yPos += 10
        module[4].yPos += 10
    }
    if (keyIsDown(SHIFT)){
        color = "black"        
    }
    if (keyIsDown(ESCAPE)){
        color4 = "black"
    }
    if (keyIsDown(DELETE)){
        color3 = "black"
    }
    if (keyIsDown(BACKSPACE)){
        color2 = "black"
    }
    if (keyIsDown(ENTER)){
        color5 = "black"
    }
    // keyIsPressed(ENTER){
    //     module[4].colorOfBullet = "yellow"
    //     module[4].yPos -= 200
    //     module[4].colorOfBullet = "white"
    //     module[4].yPos += 200
    

    //  if (xPos < 40 || xPos > 578){
    //      xPos = -xPos;
    // }
    
    // if (yPos < 40 || yPos > 578){
    //     yPos = -yPos;
    // }

    // xPos += xPos;
    // yPos += yPos;  
}

// function keyIsPressed(){
//     if (keyCode === ENTER) 
//     module[4].colorOfBullet = "yellow"
//     module[4].yPos -= 200
// }