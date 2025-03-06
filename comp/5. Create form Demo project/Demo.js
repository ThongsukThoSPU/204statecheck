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
  
  // const saveTodos = () => {
  //   localStorage.setItem("todos", document.getElementById("todo-list").innerHTML);
  // };
  
  // const loadTodos = () => {
  //   const todoList = document.getElementById("todo-list");
  //   todoList.innerHTML = localStorage.getItem("todos") || "";
  //   // เพิ่ม Event Listener ให้ปุ่มลบหลังจากโหลดรายการ
  //   todoList.querySelectorAll("button").forEach((btn) => {
  //     btn.onclick = () => {
  //       btn.parentElement.remove();
  //       saveTodos();
  //     };
  //   });
  // };

  const saveTodos = () => {
    const tasks = [];
    document.querySelectorAll("#todo-list li").forEach((li) => {
      tasks.push({
        text: li.firstChild.textContent.trim(),
        completed: li.classList.contains("completed"),
      });
    });
    localStorage.setItem("todos", JSON.stringify(tasks));
  };
  
  const loadTodos = () => {
    const todoList = document.getElementById("todo-list");
    todoList.innerHTML = ""; // เคลียร์ก่อนโหลดใหม่
    const tasks = JSON.parse(localStorage.getItem("todos")) || [];
  
    tasks.forEach((task) => {
      const li = document.createElement("li");
      li.textContent = task.text;
  
      if (task.completed) {
        li.classList.add("completed");
      }
  
      const completeButton = document.createElement("button");
      completeButton.textContent = task.completed ? "ยกเลิกทำเสร็จ" : "ทำเสร็จแล้ว";
      completeButton.className = "complete-btn";
      completeButton.onclick = function () {
        li.classList.toggle("completed");
        completeButton.textContent = li.classList.contains("completed")
          ? "ยกเลิกทำเสร็จ"
          : "ทำเสร็จแล้ว";
        saveTodos();
      };
  
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "ลบ";
      deleteButton.className = "delete-btn";
      deleteButton.onclick = function () {
        todoList.removeChild(li);
        saveTodos();
      };
  
      li.appendChild(completeButton);
      li.appendChild(deleteButton);
      todoList.appendChild(li);
    });
  };
  
  // โหลดรายการเมื่อหน้าเว็บโหลดเสร็จ
  document.addEventListener("DOMContentLoaded", loadTodos);
  

//_____________________________________

// const calculateGPA = () => {
//   const subjects = ["CSI101", "CSI102", "CSI203", "CSI204", "CSI305"];
//   let totalPoints = 0; //คะแนนรวม
//   let totalCredits = 0; //หน่วยกิตรวม
//   subjects.forEach((sub) => {
//     const score = parseFloat(document.getElementById(sub).value) || 0; //ดึงค่าคะแนนจาก input
//     let gradePoint =
//       score >= 80 ? 4 : //A
//       // score >= 75 ? 3.5:
//       score >= 70 ? 3 : //B
//       // score >= 65 ? 2.5:
//       score >= 60 ? 2 : //C
//       // score >= 55 ? 1.5:
//       score >= 50 ? 1 : //D

//       0;                //F
//     totalPoints += gradePoint * 3; //คะแนน x หน่วยกิต (แต่ละวิชามี 3 หน่วยกิต) สมมุติ totalPoints = 12 + 9 + 6 + 0 + 12 = 39
//     totalCredits += 3;  // เพิ่มหน่วยกิตรวม totalCredits = 3 + 3 + 3 + 3 + 3 = 15
//   });
//   document.getElementById("gpa-result").textContent = `GPA: ${(
//     totalPoints / totalCredits //GPA = 39 / 15 = 2.60
//   ).toFixed(2)}`; 
// };

const subjectCredits = {
  CSI101: 3,
  CSI102: 3,
  CSI203: 4,
  CSI204: 2,
  CSI305: 3,
};

