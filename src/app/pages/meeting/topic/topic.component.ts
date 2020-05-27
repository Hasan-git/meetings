import { Topic } from './../../../blocks/interface/topic';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss']
})
export class TopicComponent implements OnInit {

  @Input('topic') topic: Topic;

  constructor() { }

  ngOnInit() {
  }

}
