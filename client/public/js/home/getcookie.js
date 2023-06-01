function getCookie(name) {
  var cookieName = name + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var cookieArray = decodedCookie.split(";");
  for (var i = 0; i < cookieArray.length; i++) {
    var cookie = cookieArray[i];
    while (cookie.charAt(0) === " ") {
      cookie = cookie.substring(1);
    }
    if (cookie.indexOf(cookieName) === 0) {
      return cookie.substring(cookieName.length, cookie.length);
    }
  }
  return null;
}

// 쿠키에서 값을 가져와서 <h2>에 표시하기
var cookieValue = getCookie("user"); // 쿠키 이름을 변경하여 필요한 쿠키의 값을 가져옵니다
console.log(getCookie("user"));

var greetingMessage = "안녕하세요, " + cookieValue + "님!";
var cookieDisplay = document.getElementById("cookieValue");

if (cookieValue != null) cookieDisplay.textContent = greetingMessage;
