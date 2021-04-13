function button ()
{
    let sum = parseInt(document.getElementById("money").value);
    for (let i = 0; i < 20; i++)
    {
        sum = sum * 1.2;
        
    }
    document.getElementById("output").innerText = `${sum}`;
}