import React, { Component } from 'react';
import './App.css';

class Nav extends Component {
  state = {
    list : []
  }
  componentDidMount(){
    fetch('list.json')
      .then(function(result){
        return result.json();
      })
      .then(function(json){
        console.log(json);
        this.setState({list:json});
      }.bind(this))
  }
  render() {
    var listTag = [];
    for(var i=0; i<this.state.list.length; i++) {
      var li = this.state.list[i];
      listTag.push(<li key={li.id}><a href={li.id}>{li.title}</a></li>)
    }
    return (
      <nav>
        <ul>
          {listTag}
        </ul>
      </nav>
    );
  }
}

function App() {
  return (
    <div className="App">
      <h1>Who is Jenny?</h1>
      <Nav></Nav>
      <article>
        <h2>Welcome</h2>
        Hello, React and AJAX!
      </article>
    </div>
  );
}

export default App;
