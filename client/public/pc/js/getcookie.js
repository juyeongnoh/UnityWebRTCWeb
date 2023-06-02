console.log("COOKIE !");

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

const ID_cookie = getCookie("connectionID");
const connectionID = "1000" + ID_cookie;
console.log(ID_cookie);
const id_cookieDiplay = document.querySelector(".connection_cookie");

if (ID_cookie != null) id_cookieDiplay.value = connectionID;
