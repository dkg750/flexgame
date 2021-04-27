console.log("this is game");
let container=document.getElementById("container");
container.addEventListener("click",function(e){
    let vary=e.target.id;
    let num=Math.round(1+(9-1)*Math.random());

    let a1='what are your feeling about me?';
            let a2='tell me one thing you have never told anyone';
            let a3='Write your and my name in your status for 1 day!';
            let a4='What change would you want in me?';
            let a5='Ice cream treat';
            let a6="Tell me something you always wanted to say but you couldn't..."
            let a7='Put your status for a day saying "I am mad"';
            let a8='Give me a treat';
            let a9="What's your deepest secret?";
            let content=[a1,a2,a3,a4,a5,a6,a7,a8,a9];
    if(vary){
        if(num>8){
            num=6;
            alert(content[num]);
        }
        else{
            alert(content[num]);
        }
        let randum;
    }
    //container.removeChild(document.getElementById(vary));
    
});