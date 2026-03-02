function generateQuiz(){
  const grade=document.getElementById("grade").value;
  const topic=document.getElementById("topic").value||"Hàm số";
  document.getElementById("result").innerHTML=`
    <h3>Đề Toán lớp ${grade}</h3>
    <p><b>Chủ đề:</b> ${topic}</p>
    <ol>
      <li>Khảo sát sự biến thiên và vẽ đồ thị hàm số y = x² - 2x + 1</li>
      <li>Tìm giá trị lớn nhất của hàm số y = -x² + 4x + 1</li>
      <li>Giải phương trình: x² - 5x + 6 = 0</li>
    </ol>
  `;
}
