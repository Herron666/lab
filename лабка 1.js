function button ()
{
let sum = parseInt(document.getElementById("money").value); 
let result = sum * 20 / 100;
 let output = document.getElementById("output");
 output.innerText = `${result}`
}
