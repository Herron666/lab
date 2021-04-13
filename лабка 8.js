let A=[];
function RandomInt(minValue, maxValue){
    return Math.floor((maxValue-minValue)*Math.random()+minValue);
}
function Array1(){
        let b=parseInt(document.getElementById("add").value);
        let sum=0
        let li="";
        let A=[];
        for(let i=0;i<b;i++){
            A.push(RandomInt(1, 10));
        }
        for(let i=0;i<b;i++){
            if(A[i]==1){
                A[i]="Іван";
                sum++;
            }
            else if(A[i]==2){
                A[i]="Оля";               
            }
            else if(A[i]==3){
                A[i]="Саша";               
            }
            else if(A[i]==4){
                A[i]="Ігор";               
            }
            else if(A[i]==5){
                A[i]="Женя";               
            }
            else if(A[i]==6){
                A[i]="Дана";               
            }
            else if(A[i]==7){
                A[i]="Міша";               
            }
            else if(A[i]==8){
                A[i]="Даня";               
            }
            else if(A[i]==9){
                A[i]="Толік";               
            }else if(A[i]==10){
                A[i]="Вовочка";               
            }

        }
        document.getElementById("result").innerText=`Імя Іван зустрічається ${sum} раз`
        for(let i=0;i<b;i++){
            li+=`<li>${A[i]}<li>`
        }
        document.getElementById("list").innerHTML=li;
}