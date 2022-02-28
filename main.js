function loginer(){
    var sp=document.getElementById("inputer").value;
    var un=document.getElementById("names").value;
    console.log(sp);
    console.log(un);
    document.getElementById("ghu").innerHTML="<center><span><img src='icon/alert.png' style='width:30px;'></span><span style='color:maroon; font-weight'>This is a warning</span></center>"
    if(un!=""){
    localStorage.setItem("username", un);
    }
    if(sp!=""){
    localStorage.setItem("password", sp);
    }
}