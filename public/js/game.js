const section=document.getElementsByTagName('section');
const toggle=document.getElementById('toggle');
const guessingWord=document.getElementById('result');
const inputField=document.getElementById('in-input');
const header=document.querySelector('.Main-header');
const subBtn=document.getElementById('subbtn');
let sWord;
if(window.location.href.endsWith('easy'))
{
sWord=['car','mug','rat','fat','set','cat','mat','root','get','job','log','yet','met','bot'];
}
else if(window.location.href.endsWith('medium'))
{
    sWord=['most','star','best','scar','python','hard','soft','plan','clan','slot','boot','shoe','chess','bike','right','wrong','side','left'];
    header.style.background='rgb(236, 0, 140)';
    section[0].style.background='linear-gradient(to right, rgb(236, 0, 140), rgb(252, 103, 103))';
    subBtn.style.background='rgb(236, 0, 140)';
}
else{
     sWord=['smart','watch','slogan','jaguar','mobile','laptop','master','throne','morning','evening','noon','liers','happy','welcome'];
     section[0].style.background=' linear-gradient(to right, rgb(178, 254, 250), rgb(14, 210, 247))';
     subBtn.style.background='rgb(14, 210, 247)';
     header.style.background='rgb(14, 210, 247)';
}
const randomWords=()=>{
    return sWord[Math.floor(Math.random()*sWord.length)];
}
let ShuffWord=(word)=>
{
    let newWord=word.split("");
    for(i=newWord.length-1;i>=0;i--)
    {
        let j=Math.floor(Math.random()*(i+1));
        let temp=newWord[i];
        newWord[i]=newWord[j];
        newWord[j]=temp;
    }  
    return newWord;
}   
let play=false;
let rightWord;
let tryAgain;
subBtn.addEventListener('click',()=>
{
    if(!play)
    {
        play=true;
        subBtn.innerHTML="Guess";
        toggle.classList="";
        rightWord=randomWords();
        guessingWord.innerHTML=ShuffWord(rightWord).join("").toUpperCase();
        tryAgain=guessingWord.innerHTML;
    }
    else{
        if(rightWord===inputField.value.toLowerCase())
        {
            play=false;
            subBtn.innerHTML="Start again";
            inputField.value="";
            guessingWord.innerHTML=`Great you are correct it was ${rightWord}`.toUpperCase();

        }
        else{
            console.log('wrong');
            guessingWord.innerHTML=`Try again buddy ${tryAgain}`.toUpperCase();
        }
    }
})
document.body.style.background='yellow';