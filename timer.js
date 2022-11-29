
function countDown(time){
    let timer = setInterval(function(){
        time--;
        if(time <= 1){
            clearInterval(timer);
            console.log(time, 'Done Now!')
        }else {
            console.log(time);
        }
    },1000)
  }

  function countUp(x){
    let timer = setInterval(function(){
        x++;
        if(x >= 10){
            clearInterval(timer);
            console.log(x,'Completed!');
        } else{
            console.log(x);
        }
     }, 1000)
  }


function randomGame(){
    let ranNum; 
    let counter = 0;
    
    let timer = setInterval(function(){
        ranNum = Math.random();
        counter++
        if(ranNum > .75){
            clearInterval(timer);
            console.log('It took' + counter + 'times');
        }
    }, 1000)
}


function randomGameboy(){
    let num;
    let times = 0;
    let timer = setInterval(function(){
      num = Math.random();
      times++
      if(num > .75) {
        clearInterval(timer);
        console.log("It took " + times + " try/tries.");
      }
    },1000)
  }