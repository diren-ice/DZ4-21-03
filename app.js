var tag = [
  "div",
  "a",
  "div",
  "p",
  "h2",
  "a",
  "li",
  "h3",
  "h2",
  "div",
  "p",
  "a",
  "div",
];
var arr = {};
for (var i = 0; i < tag.length; i++) {
  let a = tag[i];
  if (arr[a]) arr[a] += 1;
  else arr[a] = 1;
}
console.log(arr);
let arrTag = Object.values(arr);
let newArr = Object.keys(arr);

for (let i = 0; i < arrTag.length; i++) {
  newArr[i] = newArr[i] + ": " + arrTag[i];
}
let arrObj = { ...newArr };
console.log(arrObj);





