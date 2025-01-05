const messageContainer = document.getElementById("message-container");

// ฟังก์ชันที่ใช้เพิ่มข้อความ "สวัสดี" ทีละบรรทัด
function addMessage() {
    messageContainer.textContent += "สวัสดี\n"; // เพิ่มข้อความ "สวัสดี" และเว้นบรรทัด
}

// เรียกฟังก์ชัน addMessage ทุกๆ 1 วินาที
setInterval(addMessage, 1000);
