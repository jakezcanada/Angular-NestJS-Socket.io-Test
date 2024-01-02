import { Component, OnInit } from '@angular/core';
import { io } from 'socket.io-client';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  private socket: any;
  messages: string[] = [];
  newMessage: string = '';

  constructor() {
    this.socket = io('ws://localhost:3000');
  }

  ngOnInit() {
    this.socket.on('message', (message: string) => {
      this.messages.push(message);
    });
  }

  sendMessage() {
    this.socket.emit('message', this.newMessage);
    this.newMessage = '';
  }
}
