let box=document.querySelectorAll(".box");
let scoreBD=document.getElementById('scoreBD');
let resbtn=document.getElementById('resbtn');
let chX=document.getElementById('chX');
let chO=document.getElementById('chO');
let score={xwin:0,owin:0,tie:0};
let gameover=false;
let isdraw=false,drawnum=0;
let turn="X";

box.forEach(e=>{
    
    e.innerHTML="";
    e.addEventListener("click",()=>{
        if(!gameover && e.innerHTML===""){
            e.innerHTML=turn;
            e.style.background = (turn === "X") ? "lightblue" : "lightcoral";
            checkgameWin();
            drawnum++;
            checkdraw();
            changeTurn();
            
        }
    })
});

function changeTurn(){
    if(turn==="X"){
        turn="O";
        chO.style.background="lightcoral";
        chX.style.background="#ffffff67";
    }else{
        turn="X"
        chX.style.background= "lightblue";
        chO.style.background="#ffffff67";
    }
}
function checkdraw(){
    if(!isdraw && drawnum ===9){
        
            score.tie++;
            scoreBD.innerHTML=`X-win : ${score.xwin} || O-win : ${score.owin} || Tie : ${score.tie}`;
            gameover=true;
            resbtn.style.display="block";
    }
}
function checkgameWin(){
    let wincode=[
        [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
    ];

    for(let i=0;i<wincode.length;i++){
        let [a, b, c] = wincode[i];
        let v0=box[wincode[i][0]].innerHTML;
        let v1=box[wincode[i][1]].innerHTML;
        let v2=box[wincode[i][2]].innerHTML;

        if(v0!="" && v0===v1 && v0=== v2){
            resbtn.style.display="block";
            

            box[a].style.background = box[b].style.background = box[c].style.background = "lightgreen";
            turn==="X"?score.xwin++:score.owin++;
            document.getElementById('winnerText').innerText = `${turn} wins!`;
            scoreBD.innerHTML=`X-win : ${score.xwin} || O-win : ${score.owin} || Tie : ${score.tie}`;
            gameover=true;
            isdraw=true;
            
        }
    }

}

resbtn.addEventListener('click',()=>{

    gameover=false;
    turn="X";
    chX.style.background= "lightblue";
    chO.style.background="#ffffff67";
    isdraw=false;
    drawnum=0;
    box.forEach(e=>{
        e.innerHTML=""
        e.style.background="#00000076";
    })
    document.getElementById('winnerText').innerText ="";
    resbtn.style.display="none";
})