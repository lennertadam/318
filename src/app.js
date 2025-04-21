/*
* File: app.js
* Author: Lennert Ádám
* Copyright: 2025, Lennert Ádám
* Group: Szoft 1/N
* Date: 2025-04-21
* Github: https://github.com/lennertadam/318
* Licenc: MIT
*/

const height=document.querySelector("#height");
const radius=document.querySelector("#radius");
const result=document.querySelector("#result");
const calc=document.querySelector("#calc");



calc.addEventListener("click", ()=>{
    let height_num=Number(height.value);
    let rad_num=Number(radius.value);
    //let result_num=2*Math.PI*rad_num*(rad_num+height_num);
    let result_num=(2*Math.PI*Math.pow(rad_num,2))+(2*Math.PI*rad_num*height_num);
    result.value=result_num
});

