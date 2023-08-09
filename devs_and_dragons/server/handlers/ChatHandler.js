import { SocketHandler } from "../utils/SocketHandler.js";

let isConnected = true

export class ChatHandler extends SocketHandler {
  constructor(io, socket) {

    super(io, socket)
    this
      .on('Get_Connection_Status', this.getConnectionStatus)
  }

  getConnectionStatus() {
    this.socket.emit('connection_status', isConnected)
    console.log('a user connected')
  }

}