import { Component, OnInit } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import {AsyncPipe, NgForOf, NgStyle} from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import {MatIcon} from "@angular/material/icon";
import {MatCard, MatCardContent} from "@angular/material/card";

interface Country {
    name: string;
    code: string;
}

@Component({
    selector: 'filter-card',
    standalone: true,
    imports: [
        MatFormFieldModule,
        MatSelectModule,
        MatOptionModule,
        FormsModule,
        ReactiveFormsModule,
        MatAutocompleteModule,
        MatInputModule,
        AsyncPipe,
        NgForOf,
        NgStyle,
        MatIcon,
        MatCard,
        MatCardContent
    ],
    templateUrl: './filter-card.component.html',
    styleUrl: './filter-card.component.css'
})
export class FilterCardComponent implements OnInit {
  searchControl = new FormControl('');
  options: string[] = ['Dr. Zaman', 'Dr. Rahman', 'Dr. Anika', 'Dr. Karim','Dr. Zaman', 'Dr. Rahman', 'Dr. Anika', 'Dr. Karim'];
  filteredOptions: string[] = [];

  ngOnInit() {
    this.searchControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value || ''))
      )
      .subscribe(filtered => (this.filteredOptions = filtered));
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option =>
      option.toLowerCase().includes(filterValue)
    );
  }
}
