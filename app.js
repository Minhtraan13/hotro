function generateQuiz() {
  const grade = document.getElementById("grade")?.value;
  const topic = document.getElementById("topic")?.value || "Hàm số";
  const result = document.getElementById("result");
  if (!result) return;

  result.innerHTML = `
    <h3>Đề Toán lớp ${grade}</h3>
    <p><b>Chủ đề:</b> ${topic}</p>
    <ol>
      <li>Nêu định nghĩa và ví dụ thực tế của chủ đề <b>${topic}</b>.</li>
      <li>Giải một bài tập mức cơ bản liên quan đến <b>${topic}</b>.</li>
      <li>Giải một bài tập vận dụng về <b>${topic}</b> và trình bày các bước rõ ràng.</li>
      <li>Tạo 1 câu hỏi tự luận mở rộng để học sinh khá giỏi thử sức.</li>
    </ol>
  `;
}

function sendMessage() {
  const input = document.getElementById("chatInput");
  const mode = document.getElementById("mode");
  const chatBox = document.getElementById("chatMessages");
  if (!input || !mode || !chatBox) return;

  const text = input.value.trim();
  if (!text) return;

  appendMessage(chatBox, text, "user");
  const reply = buildAiReply(text, mode.value);

  setTimeout(() => {
    appendMessage(chatBox, reply, "ai");
    chatBox.scrollTop = chatBox.scrollHeight;
  }, 300);

  input.value = "";
}

function appendMessage(chatBox, content, role) {
  const div = document.createElement("div");
  div.className = `msg ${role}`;
  div.textContent = content;
  chatBox.appendChild(div);
}

function buildAiReply(text, mode) {
  const q = text.toLowerCase();

  if (q.includes("đạo hàm")) {
    return mode === "quick"
      ? "Đạo hàm là tốc độ thay đổi tức thời của hàm số theo biến số."
      : "Đạo hàm mô tả mức độ thay đổi tức thời của hàm số. Ví dụ vận tốc là đạo hàm của quãng đường theo thời gian. Nếu bạn muốn, mình sẽ hướng dẫn quy tắc tính đạo hàm từ cơ bản đến nâng cao.";
  }

  if (q.includes("tích phân")) {
    return mode === "exam"
      ? "Mẹo luyện thi tích phân: đổi biến gọn, kiểm tra cận, và thử nhẩm đạo hàm ngược của kết quả để soát lỗi."
      : "Tích phân là phép toán ngược của đạo hàm, thường dùng để tính diện tích, thể tích, hoặc tổng tích lũy. Mình có thể cho bạn lộ trình học 7 ngày nếu cần.";
  }

  if (mode === "teacher") {
    return "Mình sẽ giải thích theo kiểu gia sư: đi từ khái niệm → ví dụ đơn giản → bài tập áp dụng. Bạn gửi chủ đề cụ thể để bắt đầu nhé!";
  }

  if (mode === "exam") {
    return "Ở chế độ luyện thi, mình sẽ tập trung dạng bài thường gặp, mẹo tránh bẫy và chiến lược phân bổ thời gian làm bài.";
  }

  return "Mình đã nhận câu hỏi. Hãy nói rõ môn/chủ đề bạn đang cần để mình trả lời ngắn gọn và chính xác hơn.";
}
