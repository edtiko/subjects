import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'shw-code-block',
  templateUrl: './code-block.component.html',
  styleUrls: ['./code-block.component.scss']
})
export class CodeBlockComponent implements OnInit {
  @Input() code: string;

  constructor() { }

  ngOnInit() {
  }

}