const calculateGPA = () => {
  const subjects = Object.keys(subjectCredits);
  let totalPoints = 0;
  let totalCredits = 0;

  subjects.forEach((sub, index) => {
    const score = parseFloat(document.getElementById(sub).value) || 0;
    const credits = subjectCredits[sub]; // ดึงน้ำหนักหน่วยกิตของวิชานี้
    let gradePoint;
    let gradeLetter;

    if (score >= 80) {
      gradePoint = 4.0;
      gradeLetter = "A";
    } else if (score >= 75) {
      gradePoint = 3.5;
      gradeLetter = "B+";
    } else if (score >= 70) {
      gradePoint = 3.0;
      gradeLetter = "B";
    } else if (score >= 65) {
      gradePoint = 2.5;
      gradeLetter = "C+";
    } else if (score >= 60) {
      gradePoint = 2.0;
      gradeLetter = "C";
    } else if (score >= 55) {
      gradePoint = 1.5;
      gradeLetter = "D+";
    } else if (score >= 50) {
      gradePoint = 1.0;
      gradeLetter = "D";
    } else {
      gradePoint = 0.0;
      gradeLetter = "F";
    }

    totalPoints += gradePoint * credits;
    totalCredits += credits;

    // อัปเดตแสดงผลเกรดตัวอักษรแต่ละวิชา
    document.getElementById(`${index + 1}output`).textContent = `เกรด: ${gradeLetter} (หน่วยกิต ${credits})`;
  });

  // คำนวณ GPA
  const gpa = totalPoints / totalCredits;
  document.getElementById("gpa-result").textContent = `GPA: ${gpa.toFixed(2)}`;
};


//-_____________________________________________________
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

// const generateLotteryNumber = () => {
//   return Array.from({ length: 6 }, () => Math.floor(Math.random() * 10)).join(
//     ""
//   );
// };

// document.getElementById("generate-lottery").addEventListener("click", () => {
//   const lotteryNumber = generateLotteryNumber(); 
//   document.getElementById("lottery-number").textContent = lotteryNumber;
// });

// document.getElementById("check-lottery").addEventListener("click", () => {
//   const userNumber = document.getElementById("user-number").value; 
//   const lotteryNumber = document.getElementById("lottery-number").textContent; 
//   document.getElementById("lottery-result").textContent =
//     userNumber === lotteryNumber ? "ถูกรางวัล!" : "ไม่ถูกรางวัล";
// });

// ฟังก์ชันสุ่มเลขลอตเตอรี่ (สร้าง 6 ตัวเลขแบบสุ่ม)


// ฟังก์ชันสุ่มเลขลอตเตอรี่ (สร้าง 6 ตัวเลขแบบสุ่ม)
const generateLotteryNumber = () => {
  return Array.from({ length: 6 }, () => ({
    value: Math.floor(Math.random() * 10), // เลข 0-9
    locked: false, // ค่าเริ่มต้น: ไม่ล็อค
  }));
};

// ฟังก์ชันอัปเดตหน้าจอแสดงเลขลอตเตอรี่
const updateLotteryDisplay = () => {
  const lotteryContainer = document.getElementById("lottery-number");
  lotteryContainer.innerHTML = ""; // ล้างค่าก่อนแสดงใหม่

  window.lotteryArray.forEach((item, index) => {
    const digitContainer = document.createElement("div");
    digitContainer.style.display = "inline-block";
    digitContainer.style.textAlign = "center";
    digitContainer.style.margin = "5px";

    const button = document.createElement("button");
    button.textContent = item.value;
    button.classList.add("lottery-digit");
    if (item.locked) button.classList.add("locked"); // ถ้าล็อคให้เปลี่ยนสีแดง

    // คลิกเพื่อสลับล็อค/ปลดล็อค
    button.addEventListener("click", () => {
      item.locked = !item.locked;
      updateLotteryDisplay();
    });

    const numberSelector = document.createElement("div");
    numberSelector.classList.add("number-selector");

    for (let i = 0; i < 10; i++) {
      const numButton = document.createElement("button");
      numButton.textContent = i;
      numButton.addEventListener("click", () => {
        item.value = i; // เปลี่ยนค่าเลข
        updateLotteryDisplay();
      });
      numberSelector.appendChild(numButton);
    }

    digitContainer.appendChild(button);
    digitContainer.appendChild(numberSelector);
    lotteryContainer.appendChild(digitContainer);
  });
};

// กดปุ่ม "สุ่มเลข"
document.getElementById("generate-lottery").addEventListener("click", () => {
  window.lotteryArray = window.lotteryArray.map((item) => ({
    value: item.locked ? item.value : Math.floor(Math.random() * 10), // เปลี่ยนเฉพาะที่ไม่ล็อค
    locked: item.locked, // คงค่าล็อคเดิมไว้
  }));

  updateLotteryDisplay();
});

// กดปุ่ม "ตรวจหวย"
document.getElementById("check-lottery").addEventListener("click", () => {
  const userNumber = document.getElementById("user-number").value;
  const lotteryNumber = window.lotteryArray.map((item) => item.value).join("");

  document.getElementById("lottery-result").textContent =
    userNumber === lotteryNumber ? "🎉 ถูกรางวัล!" : "❌ ไม่ถูกรางวัล";
});

// โหลดเลขใหม่ตอนเริ่ม
window.lotteryArray = generateLotteryNumber();
updateLotteryDisplay();

