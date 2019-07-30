import React from 'react';
import MediaContainer from './components/mediaContainer';

interface AppProps{}

class App extends React.Component<AppProps> {
  constructor(props:AppProps) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <MediaContainer className="app" showDesktops>
        Hello world
      </MediaContainer>
    );
  }
}

export default App;
