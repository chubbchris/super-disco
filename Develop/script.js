var formEl = document.querySelector("form");




var button9El= document.querySelector("#btn-9")
var button10El= document.querySelector("#btn-10")
var button11El= document.querySelector("#btn-11")
var button12El= document.querySelector("#btn-12")
var button13El= document.querySelector("#btn-13")
var button14El= document.querySelector("#btn-14")
var button15El= document.querySelector("#btn-15")
var button16El= document.querySelector("#btn-16")
var button17El= document.querySelector("#btn-17")
var button18El= document.querySelector("#btn-18")
var button19El= document.querySelector("#btn-19")
var button20El= document.querySelector("#btn-20")
var button21El= document.querySelector("#btn-21")
var deleteButtonEl= document.querySelector("#btn-dtl")

var input9El= document.querySelector("#input-9")
var input10El= document.querySelector("#input-10")
var input11El= document.querySelector("#input-11")
var input12El= document.querySelector("#input-12")
var input13El= document.querySelector("#input-13")
var input14El= document.querySelector("#input-14")
var input15El= document.querySelector("#input-15")
var input16El= document.querySelector("#input-16")
var input17El= document.querySelector("#input-17")
var input18El= document.querySelector("#input-18")
var input19El= document.querySelector("#input-19")
var input20El= document.querySelector("#input-20")
var input21El= document.querySelector("#input-21")

var timeDisplayEl= document.querySelector(".time-display")
        
setInterval(() =>{
 var timeEl = moment().format('MMMM Do YYYY, h:mm:ss a');
 
 timeDisplayEl.textContent=timeEl
},1000)


function clickdelete (){
    storageEl9= localStorage.getItem("inputValue9")
    storageEl10= localStorage.getItem("inputValue10")
    storageEl11= localStorage.getItem("inputValue11")
    storageEl12= localStorage.getItem("inputValue12")
    storageEl13= localStorage.getItem("inputValue13")
    storageEl14= localStorage.getItem("inputValue14")
    storageEl15= localStorage.getItem("inputValue15")
    storageEl16= localStorage.getItem("inputValue16")
    storageEl17= localStorage.getItem("inputValue17")
    storageEl18= localStorage.getItem("inputValue18")
    storageEl19= localStorage.getItem("inputValue19")
    storageEl20= localStorage.getItem("inputValue20")
    storageEl21= localStorage.getItem("inputValue21")

    storageEl9 = JSON.parse(storageEl9);
    storageEl10 = JSON.parse(storageEl9);
    storageEl11 = JSON.parse(storageEl9);
    storageEl12 = JSON.parse(storageEl9);
    storageEl13 = JSON.parse(storageEl9);
    storageEl14 = JSON.parse(storageEl9);
    storageEl15 = JSON.parse(storageEl9);
    storageEl16 = JSON.parse(storageEl9);
    storageEl17 = JSON.parse(storageEl9);
    storageEl18 = JSON.parse(storageEl9);
    storageEl19 = JSON.parse(storageEl9);
    storageEl20 = JSON.parse(storageEl9);
    storageEl21 = JSON.parse(storageEl9);

 localStorage.clear(storageEl21,storageEl20,storageEl19,storageEl18,storageEl17,storageEl16,storageEl15,storageEl14,storageEl13,storageEl12,storageEl11,storageEl10,storageEl9)
};

