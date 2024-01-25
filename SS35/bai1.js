function myfunction(){
    let x = document.getElementById("btn1");
    let text ;
    if(isNaN(x) || x<1 ||x>10){
        text = "Input not valid ";
    }else{
        text = "Input Ok";
    }
    document.getElementById("demo").innerHTML=text;
}