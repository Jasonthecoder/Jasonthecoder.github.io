fetch('https://jasonthecoder.github.io/db.json')
.then(response => response.json())
.then(data => {
  console.log(data);
  for (var i = 0; i < data.length; i++) {

   var node = document.createElement("P");
   var textnode = document.createTextNode(data[i].key + '-' + data[i].medi);
   node.appendChild(textnode);
   document.getElementById("x").appendChild(node);
  }
 })
.catch(error => {
  console.log('ERROR',error);
});
