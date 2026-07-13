// let num1=10
// let num2=32;
// [num1,num2]=[num2,num1];
// console.log({num1,num2});
const students = [
  { name: "Lokesh", mark: 85 },
  { name: "Arun", mark: 92 },
  { name: "Priya", mark: 78 }
];
let stds=[]
for (const ele of students) {
    const {name,mark}=ele
    if(mark>85){
        stds.push(ele)
    }
}
console.log(stds);
