var time=1;
function randX()
{
  return Math.random()*400;
}

function randY()
{
  return Math.random()*400;
}

function joc()
{
  var div1=document.getElementById('leftSide');
  var div2=document.getElementById('rightSide');
  for(var i=0;i<((5*time)-1);i++)
  {
    foto();
  }
  fotoDif();
  time++;
}

function foto()
{
  var xa=randX();
  var xb=randY();

  var aLeft=document.getElementById("leftSide");
  var aL=document.createElement("img");
  aL.src="smile.png";
  aL.style.top=xa+"px";
  aL.style.left=xb+"px";
  aL.addEventListener("click", loose);
  aLeft.appendChild(aL);

  var aRight=document.getElementById("rightSide");
  var aR=document.createElement("img");
  aR.src="smile.png";
  aR.style.top=xa+"px";
  aR.style.left=xb+"px";
  aRight.appendChild(aR);
  console.log("Si");
}

function fotoDif()
{
  var xa=randX();
  var xb=randY();

  var aLeft=document.getElementById("leftSide");
  var aL=document.createElement("img");
  aL.src="smile.png";
  aL.style.top=xa+"px";
  aL.style.left=xb+"px";
  aL.id="si";
  aLeft.appendChild(aL);
  var casa=document.getElementById("si");
  casa.addEventListener("click",borrar);
  casa.addEventListener("click",joc);

}
function borrar()
{
  var aRight=document.getElementById("rightSide");
  while(aRight.childNodes[0])
  {
    aRight.removeChild(aRight.childNodes[0]);
  }


    var aLeft=document.getElementById("leftSide");
    while(aLeft.childNodes[0])
    {
      aLeft.removeChild(aLeft.childNodes[0]);
    }

}


function loose()
{
  if(confirm("Has Perdut! \nJugar un altre cop?: "))
  {
    time=1;
    borrar();
    joc();
  }
}
