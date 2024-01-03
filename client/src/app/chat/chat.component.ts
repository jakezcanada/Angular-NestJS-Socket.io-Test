import { Component, OnInit } from '@angular/core';
import {io, Socket} from 'socket.io-client';
import {Observable} from "rxjs";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  private socket: Socket;
  messages: string[] = [];
  newMessage: string = '';

  constructor() {
    this.socket = io('http://localhost:3000');
  }

  ngOnInit() {
    this.socket.on('newMessage', (message: string) => {
      this.messages.push(message);
    });
  }

  sendMessage() {
    this.socket.emit('sendMessage', this.newMessage);
    this.newMessage = '';
  }
}
