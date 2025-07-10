let socket: WebSocket | null = null;

export function initWebSocket(
  socketURL: string,
  onMessage: (message: string) => void
) {
  socket = new WebSocket(socketURL);

  socket.onmessage = (event) => {
    onMessage(event.data);
  };

  socket.onopen = () => console.log("Socket connected");
  socket.onerror = (event) => console.error("Socket error", event);
  socket.onclose = () => console.log("Socket closed");
}

export function sendMessage(message: string) {
  socket?.send(message);
}
