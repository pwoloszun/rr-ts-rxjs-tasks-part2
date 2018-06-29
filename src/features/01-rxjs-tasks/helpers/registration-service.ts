import { of } from 'rxjs/observable/of';
import { delay } from 'rxjs/operators';
import { Observable } from "rxjs";

export function fakeResults(query: string, count: number): string[] {
  const results = [];
  for (let i = 0; i < count; i++) {
    results.push(`Result for ${query} [${Math.random()}]`);
  }
  return results;
}

const delayInMs = 2400;

export class RegistrationService {

  search(query: string): Observable<string[]> {
    console.log(`REQ search()`, query);
    return of(fakeResults(query, 3)).pipe(
      delay(delayInMs),
    );
  }

  calculateTax(income: number, monthsCount: number): Observable<number> {
    console.log(`REQ calculateTax()`, income);
    const taxRate = 0.2;
    return of(income * monthsCount * taxRate).pipe(
      delay(delayInMs),
    );
  }

  validate(value: any): Observable<any> {
    console.log(`REQ validate()`, value);
    return of({value, isValid: true}).pipe(
      delay(delayInMs),
    );
  }

}
