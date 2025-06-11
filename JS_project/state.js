const button=document.querySelector("button");

let res=document.getElementById("res");
res.innerHTML=`Select The State :`;

button.addEventListener('click',DisplayState);
       
function DisplayState(){
        let res=document.getElementById("res");
        const input=document.getElementById("input");
        const city = input.value;
        let population=0.0,lang='',capital='',edg=0.0;
        
        let emoji = '';
switch (city) {
    case 'TamilNadu':
        population = 77.39;
        lang = 'Tamil';
        capital = 'Chennai';
        edg = 82.9;
        emoji = '🕉️';
        break;
    case 'AndhraPradesh':
        population = 55.0;
        lang = 'Telugu';
        capital = 'Amaravati';
        edg = 67.35;
        emoji = '🌾';
        break;
    case 'Bihar':
        population = 131.04;
        lang = "Hindi and Urdu";
        capital = 'Patna';
        edg = 70.9;
        emoji = '📜';
        break;
    case 'Chhattisgarh':
        population = 32;
        lang = 'Chhattisgarhi';
        capital = 'Raipur';
        edg = 77.3;
        emoji = '🌿';
        break;
    case 'Assam':
        population = 36;
        lang = 'Assamese';
        capital = 'Dispur';
        edg = 85.9;
        emoji = '🍵';
        break;
    case 'ArunachalPradesh':
        population = 1.7;
        lang = 'English';
        capital = 'Itanagar';
        edg = 66.95;
        emoji = '🏔️';
        break;
    case 'Goa':
        population = 1.6;
        lang = 'Konkani';
        capital = 'Panaji';
        edg = 87.4;
        emoji = '🏖️';
        break;
}

        
        let result = `
                    ${emoji} <strong>${city}</strong><br>
                    📍 Capital: <strong>${capital}</strong><br>
                    👥 Population: <strong>${population} million</strong><br>
                    🗣️ Language: <strong>${lang}</strong><br>
                    🎓 Literacy: <strong>${edg}%</strong>
`;

        
        res.innerHTML=result;
       }
