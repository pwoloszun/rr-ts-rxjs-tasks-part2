import * as React from 'react';
import { Subject } from 'rxjs/Subject';
import { merge } from 'rxjs/observable/merge';
import { combineLatest } from 'rxjs/observable/combineLatest';
import {
  map,
  debounceTime,
  switchMap,
  mergeMap,
  concatMap,
  exhaustMap,
} from 'rxjs/operators';

import { RegistrationService } from '../../helpers/registration-service';
import './index.css';

interface State {
  results: string;
}

class SimpleForm extends React.Component<any, State> {
  private registrationService = new RegistrationService();
  private firstName$ = new Subject();
  private lastName$ = new Subject();
  private selectedPermision$ = new Subject();
  private monthlyIncome$ = new Subject();
  private monthsCount$ = new Subject();

  constructor(props: any) {
    super(props);

    this.state = { results: '' };

    this.onFirstNameChange = this.onFirstNameChange.bind(this);
    this.onLastNameChange = this.onLastNameChange.bind(this);

    // TODO
    this.search();
    // this.calculateTax();
    // this.validateMonthlyIncome();
    // this.validateLastNamePermision();
  }

  onFirstNameChange(event: any) {
    this.firstName$.next(event.target.value);
  }

  onLastNameChange(event: any) {
    this.firstName$.next(event.target.value);
  }

  public render() {
    const { results } = this.state;

    return (
      <div className="simple-form">
        <h3>
          Simple Form
        </h3>
        <form>
          <div>
            <label>First Name</label>
            <input onChange={this.onFirstNameChange} type="text"/>
          </div>

          <div>
            <label>Last Name</label>
            <input onChange={this.onLastNameChange} type="text"/>
          </div>

          <div>
            <label>Permission Type</label>
            <select ref="selectedPermision$" className="form-control">
              <option value="user">User</option>
              <option value="admin">Admin</option>
              <option value="root">Root</option>
            </select>
          </div>

          <div>
            <label>Monthly Income</label>
            <input ref="monthlyIncome$" type="number"/>
          </div>

          <div>
            <label>Months Count</label>
            <input ref="monthsCount$" type="number"/>
          </div>
        </form>
        <div>
          <h3>Results</h3>
          <code>
    <pre>
      {results}
    </pre>
          </code>
        </div>
      </div>
    );
  }

  // TODO: search()
  // simultaneously get values from both: firstNameControl & lastNameControl ->
  // debounce received values pair due to 0.3sec ->
  // for every received value send search(query) request AND
  //    listen to all responses
  search() {
    const stream$ = merge(
      this.firstName$,
      this.lastName$,
    ).pipe(
      debounceTime(300),
      mergeMap((query: string) => this.registrationService.search(query)),
      map((results) => JSON.stringify(results, null, 2))
    ).subscribe((results: string) => {
      this.setState({ results });
    });
  }

  // TODO: calculateTax()
  // get latest pair of values from: monthlyIncomeControl & monthsCountControl ->
  // debounce received values pair due to 0.3sec ->
  // for each received pair of values send calculateTax request BUT
  //    listen to only latest request (ignore all previously send requests)
  calculateTax() {
    const stream$ = combineLatest(
      this.monthlyIncome$,
      this.monthsCount$,
    ).pipe(
      debounceTime(300),
      switchMap((values: number[]) => this.registrationService.calculateTax(values[0], values[1])),
    );
    return {
      results: stream$
    };
  }

  // TODO: validateMonthlyIncome()
  // for each received value of: monthlyIncomeControl ->
  // debounce each value due to 0.3sec ->
  // for each value send validation request BUT
  //    each subsequent validation request shuld be queued and wait for previous until completed
  validateMonthlyIncome() {
    const stream$ = this.monthlyIncome$.pipe(
      debounceTime(300),
      concatMap((value: any) => {
        return this.registrationService.validate(value);
      }),
    );
    return {
      results: stream$
    };
  }

  // TODO: validateLastNamePermision()
  // get latest pair of values from: lastNameControl & selectedPermisionControl ->
  // debounce each value due to 0.3sec ->
  // for each pair of values send validation request BUT
  //    for each subsequent validation request: start new only if previous has finished
  validateLastNamePermision() {
    const stream$ = combineLatest(
      this.lastName$,
      this.selectedPermision$,
    ).pipe(
      debounceTime(300),
      exhaustMap((value: any) => {
        return this.registrationService.validate(value);
      }),
    );
    return {
      results: stream$
    };
  }
}

export default SimpleForm;
