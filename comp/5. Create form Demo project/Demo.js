document.addEventListener("DOMContentLoaded", () => {
    loadTodos(); // โหลดรายการ To-Do จาก LocalStorage เมื่อเปิดหน้าเว็บ
    fetchUsers(); // ดึงข้อมูลผู้ใช้จาก API เมื่อหน้าเว็บโหลด
  });
  
  
  const addTodo = () => {
    const todoInput = document.getElementById("todo-input"); 
    const todoList = document.getElementById("todo-list"); 
    const todoText = todoInput.value.trim(); // ตัดช่องว่างออก
    if (todoText) {  // ถ้ามีค่าที่พิมพ์มา
      const li = document.createElement("li"); 
      li.textContent = todoText;                // กำหนดข้อความ <li>
      const btn = document.createElement("button");
      btn.textContent = "ลบ"; 
      btn.onclick = () => {
        li.remove(); 
        saveTodos(); 
      };
      li.appendChild(btn);  
      todoList.appendChild(li);  
      todoInput.value = ""; 
      saveTodos();       //บันทึกรายการลง LocalStorag
    }
  };
  
  const saveTodos = () => {
    localStorage.setItem("todos", document.getElementById("todo-list").innerHTML);
  };
  
  const loadTodos = () => {
    const todoList = document.getElementById("todo-list");
    todoList.innerHTML = localStorage.getItem("todos") || "";
    // เพิ่ม Event Listener ให้ปุ่มลบหลังจากโหลดรายการ
    todoList.querySelectorAll("button").forEach((btn) => {
      btn.onclick = () => {
        btn.parentElement.remove();
        saveTodos();
      };
    });
  };

//_____________________________________

const calculateGPA = () => {
  const subjects = ["CSI101", "CSI102", "CSI203", "CSI204", "CSI305"];
  let totalPoints = 0; //คะแนนรวม
  let totalCredits = 0; //หน่วยกิตรวม
  subjects.forEach((sub) => {
    const score = parseFloat(document.getElementById(sub).value) || 0; //ดึงค่าคะแนนจาก input
    let gradePoint =
      score >= 80 ? 4 : //A
      // score >= 75 ? 3.5:
      score >= 70 ? 3 : //B
      // score >= 65 ? 2.5:
      score >= 60 ? 2 : //C
      // score >= 55 ? 1.5:
      score >= 50 ? 1 : //D

      0;                //F
    totalPoints += gradePoint * 3; //คะแนน x หน่วยกิต (แต่ละวิชามี 3 หน่วยกิต) สมมุติ totalPoints = 12 + 9 + 6 + 0 + 12 = 39
    totalCredits += 3;  // เพิ่มหน่วยกิตรวม totalCredits = 3 + 3 + 3 + 3 + 3 = 15
  });
  document.getElementById("gpa-result").textContent = `GPA: ${(
    totalPoints / totalCredits //GPA = 39 / 15 = 2.60
  ).toFixed(2)}`; 
};

//-___________
const fetchUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users"); 
  const users = await response.json(); 
  document.getElementById("user-list").innerHTML = users
    .map(
      (user) =>
        `<li><strong>${user.name}</strong> 
         - Email: ${user.email} <br>
         - Address: ${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}  </li>`
    )
    .join("");
};

//___________________________

const generateLotteryNumber = () => {
  return Array.from({ length: 6 }, () => Math.floor(Math.random() * 10)).join(
    ""
  );
};

document.getElementById("generate-lottery").addEventListener("click", () => {
  const lotteryNumber = generateLotteryNumber(); 
  document.getElementById("lottery-number").textContent = lotteryNumber;
});

document.getElementById("check-lottery").addEventListener("click", () => {
  const userNumber = document.getElementById("user-number").value; 
  const lotteryNumber = document.getElementById("lottery-number").textContent; 
  document.getElementById("lottery-result").textContent =
    userNumber === lotteryNumber ? "ถูกรางวัล!" : "ไม่ถูกรางวัล";
});