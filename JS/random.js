var intervalId=null;
var isRunning=false;

function generateNumber(){
    if(!isRunning){
        //Start loop
        intervalId=setInterval(()=>{
        for (let i = 1; i <= 5; i++ ){
            var random = Math.floor(Math.random() * 100) ;
            document.getElementById("n" + i).innerHTML = random;
        }
        },130);
        document.getElementById("btn").innerHTML="Stop";
        isRunning = true;
    }
    else{
        //Stop Loop
        clearInterval(intervalId);
        document.getElementById("btn").innerHTML="Start";
        isRunning = false;
    }
}