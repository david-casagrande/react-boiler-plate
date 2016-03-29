import React from 'react';

export default class App extends React.Component {
  items() {
    return [1, 2, 0].map((idx) => <div key={idx} className={'item'}>{idx}</div>);
  }

  render() {
    return <div>{this.items()}</div>;
  }
}
