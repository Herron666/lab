function ARR(){
    let res=document.getElementById("result");
    let a=1;
    for(let i=2;a>0;i++){
        a=Math.cos(Math.log10(i));
    }
    res.innerText=`${a}`;
}