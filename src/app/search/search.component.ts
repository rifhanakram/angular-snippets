import { Component, Input } from '@angular/core';

@Component({
  selector: 'display',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  @Input() name: string;
}
