function calCircle() {
  let radius = parseFloat(prompt("ป้อนค่ารัศมี:"));
  if (isNaN(radius) || radius <= 0) {
    alert("กรุณาป้อนค่ารัศมีที่ถูกต้อง!");
    return;
  }
  let area = Math.PI * radius * radius;
  document.getElementById("output").innerText = `พื้นที่วงกลม = ${area.toFixed(
    2
  )}`;
}

function checkAge() {
  let age = parseInt(prompt("ป้อนอายุของคุณ:"));
  if (isNaN(age)) {
    alert("กรุณาป้อนตัวเลขอายุที่ถูกต้อง!");
    return;
  }
  let category = age < 13 ? "เด็ก" : age <= 19 ? "วัยรุ่น" : "ผู้ใหญ่";
  document.getElementById("output").innerText = `คุณคือ: ${category}`;
}

function checkEvenOdd() {
  let number = parseInt(prompt("ป้อนตัวเลข:"));
  if (isNaN(number)) {
    alert("กรุณาป้อนตัวเลขที่ถูกต้อง!");
    return;
  }
  let result = number % 2 === 0 ? "เลขคู่" : "เลขคี่";
  document.getElementById("output").innerText = `${number} เป็น ${result}`;
}

function showNumbers() {
  let result = "";
  for (let i = 1; i <= 10; i++) {
    result += i + " ";
  }
  document.getElementById("output").innerText = result;
}

function startWhileLoop() {
  let result = "";
  while (true) {
    let input = prompt("พิมพ์ข้อความ (พิมพ์ 'exit' เพื่อออก): ");
    if (input.toLowerCase() === "exit") break; // ป้อนข้อความ 'exit' เพื่อออก
    result += input + "\n";
  }
  document.getElementById("output").innerText = result || "ออกจากโปรแกรมแล้ว";
}

function sortNumbers() {
  let numbers = Array.from({ length: 10 }, () =>
    Math.floor(Math.random() * 100)
  );
  document.getElementById("output").innerText =
    "ก่อนเรียง: " + numbers.join(", ");

  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = 0; j < numbers.length - i - 1; j++) {
      if (numbers[j] > numbers[j + 1]) {
        [numbers[j], numbers[j + 1]] = [numbers[j + 1], numbers[j]];
      }
    }
  }

  setTimeout(() => {
    document.getElementById("output").innerText +=
      "\nหลังเรียง: " + numbers.join(", ");
  }, 500);
}

function calFactorial() {
  function factorial(n) {
    return n === 0 ? 1 : n * factorial(n - 1);
  }

  let num = parseInt(prompt("ป้อนตัวเลขเพื่อหาค่า Factorial:"));
  if (isNaN(num) || num < 0) {
    alert("กรุณาป้อนตัวเลขที่ถูกต้อง!");
    return;
  }
  document.getElementById(
    "output"
  ).innerText = `Factorial(${num}) = ${factorial(num)}`;
}

function calFibonacci() {
  function fibonacci(n) {
    return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2); //เงื่อนไข ? ค่าถ้าจริง : ค่าถ้าเท็จ;
  }

  let num = parseInt(prompt("ป้อนจำนวน Fibonacci:"));
  if (isNaN(num) || num < 0) {
    alert("กรุณาป้อนตัวเลขที่ถูกต้อง!");
    return;
  }
  document.getElementById(
    "output"
  ).innerText = `Fibonacci(${num}) = ${fibonacci(num)}`;
}

function divideNumbers(a, b) {
  try {
    console.log("เริ่มต้นการคำนวณ...");

    if (b === 0) {
      throw new Error("หารด้วยศูนย์ไม่ได้!");
    }

    let result = a / b;
    console.log(`ผลลัพธ์: ${result}`);

    return result;
  } catch (error) {
    console.error("เกิดข้อผิดพลาด:", error.message);
    return null;
  } finally {
    console.log("สิ้นสุดการคำนวณ");
  }
}

console.log(divideNumbers(10, 2)); //  คำนวณได้ปกติ
console.log(divideNumbers(10, 0)); //  Error: หารด้วยศูนย์ไม่ได้!
