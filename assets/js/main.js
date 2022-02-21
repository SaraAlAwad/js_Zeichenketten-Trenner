let inputString = document.getElementById("string");
let subString = document.getElementById("subString");
let output = document.getElementById("output");
let output2 = document.getElementById("output2");

function trennen() {
    console.log("TEST")
    console.log(inputString.value)
    let str = inputString.value
    console.log(subString.value)
    let substr = subString.value;
    console.log(inputString.value.search(substr))
    let userInputP = inputString.value.search(substr);

    if (document.getElementById("before").checked === true && userInputP != -1) {
        console.log("if test1");
        output.innerHTML = str.slice(0, userInputP);
        output2.innerHTML = str.slice(userInputP);
    }
    else if (userInputP == -1) {
        console.log("error!")
        output.innerHTML = `Das Zeichen konnte nicht gefunden werden`;
        output2.innerHTML = str;
    }
    else {
        console.log("if test2")
        output.innerHTML = str.slice(0, userInputP + substr.length);
        output2.innerHTML = str.slice(userInputP + substr.length);
    }
    // else if (document.getElementById("after").checked === true) {
    //     console.log("if test2")
    //     output.innerHTML = str.slice(0, userInputP + position.length);
    //     output2.innerHTML = str.slice(userInputP + position.length);
    // }
    // else {
    //     console.log("error!")
    //     output.innerHTML = `Das Zeichen konnte nicht gefunden werden`;
    //     output2.innerHTML = str;
    // }


}
