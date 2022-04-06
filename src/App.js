import { Component } from "react";
import "./App.css";
import Mycars from "./components/Mycars";

class App extends Component {
  state = {
    titre: "Mon catalogue de voiture",
    textTest: "Ceci est un test",
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

  changeViaBind = (param) => {
    this.setState({
      titre: param,
    });
  };

  changeViaInput = (e) => {
    this.setState({
      titre: e.target.value,
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
        <button onClick={this.changeViaBind.bind(this, "Titre via Bind")}>
          Via Bind
        </button>
        <input
          type="text"
          onChange={this.changeViaInput}
          value={this.state.titre}
        />
      </div>
    );
  }
}

export default App;
