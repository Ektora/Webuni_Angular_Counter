import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';



@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  @Input() aim = 10;
  @Input() counter : { name: string; id: number; } | undefined;
  @Output() countChange = new EventEmitter<number>();
  count : number = 0;
  changeDetectionCounter = 0;

  constructor() { }

  ngOnInit(): void {
  }

  incrementCounter() {
    this.count++;
    this.countChange.emit(this.count);
  }

  get log(){
    this.changeDetectionCounter++;
    console.log(this.changeDetectionCounter);
    return "change detection test";
  }

}
