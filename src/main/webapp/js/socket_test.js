/**
 * 
 */
$(document).ready(function(){
	socket_Text();
});

function socket_Text(){
	// 「WebSocketEx」는 프로젝트 명 : socket_First
	// 「broadsocket」는 호스트 명 : test
	// WebSocket 오브젝트 생성 (자동으로 접속 시작한다. - onopen 함수 호출)
	var webSocket = new WebSocket("ws://localhost:8080/socket");
	// 콘솔 텍스트 에리어 오브젝트
	var messageTextArea = document.getElementById("messageTextArea");
	// WebSocket 서버와 접속이 되면 호출되는 함수
	webSocket.onopen = function(message) {
		// 콘솔 텍스트에 메시지를 출력한다.
		messageTextArea.value += "Server connect...\n";
	};
	// WebSocket 서버와 접속이 끊기면 호출되는 함수
	webSocket.onclose = function(message) {
		// 콘솔 텍스트에 메시지를 출력한다.
		messageTextArea.value += "Server Disconnect...\n";
	};
	// WebSocket 서버와 통신 중에 에러가 발생하면 요청되는 함수
	webSocket.onerror = function(message) {
		// 콘솔 텍스트에 메시지를 출력한다.
		messageTextArea.value += "error...\n";
	};
	/// WebSocket 서버로 부터 메시지가 오면 호출되는 함수
	webSocket.onmessage = function(message) {
		// 콘솔 텍스트에 메시지를 출력한다.
		messageTextArea.value += message.data + "\n";
	};

}
// Send 버튼을 누르면 호출되는 함수
function sendMessage() {
	// 유저명 텍스트 박스 오브젝트를 취득
	//var user = document.getElementById("user");
	// 송신 메시지를 작성하는 텍스트 박스 오브젝트를 취득
	var message = document.getElementById("textMessage");
	// 콘솔 텍스트에 메시지를 출력한다.
	//messageTextArea.value += user.value + "(me) => " + message.value + "\n";
	messageTextArea.value += user.value + "SendToServer => " + message.value + "\n";
	// WebSocket 서버에 메시지를 전송(형식 「{{유저명}}메시지」)
	webSocket.send("{{" + user.value + "}}" + message.value);
	// 송신 메시지를 작성한 텍스트 박스를 초기화한다.
	message.value = "";
}

// Disconnect 버튼을 누르면 호출되는 함수
function disconnect() {
	// WebSocket 접속 해제
	webSocket.close();
}
	
	
	
	
	
