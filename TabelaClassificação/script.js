
function pontos(a){
	let i = a*3;
  return i ;
}

function saldo(a, b){
 let i = a - b;
  return i;
}

  document.getElementById("pt 1").innerHTML  = pontos({vitorias1});
  document.getElementById("sr 1").innerHTML  = saldo({Rv1}, {Rp1});
  document.getElementById("pt 2").innerHTML  = pontos({vitorias2});
  document.getElementById("sr 2").innerHTML  = saldo({Rv2}, {Rp2});
    document.getElementById("pt 3").innerHTML  = pontos({vitorias3});
  document.getElementById("sr 3").innerHTML  = saldo({Rv3}, {Rp3});
  document.getElementById("pt 4").innerHTML  = pontos({vitorias4});
  document.getElementById("sr 4").innerHTML  = saldo({Rv4}, {Rp4});
  document.getElementById("pt 5").innerHTML  = pontos({vitorias5});
  document.getElementById("sr 5").innerHTML  = saldo({Rv5}, {Rp5});
  document.getElementById("pt 6").innerHTML  = pontos({vitorias6});
  document.getElementById("sr 6").innerHTML  = saldo({Rv6}, {Rp6});

console.log({Rv5});


