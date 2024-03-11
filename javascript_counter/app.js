document.addEventListener("DOMContentLoaded", function () {
  var count = 0;
  var countDisplay = document.getElementById("count");
  var countButton = document.getElementById("countButton");

  countButton.addEventListener("click", function () {
    console.log("자바스크립트 카운터 버튼 클릭!");
    count++;
    countDisplay.textContent = count < 10 ? "0" + count : count;
  });
});
