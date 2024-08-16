const container = document.getElementById("container");
console.log(container);

const input1 = document.createElement('input');
input1.placeholder = "Enter First Number";
input1.style.margin = "10px";
input1.id = "input1";
input1.textContent = "Test";

const input2 = document.createElement('input');
input2.placeholder = "Enter Second Number";

const submit_btn = document.createElement('button');
submit_btn.textContent = "Submit";
submit_btn.style.margin = "10px"

//This function is to sum the input
submit_btn.addEventListener("click", () => {
    let result = Number(input1.value) + Number(input2.value);
    const resultPara = document.createElement("p");
    resultPara.textContent = result;
    container.appendChild(resultPara);
    
    //Clear the input
    
    document.getElementById("input1").focus();
    document.getElementById("input1").reset();
   
});

const resultTxt = document.createElement('h3');
resultTxt

//Append th
container.appendChild(input1);
container.appendChild(input2);
container.appendChild(submit_btn);

