function plus(){
  var a= document.getElementById("form").style.visibility;
  if(a==="visible")
  document.getElementById("form").style.visibility="hidden"
else 
document.getElementById("form").style.visibility="visible";
}


function add(){
var li = document.createElement("li");
var span = document.createElement("button");
var txt = document.createTextNode("X");

span.appendChild(txt)
span.className = "btn1";
li.appendChild(span)

var i;
for(i=0;i<li.length;i++)
li[i]

var inputValue = document.getElementById("input").value;
var t = document.createTextNode(inputValue);
li.appendChild(t);

if (inputValue =='') {alert("You must write something!")}
else{
    document.getElementById("ul").appendChild(li);}
document.getElementById("input").value = "";

var close = document.getElementsByClassName("btn1");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}
var list = document.querySelector('ul');

list.addEventListener('click', function(d) {
  if (d.target.tagName === 'LI') {
    d.target.classList.toggle('checked');
  }
}, false);


}

