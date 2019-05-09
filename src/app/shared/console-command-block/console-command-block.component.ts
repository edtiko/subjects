import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'shw-console-command-block',
  templateUrl: './console-command-block.component.html',
  styleUrls: ['./console-command-block.component.scss']
})
export class ConsoleCommandBlockComponent implements OnInit {
  @Input() command: string;

  constructor() { }

  ngOnInit() {
  }

}
