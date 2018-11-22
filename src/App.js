import React, { Component } from 'react';
import './App.css';

import Input from './components/Input';
import Output from './components/Output';

class App extends Component {

  state = {
    input: "",
    output: "",
    isJson: true
  }

  onChange = this.onChange.bind(this);
  handleOutput = this.handleOutput.bind(this);

  onChange(e){
    this.setState({ [e.target.name]: e.target.value }, () => this.handleOutput(this.state.input));

  }

  handleOutput(input) {
    let newArray = [];

    try {


      let parsedInput = Object.values(JSON.parse(input));

      parsedInput.forEach(input => {
        input.forEach(entry => {
          if(entry.parent_id === null || entry.parent_id === undefined) newArray.push(entry);
          else {
            newArray.find(parent => {
              if(parent.id === entry.parent_id) return parent.children.push(entry)
                else {
                  parent.children.find(val => {
                    if(val.id === entry.parent_id) return val.children.push(entry)
                  })
                }
            })
          }
        })
      })

      this.setState({ output: JSON.stringify(newArray, null, 2), isJson: true });
    } catch (e) {

      this.setState({ isJson: false, output: "Please insert valid JSON" })

    }
  }

  render() {
    const { output } = this.state;
    return (
      <div className="App">
        <h2>JSON Organizer</h2>
        <div className="app-container">
          <Input onChange={this.onChange}/>
          <Output output={output}/>
        </div>
      </div>
    );
  }
}

export default App;
