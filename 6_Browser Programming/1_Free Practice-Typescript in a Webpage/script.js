// This is where you will write your TypeScript code.
const currentTime = new Date();
// Hook into browser functionality
document.querySelector('#time').innerHTML = currentTime.toDateString();
document.querySelector("#myButton").addEventListener("click", () => {
    console.log("Please work");
});
document.querySelector("#myButton2").addEventListener("click", () => {
    console.log("Please work again!!!");
});
//# sourceMappingURL=script.js.map