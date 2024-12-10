document.getElementById("btn-change-color").addEventListener("click", function() {
  document.body.style.backgroundColor = rgbColor();
})

function rgbColor(){
// rgb(0, 0, 0)
const red = Math.floor(Math.random() * 255);
const green = Math.floor(Math.random() * 255);
const blue = Math.floor(Math.random() * 255);
return `rgb(${red}, ${green}, ${blue})`;
}



// window.onload = () => {
//   main();
// };

// function main() {
//   const btn =document.getElementById("btn-change-color");

//   btn.addEventListener("click", () => {
//     document.body.style.backgroundColor = rgbColor();
//   })
// }

// function rgbColor(){
//   // rgb(0, 0, 0)
//   const red = Math.floor(Math.random() * 255);
//   const green = Math.floor(Math.random() * 255);
//   const blue = Math.floor(Math.random() * 255);
//   return `rgb(${red}, ${green}, ${blue})`;
//   }