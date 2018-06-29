import { of } from 'rxjs/observable/of';
import {
  tap,
  delay,
} from 'rxjs/operators';
import { Observable } from "rxjs";
import { fakeResults } from "./registration-service";

const delayInMs = 1800;

export function querySearch$(query: string): Observable<string[]> {
  const count = Math.floor(Math.random() * 5);
  const results = [
    query,
    `Another ${query}`,
    ...fakeResults(query, count)
  ];
  return of(results).pipe(
    tap(() => console.log(`REQUEST ${query}`)),
    delay(delayInMs),
    tap(() => console.log(`RESPONSE ${query}, results count: ${results.length}`))
  );
}
