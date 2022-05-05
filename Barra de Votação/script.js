var nome = [];
var total = 0;

var red = document.getElementById("red");
var blue = document.getElementById("blue");
var redi=0; var bluei =0;



window.addEventListener('onEventReceived', function (obj) {

let data = obj.detail.event.data;
 let user = data['nick'].toLowerCase();

if (obj.detail.listener !== "message") return;
 if (data["displayName"] == "StreamElements"	) return;

 let message = data["text"];
 const listener = obj.detail.listener.split("-")[0];
 const event = obj.detail.event;
 var command = message.split(" ")[0];   
 var command1 = message.split(" ")[1];    
 var command2 = message.split(" ")[2];


 

if(nome.includes(user)){
 
 
}else{
 
 if(message === '{{opcao1}}' || message === '{{opcao2}}'){
   ++total;
    nome.push(user);
   
   console.log(total);
   if(message === '{{opcao1}}'){	
     ++redi;
   }
   else if(message === '{{opcao2}}'){	
     ++bluei;
     
   }
    blue.innerHTML = porcent(total,bluei) + "%";
     red.innerHTML = porcent(total,redi) + "%";
 }
}


});

function porcent (x,y){
 var f = ((y/x)*100).toFixed(0);
return f;
}

var id = setInterval(frame, 10);
   function frame() {
     red.style.width = porcent(total,redi) + "%";
     blue.style.width = porcent(total,bluei) + "%";
     if(porcent(total,redi) == 100){
       red.style.borderRadius= '30px 30px 30px 30px';
     }else{ red.style.borderRadius= '30px 0px 0px 30px';}
 if(porcent(total,bluei) == 100){
       blue.style.borderRadius= '30px 30px 30px 30px';
     }else{ blue.style.borderRadius= ' 0px 30px 30px 0px';}
     if(porcent(total,redi) == 0){
       red.style.visibility= 'hidden';
     }else{ red.style.visibility= 'visible';}
 if(porcent(total,bluei) == 0){
       blue.style.visibility = 'hidden';
     }else{ blue.style.visibility = 'visible';}
   }

//

