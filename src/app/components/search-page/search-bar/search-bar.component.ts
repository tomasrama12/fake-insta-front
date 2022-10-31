import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  @Output() searchInputEvent = new EventEmitter<string>();
  
  input = '';
  imgs: string[] = [];

  constructor( ) { 
  }

  ngOnInit(): void {
  }

 search(){  
    this.searchInputEvent.emit(this.input);
 }
}
