const msg = document.querySelector("#msg");
const boxes = document.querySelectorAll(".boxes");
const reset = document.querySelector("#restart");
let turnX=true;
currplayer = turnX;
let iswin=false;
let winning_patterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];



boxes.forEach((box) => {
  box.addEventListener("click", () => {
if(box.innerText=="" && iswin==false){
    
      box.innerText = turnX==true?"X":"O";
      turnX=turnX==false?true:false;
      msg.innerText=turnX==true?"X'S TURN":"O'S TURN";
      
     win();
  }});
});

win = () => {
  for (let pattern of winning_patterns) {
    if(boxes[pattern[0]].innerText !="" && boxes[pattern[1]].innerText !="" && 
        boxes[pattern[2]].innerText !="" ){
    if (
      boxes[pattern[0]].innerText === boxes[pattern[1]].innerText &&
      boxes[pattern[1]].innerText === boxes[pattern[2]].innerText
    ) {
      iswin=true;
      reset.innerText="NEW GAME";
      msg.innerText = ` ${boxes[pattern[1]].innerText}  wins!!! GOOD JOB`;
      
    }}
  }
};

reset.addEventListener("click", () => {
  for (let box of boxes) {
    box.innerText = "";
    msg.innerText = "PLAY";
 turnX=false;
 iswin=false;
  }
});
