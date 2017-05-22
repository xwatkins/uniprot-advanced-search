var fs = require('fs');
var data = JSON.parse(fs.readFileSync('advanced_search_data.json', 'utf8'));
traverseTree(data.members);
console.log(JSON.stringify(data));

function traverseTree(data) {
  for (var i=0; i< data.length; i++) {
    data[i].id = Math.random().toString(36).substring(7);
    if(data[i].members) {
      traverseTree(data[i].members);
    }
  }
}
