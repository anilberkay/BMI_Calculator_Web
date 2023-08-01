let weight_input = document.getElementById("weight");
let height_input = document.getElementById("height");
let info  = document.querySelector(".info");
let info_text = document.querySelector(".info_text")

let calculate = document.getElementById("calculate");


calculate.addEventListener("click", (weight,height) => {
    weight =  parseFloat(weight_input.value);
    height = parseFloat(height_input.value);
    let bmi = parseFloat((weight / ((height**2)/10000))).toFixed(2);
    controller(weight_input,height_input,bmi)

    info.style.display = "flex";
});


let infos = (bmi) => {
    if(18.4>bmi>0) {
        info_text.style.color = "#C08B00";
        info_text.textContent= `Your BMI: ${bmi}`;
    }
    else if (24.9>=bmi && bmi>=18.5) {
        info_text.style.color = "#067600";
        info_text.textContent= `Your BMI: ${bmi}`;
    }
    else{
        info_text.style.color = "red";
        info_text.textContent= `Your BMI: ${bmi}`;
    }
};


let controller = (weight_input,height_input,bmi) => {
    if(!isNaN(weight_input.value) && !isNaN(height_input.value) && weight_input.value!="" && height_input.value != ""){
        infos(bmi);
    }
    
    else {
        info_text.style.color = "#DC0D0D";
        info_text.textContent = "Please fill in the information correctly.";
    }
}