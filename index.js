// Get the interactive box and text elements
const The = document.querySelector('#box-and-text');

// Variables to keep track of mouse/touch position and rotation
let isDragging = false;
let lastMouseX = 0;
let lastMouseY = 0;

// Function to handle mouse/touch down event
function onPointerDown(event) {
  isDragging = true;
  lastMouseX = event.clientX || event.touches[0].clientX;
  lastMouseY = event.clientY || event.touches[0].clientY;
}

// Function to handle mouse/touch move event
function onPointerMove(event) {
  if (isDragging) {
    const currentX = event.clientX || event.touches[0].clientX;
    const currentY = event.clientY || event.touches[0].clientY;
    const deltaX = currentX - lastMouseX;
    const deltaY = currentY - lastMouseY;
    
    // Update box rotation based on movement
    const TheRotation = The.getAttribute('rotation');
    The.setAttribute('rotation', {
      x: TheRotation.x + deltaY * 0.2,
      y: TheRotation.y + deltaX * 0.2,
      z: TheRotation.z
    });
    lastMouseX = currentX;
    lastMouseY = currentY;
  }
}

// Function to handle mouse/touch up event
function onPointerUp() {
  isDragging = false;
}

// Add event listeners for mouse and touch events
document.addEventListener('mousedown', onPointerDown);
document.addEventListener('mousemove', onPointerMove);
document.addEventListener('mouseup', onPointerUp);

document.addEventListener('touchstart', onPointerDown);
document.addEventListener('touchmove', onPointerMove);
document.addEventListener('touchend', onPointerUp);

var tpic=1;
//Sự kiện nft
document.addEventListener('DOMContentLoaded', function () {
  // Lấy tất cả các thẻ NFT
  const nftMarkers = document.querySelectorAll('a-nft');

  // Lấy thẻ div cần hiển thị
  const confirmationDiv = document.querySelector('.kt');
  const kq = document.querySelector('.kq');

  nftMarkers.forEach((marker, index) => {
    marker.addEventListener('markerFound', () => {
      console.log('NFT marker found at position:', index + 1); 
      tpic=index+1;
      loadQuestionsByTopic(tpic);
      // Hiển thị thẻ div khi tìm thấy marker
      confirmationDiv.style.display = 'block';
      kq.style.display = 'block';
    });

    marker.addEventListener('markerLost', () => {
      console.log('NFT marker lost!');
      // Ẩn thẻ div khi mất marker
      confirmationDiv.style.display = 'none';
      kq.style.display = 'none';
    });
  });
});

function addt() {
  const div = document.querySelector('.cau-hoi'); 
  const div1 = document.querySelector('.one');  
  if (div.classList.contains('d-none')) {
    div.classList.remove('d-none'); // Nếu có 'd-none' thì xóa
  } else {
    div.classList.add('d-none'); // Nếu không có thì thêm
  }

  // Kiểm tra và thay đổi class 'd-none' của div .one
  if (div1.classList.contains('d-none')) {
    div1.classList.remove('d-none'); // Nếu có 'd-none' thì xóa
  } else {
    div1.classList.add('d-none'); // Nếu không có thì thêm
  }
}
//Bộ câu hỏi
const questions = [
  {
    topic: 1,
    question: "Năm nào Phan Bội Châu thành lập phong trào Duy Tân?",
    answers: ["A. 1900", "B. 1904", "C. 1912", "D. 1925"],
    correct: 2 // Đáp án đúng là "B. 1904"
  },
  {
    topic: 1,
    question: "Phong trào Đông Du do Phan Bội Châu phát động có mục đích gì?",
    answers: ["A. Đưa thanh niên sang Pháp học tập", "B. Đưa thanh niên sang Nhật học tập", "C. Đưa thanh niên sang Trung Quốc học tập", "D. Đưa thanh niên sang Mỹ học tập"],
    correct: 2 // Đáp án đúng là "B. Đưa thanh niên sang Nhật học tập"
  },
  {
    topic: 1,
    question: "Phan Bội Châu bị bắt và giam lỏng tại đâu vào năm 1925?",
    answers: ["A. Hà Nội", "B. Huế", "C. Sài Gòn", "D. Thượng Hải"],
    correct: 4 // Đáp án đúng là "D. Thượng Hải"
  },
  // Topic 2
  // Phan Châu Trinh (Topic 2)
  {
    topic: 2,
    question: "Năm nào Phan Châu Trinh đỗ Phó bảng và từ chức quan để chống Pháp?",
    answers: ["A. 1900", "B. 1901", "C. 1906", "D. 1911"],
    correct: 2 // Đáp án đúng là "B. 1901"
  },
  {
    topic: 2,
    question: "Phan Châu Trinh phát động phong trào Duy Tân vào năm nào?",
    answers: ["A. 1901", "B. 1905", "C. 1906", "D. 1925"],
    correct: 3 // Đáp án đúng là "C. 1906"
  },
  {
    topic: 2,
    question: "Năm 1925, Phan Châu Trinh bị Pháp bắt, nhưng sau đó ông tiếp tục làm gì?",
    answers: ["A. Vận động vũ trang", "B. Hoạt động giáo dục", "C. Lập đảng chính trị", "D. Lãnh đạo phong trào chống Pháp"],
    correct: 2 // Đáp án đúng là "B. Hoạt động giáo dục"
  }
];