function clickButton9(event){
    event.preventDefault();
   input9Value = input9El.value
    saveInput9();
};
function clickButton10(event){
    event.preventDefault();
    input10Value= input10El.value
    saveInput10();
};
function clickButton11(event){
    event.preventDefault();
    input11Value= input11El.value
    saveInput11();
};
function clickButton12(event){
    event.preventDefault();
    input12Value= input12El.value
    saveInput12();
};
function clickButton13(event){
    event.preventDefault();
    input13Value= input13El.value
    saveInput13();
};
function clickButton14(event){
    event.preventDefault();
    input14Value= input14El.value
    saveInput14();
};
function clickButton15(event){
    event.preventDefault();
    input15Value= input15El.value
    saveInput15()
};
function clickButton16(event){
    event.preventDefault();
    input16Value= input16El.value
    saveInput16()
};
function clickButton17(event){
    event.preventDefault();
    input17Value= input17El.value
    saveInput17()
};
function clickButton18(event){
    event.preventDefault();
    input18Value= input18El.value
    saveInput18()
};
function clickButton19(event){
    event.preventDefault();
    input19Value= input19El.value
    saveInput19()
};
function clickButton20(event){
    event.preventDefault();
    input20Value= input20El.value
    saveInput20()
};
function clickButton21(event){
    event.preventDefault();
    input21Value= input21El.value
    saveInput21()
};



var saveInput9 = function (){
    localStorage.setItem("input9Value",JSON.stringify(input9Value));

};
var saveInput10 = function (){
    localStorage.setItem("input10Value",JSON.stringify(input10Value));

};
var saveInput11 = function (){
    localStorage.setItem("input11Value",JSON.stringify(input11Value));

};
var saveInput12 = function (){
    localStorage.setItem("input12Value",JSON.stringify(input12Value));

};var saveInput13 = function (){
    localStorage.setItem("input13Value",JSON.stringify(input13Value));

};
var saveInput14 = function (){
    localStorage.setItem("input14Value",JSON.stringify(input14Value));

};
var saveInput15 = function (){
    localStorage.setItem("input15Value",JSON.stringify(input15Value));

};
var saveInput16 = function (){
    localStorage.setItem("input16Value",JSON.stringify(input16Value));

};
var saveInput17 = function (){
    localStorage.setItem("input17Value",JSON.stringify(input17Value));
};
var saveInput18 = function (){
    localStorage.setItem("input18Value",JSON.stringify(input18Value));

};
var saveInput19 = function (){
    localStorage.setItem("input19Value",JSON.stringify(input19Value));

};
var saveInput20 = function (){
    localStorage.setItem("input20Value",JSON.stringify(input20Value));

};
var saveInput21 = function (){
    localStorage.setItem("input21Value",JSON.stringify(input21Value));

};

