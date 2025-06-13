const button = document.querySelector("button");
let res = document.getElementById("res");

res.innerHTML = `Select The State :`;

button.addEventListener('click', DisplayState);

function DisplayState() {
    let res = document.getElementById("res");
    const input=document.getElementById("input");
    const city = input.value;

    let population = 0.0, lang = '', capital = '', edg = 0.0;
    let emoji = '';
    let result = '';

    switch (city) {
        //A
        case 'Andhrapradesh':
             population = 55.0; 
             lang = 'Telugu'; 
             capital = 'Amaravati'; 
             edg = 67.35; 
             emoji = '🌾'; 
             break;
        case 'Arunachalpradesh':
             population = 1.7;
              lang = 'English';
             capital = 'Itanagar';
              edg = 66.95;
               emoji = '🏔️';
                break;
        case 'Assam':
             population = 36;
             lang = 'Assamese';
             capital = 'Dispur';
             edg = 85.9;
             emoji = '🍵'; break;

        //B
        case 'Bihar':
             population = 131.04;
             lang = "Hindi, Urdu";
             capital = 'Patna';
             edg = 70.9;
             emoji = '📜';
             break;

        //C
        case 'Chhattisgarh':
             population = 32;
             lang = 'Chhattisgarhi';
             capital = 'Raipur';
             edg = 77.3;
             emoji = '🌿';
             break;

        //G
        case 'Goa':
             population = 1.6;
             lang = 'Konkani';
             capital = 'Panaji';
             edg = 87.4;
             emoji = '🏖️';
             break;
        case 'Gujarat':
             population = 60.4;
             lang = 'Gujarati';
             capital = 'Gandhinagar';
             edg = 82.4;
             emoji = '🕌';
             break;
        
        //H
        case 'Haryana':
             population = 25.35;
             lang = 'Hindi, Punjabi';
             capital = 'Chandigarh';
             edg = 80.4;
             emoji = '🌾';
             break;
        case 'Himachalpradesh':
             population = 7.4;
             lang = 'Hindi'; capital = 'Shimla';
             edg = 86.6;
             emoji = '🏞️';
             break;
        
        //J
        case 'Jharkhand':
             population = 33.0;
             lang = 'Hindi';
             capital = 'Ranchi';
             edg = 74.3;
             emoji = '⛏️';
             break;
        
        //K
        case 'Karnataka':
             population = 61.1;
             lang = 'Kannada';
             capital = 'Bengaluru';
             edg = 77.2;
             emoji = '📱';
             break;
        case 'Kerala':
             population = 35.3;
             lang = 'Malayalam';
             capital = 'Thiruvananthapuram'; 
             edg = 96.2;
             emoji = '🌴'; 
             break;
        
        //M
        case 'Madhyapradesh':
             population = 72.6;
             lang = 'Hindi'; 
             capital = 'Bhopal';
             edg = 73.7;
             emoji = '🪔';
             break;
        case 'Maharashtra':
             population = 123.1;
             lang = 'Marathi';
             capital = 'Mumbai';
             edg = 84.8;
             emoji = '🏙️';
             break;
        case 'Manipur':
             population = 3.1;
             lang = 'Meitei';
             capital = 'Imphal';
             edg = 79.9;
             emoji = '⛰️';
             break;
        case 'Meghalaya':
             population = 3.3;
             lang = 'English';
             capital = 'Shillong';
             edg = 75.5;
             emoji = '🌧️';
             break;
        case 'Mizoram':
             population = 1.3;
             lang = 'Mizo';
             capital = 'Aizawl';
             edg = 98.2;
             emoji = '🎵';
             break;
        
        //N
        case 'Nagaland':
             population = 2.0;
             lang = 'English';
             capital = 'Kohima';
             edg = 95.7;
             emoji = '⛪';
             break;

        //O
        case 'Odisha':
             population = 42.0;
             lang = 'Odia';
             capital = 'Bhubaneswar';
             edg = 77.3;
             emoji = '🌊'; 
             break;

        //P
        case 'Punjab':
             population = 30.0;
             lang = 'Punjabi';
             capital = 'Chandigarh';
             edg = 83.7;
             emoji = '🌾';
             break;

        //R
        case 'Rajasthan':
             population = 81.0;
             lang = 'Hindi';
             capital = 'Jaipur';
             edg = 69.7;
             emoji = '🏜️';
             break;
        
        //S
        case 'Sikkim':
             population = 0.7;
             lang = 'Nepali';
             capital = 'Gangtok';
             edg = 82.2;
             emoji = '🌄';
             break;

        //T
        case 'Tamilnadu':
             population = 77.4;
             lang = 'Tamil';
             capital = 'Chennai';
             edg = 82.9;
             emoji = '🕉️'; break;
        case 'Telangana':
             population = 35.2;
             lang = 'Telugu, Urdu';
             capital = 'Hyderabad';
             edg = 72.8;
             emoji = '🏯';
             break;
        case 'Tripura':
             population = 4.0;
             lang = 'Bengali, Kokborok';
             capital = 'Agartala';
             edg = 87.8; 
             emoji = '🎨';
             break;

        //U
        case 'Uttarpradesh':
             population = 230.0;
             lang = 'Hindi'; 
             capital = 'Lucknow';
             edg = 73.0;
             emoji = '🕌';
             break;
        case 'Uttarakhand':
             population = 11.1;
             lang = 'Hindi';
             capital = 'Dehradun';
             edg = 87.6;
             emoji = '🏔️';
             break;
        
        //W
        case 'Westbengal':
             population = 100.3;
             lang = 'Bengali';
             capital = 'Kolkata';
             edg = 80.5;
             emoji = '🎭';
             break;

        default:
            result = `❌ <strong>Invalid State Name</strong><br>Please enter a valid Indian state name.`;
            res.innerHTML = result;
            return;
    }

    result = `
        ${emoji} <strong>${city.charAt(0).toUpperCase() + city.slice(1)}</strong><br>
        📍 Capital: <strong>${capital}</strong><br>
        👥 Population: <strong>${population} million</strong><br>
        🗣️ Language: <strong>${lang}</strong><br>
        🎓 Literacy: <strong>${edg}%</strong>
    `;

    res.innerHTML = result;
}