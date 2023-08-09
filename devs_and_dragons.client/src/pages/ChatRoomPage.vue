<template>
  <div class="chat-container">
    <div class="chat-messages">
      <div v-for="(message, index) in messages" :key="index" class="message">
        {{ message.content }}
      </div>
    </div>
    <div class="chat-input">
      <input v-model="messageInput" @keyup.enter="sendMessage" placeholder="Type your message">
      <button @click="sendMessage">Send</button>
    </div>
  </div>
</template>


<script>
import io from 'socket.io-client';

export default {
  data() {
    return {
      messages: [],
      messageInput: '',
    };
  },
  created() {

    this.socket = io();

    this.socket.on('chatMessage', (message) => {
      this.messages.push(message);
    });
  },
  methods: {
    sendMessage() {
      if (this.messageInput.trim() !== '') {
        this.socket.emit('chatMessage', {
          content: this.messageInput,
        });
        this.messageInput = '';
      }
    },
  },
  beforeUnmount() {

    if (this.socket) {
      this.socket.disconnect();
    }
  },
};
</script>


<style lang="scss" scoped>
.chat-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 20px;
  box-sizing: border-box;
}

.chat-messages {
  flex: 1;
  overflow-y: auto;
  border: 1px solid #ccc;
  padding: 10px;
}

.message {
  background-color: #f2f2f2;
  border-radius: 8px;
  padding: 5px 10px;
  margin-bottom: 10px;
}

.chat-input {
  display: flex;
  align-items: center;
  gap: 10px;
}

.chat-input input {
  flex: 1;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.chat-input button {
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 12px;
  cursor: pointer;
}

.chat-input button:hover {
  background-color: #0056b3;
}
</style>

