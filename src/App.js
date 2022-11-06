import React from "react";
import PersonCard from "./componentes/PersonCard/PersonCard";

class App extends React.Component {

  render() {
    return(
      <div className="container">
        <PersonCard lastName="Doe" firstName="Jane" age={45} hairColor="Black" />
        <br></br>
        <PersonCard lastName="Smith" firstName="John" age={88} hairColor="Brown" />
        <br></br>
        <PersonCard lastName="Fillmore" firstName="Millard" age={50} hairColor="Brown" />
        <br></br>
        <PersonCard lastName="Smith" firstName="Maria" age={62} hairColor="Brown" />
      </div>     
    );
  }
}

export default App;
