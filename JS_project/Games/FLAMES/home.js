let btn = document.getElementById('btn');
let res = document.getElementById('res');


btn.addEventListener('click',()=>{
    let name1 = document.getElementById('name1').value;
    let name2 = document.getElementById('name2').value;
    let flames_res=[];
    name1 = name1.replaceAll(' ', '').toLowerCase();
    name2 = name2.replaceAll(' ', '').toLowerCase();

    let NAME1_ARR=name1.split('');
    let NAME2_ARR=name2.split('');
    if (name1 === "" || name2 === "") {
    res.innerHTML = "Enter both names bro 😅";
    return;
    }

    if(name1 === name2){
        res.innerHTML = "Brooo you typed the same name twice 😏 Try again!";
        return;
    }

    for(let i=0;i<NAME1_ARR.length;i++){
        for(let j=0;j<NAME2_ARR.length;j++){
            if(NAME1_ARR[i] === NAME2_ARR[j]){
                NAME1_ARR.splice(i, 1);
                NAME2_ARR.splice(j, 1);
                i=-1;
                break;
            }
        }
    }
    flames_res=NAME1_ARR.concat(NAME2_ARR);
    let count=NAME1_ARR.length+NAME2_ARR.length;
    let flames = ["F", "L", "A", "M", "E", "S"];
    let idx = 0;

    while (flames.length > 1) {
        idx = (idx + count - 1) % flames.length;
        flames.splice(idx, 1); 
    }
    let mess=flames[0];
   let meaning = {
    "F": "Friends 🫂",
    "L": "Love 👩🏻‍❤️‍👨🏻",
    "A": "Affection 💖",
    "M": "Marriage 💍",
    "E": "Enemies 😡",
    "S": "Siblings 🧑‍🤝‍🧑"
};

    res.innerHTML = `Your relationship is: <b>${meaning[mess]}</b>`;


});