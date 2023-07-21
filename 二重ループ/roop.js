
const num = 9;
for (let i = 1; i <= num; i++) {
  let arr = [];
  arr.push(i);
  for (let j = i + 1; j <= num; j++) {
    arr.push(j);
  }
  console.log(arr);
}
