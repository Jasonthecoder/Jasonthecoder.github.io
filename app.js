fetch('https://api.mlab.com/api/1/databases/gimme_dat_gift/collections/dudeprofiles?apiKey=JX47raqOVbTIWCRm164R6e7ThD3AZydC')
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
