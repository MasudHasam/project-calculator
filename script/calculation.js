const getDisplayValue = document.getElementById("claculatorDisplay");
function buttonClick(perameter) {
    const value = document.getElementById(perameter).innerText;
    const getValue = value;

    const getInsideDisplayValue = getDisplayValue.innerText;
    if (value == "+" || value == "-" || value == "*" || value == "/") {
        const syntax = document.getElementById(perameter);
        const syntaxValue = syntax.innerText;
        getDisplayValue.innerText = getInsideDisplayValue + syntaxValue;
        // console.log(syntaxValue);
        return;
    } else {
        const showValueDIsplay = getInsideDisplayValue + getValue;
        const makeDisplayValueNumber = showValueDIsplay;
        getDisplayValue.innerText = makeDisplayValueNumber;
    }

    document.getElementById("result").addEventListener("click", function () {
        const forSum = eval(getDisplayValue.innerText);
        getDisplayValue.innerText = forSum;
    })

    document.getElementById("delet").addEventListener("click", function () {
        getDisplayValue.innerText = "";
    })
};