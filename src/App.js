import React from 'react';
import './App.css';
import { Header, Button, Icon } from 'semantic-ui-react'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.buttonList = [
      {id: 1, name: 'd3 Map', icon:'map'},
      {id: 2, name: 'Pie Chart', icon:'chart pie'},
      {id: 3, name: 'Population', icon:'users'},
      {id: 4, name: 'Bar Chart', icon:'chart bar'},
      {id: 5, name: '3D Bar', icon:'hdd'},
      {id: 6, name: 'Chart Line', icon:'chart line'},
      {id: 7, name: 'Knn Map', icon:'pied piper'},
      {id: 8, name: 'Color picker', icon:'lab'},
      {id: 9, name: 'Shape shifter', icon:'asl'}
    ]
  }
  handleClick = (id=9) => {
    console.log("Clicked "+id)
    alert(id)
  }
  componentDidMount(){
    
  }
  render() {
    return (
      <div>
        <span className="header"><h2>Graphground</h2></span>
        <section id="main_buttons">
          <div id="graphs_button" className="graphs_button">
            {this.buttonList && this.buttonList.map((button, i)=>
              <div key={i}>
              <Button animated='vertical' onClick={this.handleClick.bind(this, button.id)} secondary>
              <Button.Content visible>{button.name}</Button.Content>
              <Button.Content hidden>
                <Icon name={button.icon} />
              </Button.Content>
            </Button>
            </div>
            ) }
            
          </div>
        </section>
      </div>
    );
  }
}

export default App;
