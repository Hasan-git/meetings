import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.css']
})
export class ChatBoxComponent implements OnInit {

  @Input() users: any[]
  messeges = [
    'The first topic is very important we should discuss it',
    'were you able to download the presentation? ',
    'Do you think all will attend this weekly meeting?',
    'Thanks! :)',
    "I have sent the files for the weekly meeting",
    'This meeting is very important',
    'I will share my notes',
    "Have you finished the mom of the Last meeting",
  ]
  constructor() { }

  ngOnInit() {
    this.randomMessage()
  }

  randomMessage() {
    const random = Math.floor((Math.random() * 10) + 1);
    return this.messeges[random]
  }


}