var loadInput9 = function () {
    var savedInput9 = localStorage.getItem("input9Value");
    if (!savedInput9) {
      return false;
    }
    console.log("Saved inputs found!");
    savedInput9 = JSON.parse(savedInput9);
    for (var i = 0; i < savedInput9.length; i++){
        input9El.setAttribute("value",savedInput9);
        
    }
};
var loadInput10 = function () {
    var savedInput10 = localStorage.getItem("input10Value");
    if (!savedInput10) {
      return false;
    }
    console.log("Saved inputs found!");
    savedInput10 = JSON.parse(savedInput10);
    for (var i = 0; i < savedInput10.length; i++){
        input10El.setAttribute("value",savedInput10);
    }
};
var loadInput11 = function () {
    var savedInput11 = localStorage.getItem("input11Value");
    if (!savedInput11) {
      return false;
    }
    console.log("Saved inputs found!");
    savedInput11 = JSON.parse(savedInput11);
    for (var i = 0; i < savedInput11.length; i++){
        input11El.setAttribute("value",savedInput11);
    }
};
var loadInput12 = function () {
    var savedInput12 = localStorage.getItem("input12Value");
    if (!savedInput12) {
      return false;
    }
    console.log("Saved inputs found!");
    savedInput12 = JSON.parse(savedInput12);
    for (var i = 0; i < savedInput12.length; i++){
        input12El.setAttribute("value",savedInput12);
    }
};
var loadInput13 = function () {
    var savedInput13 = localStorage.getItem("input13Value");
    if (!savedInput13) {
      return false;
    }
    console.log("Saved inputs found!");
    savedInput13 = JSON.parse(savedInput13);
    for (var i = 0; i < savedInput13.length; i++){
        input13El.setAttribute("value",savedInput13);
    }

};
var loadInput14 = function () {
    var savedInput14 = localStorage.getItem("input14Value");
    if (!savedInput14) {
      return false;
    }
    console.log("Saved inputs found!");
    savedInput14 = JSON.parse(savedInput14);
    for (var i = 0; i < savedInput14.length; i++){
        input14El.setAttribute("value",savedInput14);
    }
};
var loadInput15 = function () {
    var savedInput15 = localStorage.getItem("input15Value");
    if (!savedInput15) {
      return false;
    }
    console.log("Saved inputs found!");
    savedInput15 = JSON.parse(savedInput15);
    for (var i = 0; i < savedInput15.length; i++){
        input15El.setAttribute("value",savedInput15);
    }
};
var loadInput16 = function () {
    var savedInput16 = localStorage.getItem("input16Value");
    if (!savedInput16) {
      return false;
    }
    console.log("Saved inputs found!");
    savedInput16 = JSON.parse(savedInput16);
    for (var i = 0; i < savedInput16.length; i++){
        input16El.setAttribute("value",savedInput16);
    }
};
var loadInput17 = function () {
    var savedInput17 = localStorage.getItem("input17Value");
    if (!savedInput17) {
      return false;
    }
    console.log("Saved inputs found!");
    savedInput17 = JSON.parse(savedInput17);
    for (var i = 0; i < savedInput17.length; i++){
        
        input17El.setAttribute("value",savedInput17);
    }
};
var loadInput18 = function () {
    var savedInput18 = localStorage.getItem("input18Value");
    if (!savedInput18) {
      return false;
    }
    console.log("Saved inputs found!");
    savedInput18 = JSON.parse(savedInput18);
    for (var i = 0; i < savedInput18.length; i++){
        input18El.setAttribute("value",savedInput18);
    }
};
var loadInput19 = function () {
    var savedInput19 = localStorage.getItem("input19Value");
    if (!savedInput19) {
      return false;
    }
    console.log("Saved inputs found!");
    savedInput19 = JSON.parse(savedInput19);
    for (var i = 0; i < savedInput19.length; i++){
        input19El.setAttribute("value",savedInput19);
    }
};
var loadInput20 = function () {
    var savedInput20 = localStorage.getItem("input20Value");
    if (!savedInput20) {
      return false;
    }
    console.log("Saved inputs found!");
    savedInput20 = JSON.parse(savedInput20);
    for (var i = 0; i < savedInput20.length; i++){
        input20El.setAttribute("value",savedInput20);
    }
};
var loadInput21 = function () {
    var savedInput21 = localStorage.getItem("input21Value");
    if (!savedInput21) {
      return false;
    }
    console.log("Saved inputs found!");
    savedInput21 = JSON.parse(savedInput21);
    for (var i = 0; i < savedInput21.length; i++){
       
        input21El.setAttribute("value",savedInput21);
    }
};


button9El.addEventListener("click", clickButton9);
button10El.addEventListener("click", clickButton10);
button11El.addEventListener("click", clickButton11);
button12El.addEventListener("click", clickButton12);
button13El.addEventListener("click", clickButton13);
button14El.addEventListener("click", clickButton14);
button15El.addEventListener("click", clickButton15);
button16El.addEventListener("click", clickButton16);
button17El.addEventListener("click", clickButton17);
button18El.addEventListener("click", clickButton18);
button19El.addEventListener("click", clickButton19);
button20El.addEventListener("click", clickButton20);
button21El.addEventListener("click", clickButton21);
deleteButtonEl.addEventListener("click", clickdelete);
loadInput9();
loadInput10();
loadInput11();
loadInput12(); 
loadInput13();
loadInput14();
loadInput15();
loadInput16();
loadInput17();
loadInput18();
loadInput19();
loadInput20();
loadInput21();
