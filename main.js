    //Get Advice
    let jasonReq=new XMLHttpRequest();
    jasonReq.open("GET","https://api.adviceslip.com/advice");
    jasonReq.send();
  console.log(jasonReq);
  jasonReq.onreadystatechange=function(){
    if(this.readyState===4&&this.status===200){
      
      document.querySelector(".advTxt").appendChild(document.createTextNode(`" ${JSON.parse(jasonReq.response).slip.advice}"`));
      document.querySelector(".id span").appendChild(document.createTextNode(JSON.parse(jasonReq.response).slip.id))
    }
  }
  //New advice
  let btn=document.querySelector(".out");
  btn.onclick=function(){
    window.location.reload();
  }