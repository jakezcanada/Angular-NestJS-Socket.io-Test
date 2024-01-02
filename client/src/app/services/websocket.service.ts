import { Injectable } from '@angular/core';
import { Socket } from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WebsocketService {
  private socket: Socket;

  constructor() {
    this.socket = new Socket({ path: '/ws' }); // Replace with your WebSocket server path
  }

  connect(): void {
    this.socket.connect();
  }

  disconnect(): void {
    this.socket.disconnect();
  }

  sendMessage(message: string): void {
    this.socket.emit('message', message);
  }

  receiveMessages(): Observable<string> {
    return new Observable((observer) => {
      this.socket.on('message', (data: string) => {
        observer.next(data);
      });
    });
  }
}
