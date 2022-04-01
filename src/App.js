import { Component } from "react";
import "./App.css";
import Mycars from "./components/Mycars";

class App extends Component {
  state = {
    titre: "Mon catalogue de voiture",
  };

  changeTitle = (e) => {
    this.setState({
      titre: "Le titre a changé",
    });
  };

  changeViaParam = (titre) => {
    this.setState({
      titre,
    });
  };

  render() {
    return (
      <div className="App">
        <Mycars title={this.state.titre} />
        <button onClick={this.changeTitle}>Changer le titre</button>
        <button onClick={() => this.changeViaParam("Titre via le parametre")}>
          Via Param
        </button>
        <button onClick={() => this.changeViaParam("Titre via le parametre")}>
          Via Bind
        </button>
      </div>
    );
  }
}

export default App;
