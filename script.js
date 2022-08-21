const cont=document.querySelector(".container");
const text=document.querySelector("#text");

const totalTime=12000;
const breatheTime = totalTime/4;
breatheAnimation();

function breatheAnimation()
{
    text.innerText = "Breathe In!";
    cont.classList.add("grow");

    setTimeout(()=>
    {
        text.innerText="Hold!";
        setTimeout(()=>
        {
            text.innerText = "Breathe Out!";
            cont.classList.remove("grow");
            cont.classList.add("shrink");

            setTimeout(()=>
            {
                text.innerText="Hold!";
                cont.classList.remove("shrink");
                cont.classList.remove("grow");
            },breatheTime);

        },breatheTime);

    },breatheTime);

    
}

setInterval(breatheAnimation,totalTime);