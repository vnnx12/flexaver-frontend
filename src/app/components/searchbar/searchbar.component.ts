import { Component } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent {
  searchQuery: string = '';
  showDropdown: boolean = false;
  dropdownItems: string[] = ['Option 1', 'Option 2', 'Option 3'];

  onInputChange(event: any) {
    const value = event.target.value;
    this.searchQuery = value;
    this.showDropdown = value.length > 0;
  }

  selectItem(item: string) {
    this.searchQuery = item;
    this.showDropdown = false;
  }
}
