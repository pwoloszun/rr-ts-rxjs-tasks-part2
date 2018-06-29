import * as React from 'react';

import './index.css';

interface Props {
  items: any[];
  onRemove: (item: any) => void;
}

class List extends React.Component<Props, any> {
  public render() {
    const { items } = this.props;
    const content = items.map(this.renderItem);

    return (
      <div className="list-cont">
        <ul>
          {content}
        </ul>
      </div>
    );
  }

  /* tslint:disable */
  private renderItem = (item: any) => {
    const { onRemove } = this.props;
    return (
      <li key={item.id}>
        {item.title}
        <button onClick={() => onRemove(item)}>Remove</button>
      </li>
    );
  };

}

export default List;
