import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-topscorers',
  templateUrl: './topscorers.component.html',
  styleUrls: ['./topscorers.component.css'],
  inputs: ['scorersdata']
})
export class TopscorersComponent implements OnInit {

  @Input() scorersdata: Object;
  constructor() { }

  ngOnInit(): void {
    
  }

}
