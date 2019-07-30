import React from 'react';

interface AppProps{}

class App extends React.Component<AppProps> {
  constructor(props:AppProps) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="app">Hello world</div>
    );
  }
}

export default App;
