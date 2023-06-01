import * as Config from "./config.js";

const startupDiv = document.getElementById("startup");
startupDiv.innerHTML = "<h3>연결 정보</h3>";

const displayConfig = async () => {
  const res = await Config.getServerConfig();
  if (res.useWebSocket) {
    startupDiv.innerHTML += "<li>Signaling Protocol : <em>WebSocket</em></li>";
  } else {
    startupDiv.innerHTML += "<li>Signaling Protocol : <em>HTTP</em></li>";
  }

  const mode = res.startupMode.replace(/^./, res.startupMode[0].toUpperCase());
  startupDiv.innerHTML += `<li>Signaling Mode : <em>${mode}</em></li>`;
};

displayConfig();