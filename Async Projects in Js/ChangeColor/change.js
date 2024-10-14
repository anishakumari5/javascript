function changeColor(){
    let color='#';
    const hex='0123456789ABCDEF';
    for(let i=0;i<6;i++)
    {
        color+=hex[(Math.floor(Math.random()*16))];
    }
    return color;
};

console.log(changeColor());

const Start=document.querySelector('.start');
const Stop=document.querySelector('.stop');

let colorInterval;

const startChangingColor=function(){
    document.body.style.backgroundColor=changeColor();
}

const startIt=function(){
    if(!colorInterval)
    {
        colorInterval=setInterval(startChangingColor,1000);
    }
}

const stopChangingColor=function(){
    clearInterval(colorInterval);
    colorInterval=null;
}


Start.addEventListener('click',startIt);

Stop.addEventListener('click',stopChangingColor);