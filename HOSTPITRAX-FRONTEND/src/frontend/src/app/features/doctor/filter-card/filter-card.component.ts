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

    searchText: string = '';
    dropdownOpen: boolean = false;

    countryCtrl = new FormControl<string | null>(null);
    filteredCountry!: Observable<Country[]>;


    countries: Country[] = [
        { name: 'Bangladesh', code: 'BD' },
        { name: 'India', code: 'IN' },
        { name: 'United States', code: 'US' },
        { name: 'United Kingdom', code: 'UK' },
        { name: 'Canada', code: 'CA' }
    ];

    ngOnInit() {
        this.filteredCountry = this.countryCtrl.valueChanges.pipe(
            startWith(''),
            map(value => this._filterCountries(value || ''))
        );
    }

    private _filterCountries(value: string): Country[] {
        const filterValue = value.toLowerCase();
        return this.countries.filter(country =>
            country.name.toLowerCase().includes(filterValue) ||
            country.code.toLowerCase().includes(filterValue)
        );
    }
}
