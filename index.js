function ext(){
    var numberInput = document.getElementById("number").value;

    var units = ["zero", "um", "dois", "três", "quatro", "cinco"];

    var number = parseInt(numberInput);
    var label = document.getElementById("ext")
    label.innerHTML = units[number];

    console.log(number);
}