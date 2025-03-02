//2.1

let num1 = String("10");
let num2 = parseInt("3.14");
let str = Boolean(100);

console.log(num1,typeof num1);
console.log(num2, typeof num2);
console.log(str,typeof str);

console.log('-----------------');

console.log(parseInt(num1),typeof parseInt(num1));
console.log(parseFloat(num2),typeof parseFloat(num2));
console.log(String(str),typeof String(str));

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

document.getElementById("2.2output").innerHTML = 
    `<strong>อาร์เรย์ปัจจุบัน:</strong> ${mylist.join(", ")}`;

console.log('-------2.2.2----------');