let currentQuestionIndex = 0;
let currentTopicQuestions = [];
let daDung = 0;
function loadQuestionsByTopic(tpic) {
  currentQuestionIndex = 0; // Reset câu hỏi
  daDung = 0;
  currentTopicQuestions = questions.filter(q => q.topic == tpic); // Lọc câu hỏi theo topic
  
  if (currentTopicQuestions.length > 0) {
    loadQuestion(currentTopicQuestions[currentQuestionIndex]);
  } else {
    alert("Không có câu hỏi nào cho topic này!");
  }
}
function loadQuestion(question) {
  const noiDungCauHoi = document.querySelector('.noidungcauhoi');
  const cl1 = document.getElementById('cl1');
  const cl2 = document.getElementById('cl2');
  const cl3 = document.getElementById('cl3');
  const cl4 = document.getElementById('cl4');

  // Cập nhật nội dung câu hỏi và đáp án
  noiDungCauHoi.textContent = question.question;
  cl1.textContent = question.answers[0];
  cl2.textContent = question.answers[1];
  cl3.textContent = question.answers[2];
  cl4.textContent = question.answers[3];
}

// Hàm chuyển câu hỏi tiếp theo
function nextQuestion() {
  if (currentQuestionIndex < currentTopicQuestions.length - 1) {
    currentQuestionIndex++;
    loadQuestion(currentTopicQuestions[currentQuestionIndex]);
  } else {
    addt()
  }
}

// Lấy tất cả các nút câu trả lời
const answerButtons = document.querySelectorAll('.da');

// Lắng nghe sự kiện click cho từng nút
answerButtons.forEach(button => {
  button.addEventListener('click', function() {
    const selectedValue = parseInt(this.value); // Lấy giá trị của nút bấm
    const thongbao = document.querySelector('.thongbao'); 
    if (selectedValue == currentTopicQuestions[currentQuestionIndex].correct) {
      // Hiển thị thông báo
      daDung++;
      CapNhatThongBao("T")
      thongbao.classList.remove('d-none');
      // Ẩn thông báo sau 2 giây
      setTimeout(() => {
        thongbao.classList.add('d-none');
        nextQuestion()
      }, 1500);
    }
    else {
      // Hiển thị thông báo
      CapNhatThongBao("F")
      thongbao.classList.remove('d-none');
      // Ẩn thông báo sau 2 giây
      setTimeout(() => {
        thongbao.classList.add('d-none');
        nextQuestion()
      }, 1500);
    }
  });
});

function CapNhatThongBao(string){
  const tb = document.querySelector('.hientb');
  const checkm = document.querySelector('.checkmark');
  const checkx = document.querySelector('.checkx');
  const kq = document.querySelector('.kq');
  const dapandung = document.querySelector('.checktrue');
  if (string=="T"){
    tb.textContent = "Đáp án đúng";
    checkx.classList.add('d-none');
    checkm.classList.remove('d-none');
  }
  else{
    tb.textContent = "Đáp án sai";
    checkm.classList.add('d-none');
    checkx.classList.remove('d-none');
  }
  dapandung.textContent = "Bạn đã đúng "+ daDung +"/3";
  kq.textContent = "Bạn đã đúng "+ daDung +"/3";
  
}
// Gọi hàm này để nạp câu hỏi đầu tiên theo topic
loadQuestionsByTopic(1); // Mặc định là topic 1
