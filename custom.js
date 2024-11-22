let result = document.querySelector("#result"),
   chance = document.querySelector("#chance"),
   user = document.querySelector("#user"),
   playBtn = document.querySelector("#play"),
   resetBtn = document.querySelector("#reset");

let chances = 5;
let gameOver = false;
let history = [];
let computerNum;

function randomNum() {
   computerNum = Math.floor(Math.random() * 100) + 1;
   // console.log(computerNum);
}

randomNum();

playBtn.addEventListener("click", play);

function play() {
   let userNum = parseInt(user.value); // 숫자형으로 변환하여 비교

   // 입력값 검증
   if (isNaN(userNum) || userNum < 1 || userNum > 100) {
      result.textContent = "I SAID. Enter a number between 1 and 100.";
      document.querySelector("#imgBox").src =
         "https://i.pinimg.com/736x/62/50/8b/62508bc188c97ef54f354eaa688fe13a.jpg";
      return;
   }

   // 숫자 중복 체크
   if (history.includes(userNum)) {
      result.textContent = "SAME NUMBER.. R U KIDDING? TRY AGAIN.";
      document.querySelector("#imgBox").src =
         "https://i.pinimg.com/736x/46/3e/db/463edb94a7d372c8b3db3bedd1e79fd6.jpg";
      return;
   }

   history.push(userNum); // 사용자가 입력한 숫자 기록

   // 게임 진행
   if (computerNum > userNum) {
      result.textContent = "UP";
      document.querySelector("#imgBox").src =
         "https://i.pinimg.com/736x/8c/bb/55/8cbb55379ceef3762d0a1bee086f01e6.jpg";
   } else if (computerNum < userNum) {
      result.textContent = "DOWN";
      document.querySelector("#imgBox").src =
         "https://i.pinimg.com/736x/de/85/0b/de850b66200ce259ad6be99c7bdae30c.jpg";
   } else {
      result.textContent = "BINGO...play again?";
      document.querySelector("#imgBox").src =
         "https://i.pinimg.com/736x/ee/d6/55/eed6553563bd24f14ed92e6d9c9f3d9a.jpg";
   }

   chances -= 1; // 기회 차감
   chance.textContent = `You have ${chances} chances`; // 남은 기회 수 설정

   // 기회가 0이 되면 "시작" 버튼 비활성화
   if (chances === 0) {
      playBtn.disabled = true; // 시작 버튼 비활성화
      result.textContent = "GAME OVER NOW YOUR SOUL IS MINE LOL:)";
      document.querySelector("#imgBox").src =
         "https://i.pinimg.com/736x/c7/22/f5/c722f5dcc3c9ca7cbefd9445d26cbe31.jpg";
   }
}

// 리셋 버튼 클릭 시 초기화
resetBtn.addEventListener("click", function () {
   // 게임 초기화
   chances = 5;
   chance.textContent = ``;
   result.textContent = "";
   user.value = "";

   // 새로운 랜덤 숫자 생성
   randomNum();

   // 숫자 기록 초기화
   history = [];

   // 시작 버튼 다시 활성화
   playBtn.disabled = false;

   // 이미지 초기화
   document.querySelector("#imgBox").src = "img/img.png"; // 초기 이미지로 복원
});
