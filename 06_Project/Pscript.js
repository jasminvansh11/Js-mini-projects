const randomColor = function(){
    const hex = "123456789ABCDEFG";
    let color = "#";
    for(let i =0; i < 6; i++){
        color += hex[Math.floor(Math.random()*10)]
    }
    return color
}


let intervalId
function startChangeColor(){
    if(!intervalId){
       intervalId =  setInterval(chnageBgColor,1000)
    }
    function chnageBgColor(){
     document.body.style.background = randomColor()
    }

    console.log("Start color changing")

}



const stopChangingColor = function () {
  clearInterval(intervalId);
  intervalId = null;
  console.log("Stop color changing");
  
};



document.querySelector("#start").addEventListener("click",startChangeColor)
document.querySelector("#stop").addEventListener("click",stopChangingColor)