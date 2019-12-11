import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from '../../components/Header';
import Button from '../../components/Button';
import Counter from '../../components/Counter';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    }
  }

  handleCountChange = id => {
    if (id === 'addBtn') {
      this.setState({
        count: this.state.count + 1
      }); 
    }
    if (id === 'subBtn') {
      this.setState({
        count: this.state.count - 1
      }); 
    }
  }

  render() {
    console.log(`Rendered! State is: ${this.state.count}`);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Header title={'Dr. BomBack'}/>
          <Counter count={this.state.count}/>
          <Button 
            onCountChange={this.handleCountChange}
            btnText="Add to State"
            id="addBtn"
          />
          <Button 
            onCountChange={this.handleCountChange}
            btnText="Subtract from state"
            id="subBtn"
          />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
