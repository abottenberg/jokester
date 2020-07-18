import React from 'react';
import jokes from '../apis/jokes'

class App extends React.Component {
  componentDidMount() {
    jokes.get('/random_ten')
  };

  render() {
    return <div>App</div>
  }
};

export default App;
