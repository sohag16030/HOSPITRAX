import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({providedIn: 'root'})
export class ScrollService {
  private scrollToLetterSubject = new Subject<string>();
  scrollToLetter$ = this.scrollToLetterSubject.asObservable();

  scrollToLetter(letter: string) {
    this.scrollToLetterSubject.next(letter);
  }
}
