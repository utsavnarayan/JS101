var all = ``;

var count = {};
for (word of all.split(' ')){
if (word in count){
count[[word]]++;
}
else{
count[[word]]=1;
}
}
var sorted = [];
for (word in count){
sorted.push([word,count[word]]);
}
sorted.sort(function(a,b){return a[1]>b[1]});
console.log(sorted);
