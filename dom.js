//examine the document object
//console.dir(document)
//console.log(document.domain);
//console.log(document.URL);
//console.log(document.doctype);
//console.log(document.all);

//GETELEMENTBYID
//console.log(document.getElementById("header-titl
//console.log(b)
//b.innerText="hello";
//b.innerText='Goodbye'
//console.log(b.innerText);
//b.innerHTML='<h3>Nice</h3>';
var header=document.getElementById('main-header');
header.style.borderBottom='solid 3px #000';

//getelementbyclassName
var items=document.getElementsByClassName('list-group-item');
console.log(items)
console.log(items[1])