function Hello()
{
    let output = document.getElementById("output");
    output.innerText = "Привіт";

}
function Wait()
{
    let output = document.getElementById("output")
    output.innerText = "Зачекай";
}
function Goodbye()
{
    let output = document.getElementById("output")
    output.innerText = "До побачення";
}
function Exit()
{
    document.getElementById("goodbye").disabled = true; 
    document.getElementById("wait").disabled = true; 
    document.getElementById("hello").disabled = true; 
    document.getElementById("exit").disabled = true; 
}