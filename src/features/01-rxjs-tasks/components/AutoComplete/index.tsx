import * as React from 'react';
import { Subject } from 'rxjs/Subject';
import {
  distinctUntilChanged,
  debounceTime,
  switchMap,
} from 'rxjs/operators';

import { querySearch$ } from '../../helpers/query-search';

interface State {
  results: string[];
}

class AutoComplete extends React.Component<any, State> {
  private searchField$ = new Subject<string>();
  private resultsSubscription = this.searchField$.pipe(
    distinctUntilChanged(),
    debounceTime(300),
    switchMap((query: string) => querySearch$(query))
  ).subscribe((results: string[]) => {
    console.log('ggg 22', results);
    this.setState({ results });
  });

  constructor(props: any) {
    super(props);
    this.state = {
      results: [],
    };

    this.search = this.search.bind(this);
  }

  public render() {
    let itemsContent = null;
    const { results } = this.state;
    if (results && results.length > 0) {
      itemsContent = results.map((r, i) => <li key={i}>{r}</li>);
    }
    return (
      <div>
        <h3>Autocomplete task</h3>
        <input onChange={this.search} type="text"/>
        <h5>Results</h5>
        <ul>
          {itemsContent}
        </ul>
      </div>
    );
  }

  // TODO: clean up
  public componentWillUnmount() {
    this.resultsSubscription.unsubscribe();
  }

  private search(event: any) {
    const { value } = event.target;
    this.searchField$.next(value);
  }

}

export default AutoComplete;
