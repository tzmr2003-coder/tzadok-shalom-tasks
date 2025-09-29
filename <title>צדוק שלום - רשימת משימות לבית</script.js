// משתנים לשמירת הפניה לאלמנטים ב-HTML
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// פונקציה להוספת משימה
function addTask() {
    // 1. בדיקה אם תיבת הקלט ריקה
    if (inputBox.value === '') {
        alert("חייב לכתוב משימה לפני שמוסיפים אותה!");
    } else {
        // 2. יצירת אלמנט רשימה חדש (<li>)
        let li = document.createElement("li");
        li.innerHTML = inputBox.value; // הכנסת הטקסט מהקלט לאלמנט
        
        // 3. הוספת האלמנט לתוך רשימת המשימות
        listContainer.appendChild(li);

        // 4. יצירת כפתור 'X' למחיקה
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; // תו ה-X
        li.appendChild(span);
    }
    
    // 5. ניקוי תיבת הקלט לאחר ההוספה
    inputBox.value = "";
    
    // 6. שמירת הנתונים
    saveData();
}

// פונקציה שמטפלת בלחיצות על הרשימה (סימון ומחיקה)
listContainer.addEventListener("click", function(e) {
    // אם לחצנו על אלמנט רשימה (<li>)
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked"); // הוספה/הסרה של המחלקה 'checked'
        saveData();
    } 
    // אם לחצנו על כפתור המחיקה (<span>)
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove(); // מחיקת אלמנט האב (כל ה-<li>)
        saveData();
    }
}, false);

// פונקציה לשמירת המשימות בזיכרון המקומי של הדפדפן
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

// פונקציה להצגת המשימות השמורות בכל פעם שהדף נטען
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

// קריאה לפונקציית ההצגה כדי לטעון משימות קיימות
showTask();
