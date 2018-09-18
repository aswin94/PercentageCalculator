var num1 = document.getElementById('num1');
var num2 = document.getElementById('num2');
var res = document.getElementById('res');

var form = document.getElementById('perCalc');

function changeCalcOptn() {
    var newTopic = "";
    var option = document.getElementById('select').value;
    if (option == 1) {
        newTopic = "X is what % of Y";
    }
    else if (option == 2) {
        newTopic = "What is Y% of X?";
    }
    else if (option == 3) {
        newTopic = "X is Y% of what?";
    }
    else if (option == 4) {
        newTopic = "What % of X is Y?";
    }
    else if (option == 5) {
        newTopic = "X% of what is Y?";
    }
    else if (option == 6) {
        newTopic = "Y% of X is what?";
    }
    calcOptn.innerText = newTopic;
}


form.addEventListener('submit', function(event) {
    var option = document.getElementById('select').value;
    if (!num1.value || !num2.value) {
        alert("Please enter values in the fields");
    } else {
        var x = parseFloat(num1.value);
        var y = parseFloat(num2.value);
        
        if (option == 1){
            var result = x/y * 100;
            res.innerText = "Result : " + result + "%";
        }
        else if (option == 2 || option == 6) {
            var result = x * y / 100;
            res.innerText = "Result: " + result;
        }
        else if (option == 3) {
            var result = x * 100 / y;
            res.innerText = "Result: " + result;
        }
        else if (option == 4) {
            var result = y * 100 / x;
            res.innerText = "Result: " + result + "%";
        }
        else if (option == 5) {
            var result = y * 100 / x;
            res.innerText = "Result: " + result;
        }
        event.preventDefault();
    }
});