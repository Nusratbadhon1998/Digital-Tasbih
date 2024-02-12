let subhanAllahPlus = document.getElementById("count1-btn-inc")
let subhanAllahMinus = document.getElementById("count1-btn-dec")
let count1 = document.getElementById("count-1")


let alhamdulillahPlus = document.getElementById("count2-btn-inc")
let alhamdulillahMinus = document.getElementById("count2-btn-dec")
let count2 = document.getElementById("count-2")


let allahuAkbarPlus = document.getElementById("count3-btn-inc")
let allahuAkbarMinus = document.getElementById("count3-btn-dec")
let count3 = document.getElementById("count-3")


let sum1 = 0;
let sum2 = 0;
let sum3 = 0;

subhanAllahPlus.addEventListener("click", () => {
    sum1 += 1;
    count1.innerText = sum1;

})
subhanAllahMinus.addEventListener("click", function () {

    if (sum1 === 0) {
        alert("Already 0")
    }
    else {
        sum1 = sum1 - 1;
        count1.innerText = sum1;
    }
})

alhamdulillahPlus.addEventListener("click", () => {


    sum2 += 1;
    let count2 = document.getElementById("count-2")
    count2.innerText = sum2;


})
alhamdulillahMinus.addEventListener("click", () => {

    if (sum2 === 0) {
        alert("Already 0")
    }
    else {

        sum2 -= 1;
        count2.innerText = sum2;
    }


})


allahuAkbarPlus.addEventListener("click", () => {


    sum3 += 1;
    let count3 = document.getElementById("count-3")
    count3.innerText = sum3;

})
allahuAkbarMinus.addEventListener("click", () => {

    if (sum3 === 0) {
        alert("Already 0")
    }
    else {

        sum3 -= 1;
        count3.innerText = sum2;
    }


})




