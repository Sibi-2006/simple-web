let btn = document.getElementById('btn');
let btn_bulking = document.getElementById('btn_bulking');
let btn_fatloss = document.getElementById('btn_fatloss');
let res = document.getElementById('res');
res.style.display="none"

btn.addEventListener("click", () => {
    let age = parseFloat(document.getElementById('age').value);
    let height = parseFloat(document.getElementById('height').value);
    let weight = parseFloat(document.getElementById('weight').value);
    let gender = document.getElementById('gender').value;
    let goal = document.getElementById('goal').value;
    let sugar="";
    if (!age || !height || !weight || !gender) {
        res.style.display="block"
        res.innerText = "⚠️ Please fill in all the fields correctly.";
        res.style.color = "red";
        return;
    }

    let bmr = 0;

    if (gender === "Male") {
        bmr = (10 * weight) + (6.25 * height) - (5 * age) + 5;
        sugar="25–36g/day (6–9 teaspoons)"
    } else if (gender === "Female") {
        bmr = (10 * weight) + (6.25 * height) - (5 * age) - 161;
        sugar="20–25g/day (5–6 teaspoons)"
    }


    if(goal === "maintenance"){
        res.style.display="block"
        res.innerText = `For Maintenance:\n
        🔥 Your BMR is: ${bmr.toFixed(2)} kcal/day\n
        🍗 Protein per day: ${(weight * 1.5).toFixed(2)}g to ${(weight * 2).toFixed(2)}g\n
        🍚 Carbs per day: ${(weight * 3).toFixed(2)}g to ${(weight * 5).toFixed(2)}g\n
        🥑 Good fat per day: ${(weight * 0.8).toFixed(2)}g to ${(weight * 1).toFixed(2)}g\n
        🍬 Sugar: 25–36g (max recommended for men)`;

        res.style.color = "#011d03";
    }
    else if(goal === "bulking"){
        res.style.display="block"
        res.innerText = `For Bulking\n
        🔥 Your BMR is: ${(bmr+400).toFixed(2)} kcal/day\n
        🍗 Protein per day: ${(weight * 1.8).toFixed(2)}g to ${(weight * 2.5).toFixed(2)}g\n
        🍚 Carbs per day: ${(weight * 3).toFixed(2)}g to ${(weight * 5).toFixed(2)}g\n
        🥑 Good fat per day: ${(weight * 1).toFixed(2)}g to ${(weight * 1.2).toFixed(2)}g\n
        🍬 Sugar: 25–36g (max recommended for men)`;

        res.style.color = "#011d03";
    }
    else if(goal === "fatloss"){
    res.style.display="block"
    res.innerText = `For Fat loss or cutting\n
    🔥 Your BMR is: ${(bmr-250).toFixed(2)-250} kcal/day\n
    🍗 Protein per day: ${ (weight * 1.6).toFixed(2) }g to ${ (weight * 2.2).toFixed(2) }g\n
    🍚 Carbs per day: ${ (weight * 2).toFixed(2) }g to ${ (weight * 3).toFixed(2) }g\n
    🥑 Good fat per day: ${ (weight * 0.6).toFixed(2) }g to ${ (weight * 0.8).toFixed(2) }g\n
    🍬 Sugar: 25g (max recommended for men)`;

    res.style.color = "#011d03";
    }

    
});
