import { Component, OnInit, Input } from '@angular/core';
import { Topic } from 'src/app/blocks/interface/topic';

@Component({
  selector: 'app-pan',
  templateUrl: './pan.component.html',
  styleUrls: ['./pan.component.scss']
})
export class PanComponent implements OnInit {

  @Input() topic: Topic;

  constructor() { }

  ngOnInit() {
  }

}
