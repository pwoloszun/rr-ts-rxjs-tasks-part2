import { of } from "rxjs/observable/of";
import { delay, map, tap } from "rxjs/operators";
import { Observable } from "rxjs";

class MyHttpError extends Error {
  constructor(msg: string, public status: number) {
    super(msg);
  }
}

const delayInMs = 1200;

const apiCall = {
  success$(url: string, data: any): Observable<any> {
    return of(url).pipe(
      tap((u) => console.log(`${u} REQUEST...`)),
      delay(delayInMs),
      map((url) => ({url, data, status: 'SUCCESS'}))
    );
  },

  error$(url: string, errorMsg = 'Some API error'): Observable<any> {
    let callsCount = 0;
    return of(callsCount).pipe(
      tap(() => console.log(`Getting API...`, callsCount++)),
      delay(1800),
      map(() => {
        throw new MyHttpError(`${url}: ${errorMsg}`, 503);
      })
    );
  }
};

export default apiCall;
