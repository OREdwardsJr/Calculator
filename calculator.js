let numArray1 = []
let numArray2 = []
var operatorChoice = ''
let neg = false // becomes true if the negative buttoon is pressed 
let decCheck = [] // decCheck becomes defined by unshifting true into the list when there's a decimal
const numTracker = document.querySelector("#numTracker");

function continueResetOps () {
    operation_display.textContent = answ;
    numArray1 = [answ]
    numArray2 = [];
    operatorChoice = '';
    neg = false;
    decCheck = [];
};

function chooseNums (operator = operatorChoice, num) {
    let answ = '';
    if (operation_display.textContent < 0) {
        neg = true
    };
    if (operator === '' ) {
        numArray1.push(num.textContent)
        operation_display.textContent = Number(numArray1.join(""))
    } else {
        numArray2.push(num.textContent)
        operation_display.textContent = Number(numArray2.join(""))
    };
    if (neg) {
        operation_display.textContent *= -1
    };
};

//Num Buttons
const zero = document.querySelector('#zero');
zero.addEventListener('click', () => ((chooseNums(operatorChoice, zero))));

const one = document.querySelector('#one');
one.addEventListener('click', () => ((chooseNums(operatorChoice, one))));

const two = document.querySelector('#two');
two.addEventListener('click', () => ((chooseNums(operatorChoice, two))));

const three = document.querySelector('#three');
three.addEventListener('click', () => ((chooseNums(operatorChoice, three))));

const four = document.querySelector('#four');
four.addEventListener('click', () => ((chooseNums(operatorChoice, four))));

const five = document.querySelector('#five');
five.addEventListener('click', () => ((chooseNums(operatorChoice, five))));

const six = document.querySelector('#six');
six.addEventListener('click', () => ((chooseNums(operatorChoice, six))));

const seven = document.querySelector('#seven');
seven.addEventListener('click', () => ((chooseNums(operatorChoice, seven))));

const eight = document.querySelector('#eight');
eight.addEventListener('click', () => ((chooseNums(operatorChoice, eight))));

const nine = document.querySelector('#nine');
nine.addEventListener('click', () => ((chooseNums(operatorChoice, nine))));

const period = document.querySelector('#period');
period.addEventListener('click', () => ((chooseNums(operatorChoice, period))));


//Operation Display
var operation_display = document.querySelector("#display_operation");

//Operator buttons

// Clear
const clear = document.querySelector('#clear');
clear.addEventListener('click', () => {
    neg = false;
    numTracker.textContent = '';
    if (operatorChoice === '') {
        if (0 in decCheck) () => ((numArray1.shift()));
        numArray1 = []
        operation_display.textContent = 0
    } else {
        if (0 in decCheck) () => ((numArray2.shift()));
        numArray2 = [];
        operation_display.textContent = 0;
    };
});

// Positive/Negative Conversion
const posOrNeg = document.querySelector('#pos_or_neg')
posOrNeg.addEventListener("click", () => (
    (operation_display.textContent = Number(operation_display.textContent) * - 1)
    ));

// Percentage Conversion
const percConvert = document.querySelector("#percentage")
percConvert.addEventListener("click", () => {
    if (operatorChoice === ''){
        if (0 in decCheck) {
            operation_display.textContent = Number(numArray1.join("")) * 1000
            decCheck.shift()
            numArray1.shift()
        } else {
            operation_display.textContent = Number(numArray1.join("")) * .01
            decCheck.unshift(true)
            numArray1.unshift('.')
        };
    } else {
        if (0 in decCheck) {
            operation_display.textContent = Number(numArray2.join("")) * 100
            decCheck.shift()
            numArray2.shift()
        } else {
            operation_display.textContent = Number(numArray2.join("")) * .01
            decCheck.unshift(true)
            numArray2.unshift('.')
        };
    };
});

//Operation Buttons - Side Container
const side_container = document.querySelectorAll("#side_container button");
for (let check of side_container) {
    if (check.textContent != "=") {
        check.addEventListener("click", () => {
            numTracker.textContent = operation_display.textContent;
            operation_display.textContent = '';
        });
    };
};

// Operations //
// Multiplication
const multiply = document.querySelector("#multiply")
multiply.addEventListener("click", () => {
    operatorChoice = "*"
    numArray1 = [Number(numArray1.join(""))]
});

// Division
const divide = document.querySelector("#division")
divide.addEventListener("click", () => {
    operatorChoice = "\\"
    numArray1 = [Number(numArray1.join(""))]
});

// Addition
const add = document.querySelector("#add")
add.addEventListener("click", () => {
    operatorChoice = "+"
    numArray1 = [Number(numArray1.join(""))]
});

// Subtraction
const subtract = document.querySelector("#subtract")
subtract.addEventListener("click", () => {
    operatorChoice = "-"
    numArray1 = [Number(numArray1.join(""))]
});

// Equals
const equals = document.querySelector("#equals")
equals.addEventListener("click", () => {
    numArray2 = Number(numArray2.join(""))
    numTracker.textContent = '';
    switch (operatorChoice) {
        case "+":
            answ = numArray1 + numArray2;
            continueResetOps()
            break;
        case "-":
            answ = numArray1 - numArray2;
            continueResetOps()
            break;
        case "/":
            answ = numArray1 / numArray2;
            break;
        case "*":
            answ = numArray1 * numArray2;
            continueResetOps()
            break;
    }
    operatorChoice = ""
});
