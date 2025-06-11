    //Palindrome
function but(){
            let str=document.getElementById("input").value;
            let str2 = str.toLowerCase();
            let rev = str2.split("").reverse().join("");
            let res=document.getElementById("res");
            if(str2===rev)
                res.innerHTML=`<strong>${str}</strong> is a Plaindrom.`;
            else
                res.innerHTML=`<strong>${str} </strong>is not a Plaindrom.`;
            
        }

        document.getElementById("input").addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
             event.preventDefault();
             but();
        }
});

        //Armstong number.

        function Armstong(){
            const num = Number(document.getElementById("Armstong").value);
            let dig =0,copy=num,temp,result=0;
            while(copy!=0){
                copy=Math.floor(copy/10);
                dig++;
            }
            copy=num;
            for(let i=0;i<dig;i++){
                temp=copy%10;
                result=result+Math.pow(temp,dig);
                copy = Math.floor(copy / 10)
            }
            let res=document.getElementById("res_Armstong");
            if(num===result){
                res.innerHTML=`<strong>${num}</strong> : is a Armstong Number`;
            }else{
                res.innerHTML=`<strong>${num} </strong>: is not a Armstong Number`;
            }

        }
        document.getElementById("Armstong").addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
             event.preventDefault();
            Armstong();
        }
        });

        //prime number.
        function prime(){
            let num=Number(document.getElementById("prime").value);
            let prime_res=document.getElementById("prime_res");
            let isprime=true;
            if(num<=1)
                isprime=false;
            for(let i=2;i<num;i++){
                if(num%i==0){
                    isprime=false;
                    break;
                }
            }
            if(isprime)
                prime_res.innerHTML=`<strong>${num} </strong>: is a prime number.`;
            else
                prime_res.innerHTML=`<strong>${num} </strong>: is  not a prime number.`;
        }

        document.getElementById("prime").addEventListener("keypress",function(event){
            if(event.key === "Enter"){
                event.preventDefault();
                prime();
            }
        });

        //fact
        function fact(){
            let num = Number(document.getElementById("fact").value);
            let fact_res=document.getElementById("fact_res");
            let res=1;
            for(let i=1;i<=num;i++){
                res*=i;
            }
            fact_res.innerHTML=`The factorial of <strong>${num}</strong> is :<strong> ${res}</strong>`;
        }
        document.getElementById("fact").addEventListener("keypress",function(event){
            if(event.key==="Enter"){
                event.preventDefault();
                fact();
            }
        });