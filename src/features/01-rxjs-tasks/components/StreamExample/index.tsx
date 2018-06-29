import * as React from 'react';
import { Subject } from 'rxjs/Subject';
import { map, delay } from 'rxjs/operators';

class StreamExample extends React.Component {
  private personName$ = new Subject();

  constructor(props: any) {
    super(props);
    this.state = {
      currentName: null
    };
    this.personName$.pipe(
      map((value: string) => value.toUpperCase()),
      delay(800)
    ).subscribe((value: string) => {
      this.setState({ currentName: value });
    });

    this.onNameChange = this.onNameChange.bind(this);
  }

  public render() {
    const { currentName } = this.state as any; // TODO
    return (
      <div>
        <h3>Stream Example</h3>
        <div>
          <input onChange={this.onNameChange} type="text"/>
        </div>
        <div>
          Current: {currentName}
        </div>
      </div>
    );
  }

  private onNameChange(event: any) {
    this.personName$.next(event.target.value);
  }
}

export default StreamExample;
