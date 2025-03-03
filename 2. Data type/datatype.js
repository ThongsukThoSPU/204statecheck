//2.1
console.log('-------2.1.1----------');

let num1 = String(10);
let num2 = 3.14;
let str = Boolean(100);

console.log(num1,typeof num1);
console.log(parseInt(num2), typeof num2);
console.log(str,typeof str);

console.log('--------2.1.2---------');

console.log(parseInt(num1),typeof parseInt(num1));
console.log(parseFloat(num2),typeof parseFloat(num2));
console.log(String(str),typeof String(str));

document.getElementById("211output").innerHTML = 
            `<strong>String:</strong> ${num1} <br>
             <strong>Integer:</strong> ${parseInt(num2)} <br>
             <strong>Boolean:</strong> ${str} <br>
             <strong>parseInt("10"):</strong> ${num1} (${typeof num1}) <br>
            <strong>parseFloat(3.14):</strong> ${num2} (${typeof num2}) <br>
            <strong>String(100):</strong> ${str} (${typeof str})`;
             

//__________________________________________________

//2.2
console.log('-------2.2.1----------');

let mylist = ['apple', 'banana', 'cherry'];
    console.log('สร้าง list',mylist);

mylist.push('orange');
mylist.unshift('grape');
    console.log('เพิ่ม หน้า-ท้าย',mylist);

mylist.pop();
mylist.shift();
    console.log('ลบ หน้า-ท้าย',mylist);

mylist[1] = 'lemon';
    console.log('แก้ไข',mylist);

document.getElementById("221output").innerHTML = 
    `<strong>อาร์เรย์ปัจจุบัน:</strong> ${mylist.join(", ")}`;

console.log('-------2.2.2----------');

let employee = {
    name: 'John',
    surname: 'Doe',
    age: 30,
    // position: 'Manager',
    // sal: '5000'
}
console.log('สร้าง object ชื่อ employee',employee);
document.getElementById("2221output").innerHTML = 
    `<strong>Object เริ่มต้น:</strong> ${JSON.stringify(employee)}`;

employee.position = 'Manager';
employee.sal = '5000';
employee.age = 28;
console.log('เพิ่ม-แก้ไข ข้อมูล employee',employee);

document.getElementById("2222output").innerHTML = 
    `<strong>Object ที่มีการแก้ไข:</strong> ${JSON.stringify(employee)}`;

console.log('-------2.2.3----------');
//tuple คือค่าที่สลับที่ไม่ได้ แก้ไขไม่ได้
const mytuple = Object.freeze(['book', '2', true]); //freeze ไม่สามารถแก้ไขได้
    console.log('สร้าง tuple',mytuple);

//set
let set = [1, 1, 1, 2, 2, 3, 3, 3, 4, 5, 5, 4];
    console.log("Array ก่อนใช้ Set:", set);

let uniqueNumbers = [...new Set(set)];
    console.log("Array หลังใช้ Set:", uniqueNumbers)

document.getElementById("223output").innerHTML = `
    <strong>Tuple:</strong> ${JSON.stringify(mytuple)} <br>
    <strong>Array ก่อนใช้ Set:</strong> ${set.join(", ")} <br>
    <strong>Array หลังใช้ Set:</strong> ${uniqueNumbers.join(", ")}`;

console.log('-------2.2.4----------');

let jsonData = `{
    "name": "John",
    "age": 30,
    "city": "New York"
}`;
let jsonObject = JSON.parse(jsonData); //read
jsonObject.age = 25; //update
let jsonStr = JSON.stringify(jsonObject, null, 2); //write
console.log(jsonStr);

document.getElementById("224output").innerHTML = jsonStr;