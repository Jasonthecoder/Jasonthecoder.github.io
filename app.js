fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(data => {
  console.log(data);
  for (var i = 0; i < data.length; i++) {

   var node = document.createElement("P");
   var textnode = document.createTextNode(data[i].name);
   node.appendChild(textnode);
   document.getElementById("x").appendChild(node);
  }
 })
.catch(error => {
  console.log('ERROR',error);
});
