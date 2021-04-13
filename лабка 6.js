let numbers1 = [];
let numbers2 = [];

function AddArray()
{    
    let num1 = parseInt(document.getElementById("array1").value);
    let num2 = parseInt(document.getElementById("array2").value);

    numbers1.push(num1);
    numbers2.push(num2);
}

function comparison()
{
    let a = "";
    let output = document.getElementById("output");
    for(let i = 0; i < 10; i++)
    {
       if(numbers1[i] > numbers2[i])
       {
         a +=String(numbers1[i])
         a +=", "
         
       }
       else
       {
        a +=String(numbers2[i])
        a +=", "
       }

      
    }

    output.innerText = `${a}`
}