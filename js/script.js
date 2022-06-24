


const headDate= new Date();
document.getElementById('dateFloat').innerHTML='date:'+headDate
document.getElementById('dateFloat').style.fontSize='10px';
document.getElementById('dateFloat').style.color=" rgba(74, 165, 98, 0.777)"



// const demo =  new Date();
const date = new Date(2022,05,16,23,30,10)
document.getElementById('demo').innerHTML="created on: "+date;




function openMotivation() {
  document.getElementById('openMotivation').style.display = "block";
  console.log("Motivation box is opened");

}
function closeMotivation() {
  document.getElementById('openMotivation').style.display = "none";
  console.log("Motivation box is closed");
}

function functionMyMenu() {
  document.getElementById("smallerNav").style.display = "block";
  console.log("collapse navbar is opened");
}
function closeMyMenu() {
  document.getElementById("smallerNav").style.display = "none";
  console.log("collapse navbar is closed");
}

function openskills() {
  document.getElementById('skillset').style.display = "block";
  console.log("skill box is opened");
}
function closeSkills() {
  document.getElementById('skillset').style.display = "none";
  console.log("skill box is closed");
}
function illustration() {
  document.getElementById('ilustrationContent').style.display = "block";
  document.getElementsByClassName
  document.get
}
function closehobbies() {
  document.getElementById('ilustrationContent').style.display = "none";
}
function hover() {
  console.log("the mouse is hovered to image");
}
//deployement task: bulb on and off
function changeOnOffBulb() {
  var image = document.getElementById('bulb');
  if (image.src.match('bulb_on')) {
    image.src = "images/pic_bulboff.gif";
    document.getElementById('output').style.background = "red";
    document.getElementById('output').style.color = "white";

  }
  else {
    document.getElementById('output').style.background = "green";
    document.getElementById('output').style.color = "white";
    image.src = "images/bulb_on.gif";
  }
}
//deployment task:grow and shrink
function changeSize() {
  var antman = document.getElementById('antman');
  if (antman.src.match('ant-g')) {
    antman.src = 'images/ant-s.jpg';
    document.getElementById('antman').style.height = "20px";
    document.getElementById('antman').style.width = "20px";
    document.getElementById('size').style.background = "green";
    document.getElementById('size').style.color = "white";
    document.getElementById('demo').innerHTML = "am shrinked"
  }
  else {

    antman.src = 'images/ant-g.jpg';
    document.getElementById('antman').style.height = "120px";
    document.getElementById('antman').style.width = "120px";
    document.getElementById('size').style.background = "yellow";
    document.getElementById('size').style.color = "black";
    document.getElementById('demo').innerHTML = "am grown"
  }
}
function fly() {
  var ironman = document.getElementById('ironman').style.float = "left";
  var destination = document.getElementById('destination').style.marginLeft = "100px";

}

