import React from "react";
import Option from "./Option";
import Form from "./Form";
import "../styles/App.css";

class App extends React.Component {
  state = {
    what: "pln",
    howMuch: "70000000.00",
    options: [
      {
        id: 0,
        name: "złotych",
        value: "pln",
        cost: 1,
      },
      {
        id: 1,
        name: "lat ochrony domu Jarosława Kaczyńskiego",
        value: "kaczynski",
        cost: 1800000,
      },
      {
        id: 2,
        name:
          "lat funkcjonowania podkomisji Antoniego Macierewicza ds. katastrofy Smoleńskiej",
        value: "macierewicz",
        cost: 2700000,
      },
      {
        id: 3,
        name: "miesięcznych zarobków Sasina w 2018r.",
        value: "sasin",
        cost: 15200,
      },
      {
        id: 4,
        name: "kremówek",
        value: "kremowka",
        cost: 5.5,
      },
      {
        id: 5,
        name: "miliardów dla TVP",
        value: "tvp",
        cost: 1000000000,
      },
      {
        id: 6,
        name: "programów wyborczych Radosława Ditricha",
        value: "ditrich",
        cost: 0,
      },
      {
        id: 7,
        name: "kampanii wyborczych PiS (do sejmu i senatu)",
        value: "pis",
        cost: 30029000,
      },
    ],
  };

  handleOptionChange = (e) => {
    const index = this.state.options.findIndex(
      (option) => option.value === e.target.value
    );
    let howMuch = 70000000 / this.state.options[index].cost;
    howMuch = howMuch.toFixed(2);
    if (!this.state.options[index].cost) howMuch = "nieskończoność";
    this.setState({
      what: e.target.value,
      howMuch,
    });
  };

  addNewOption = (option) => {
    const options = [...this.state.options];
    options.push(option);
    this.setState({
      what: option.value,
      howMuch: (7000000 / option.cost).toFixed(2),
      options,
    });
  };

  render() {
    return (
      <>
        <h1>
          Ile pieniędzy Jacek Sasin zmarnował na próbę przeprowadzenia
          nielegalnych wyborów?
        </h1>
        <section>
          <p className="result">
            Sasin zmarnował <span className="result">{this.state.howMuch}</span>
            <select
              value={this.state.what}
              onChange={this.handleOptionChange}
              name=""
              id=""
            >
              {this.state.options.map((option) => (
                <Option key={option.id} option={option} />
              ))}
            </select>
          </p>
        </section>
        <section>
          <Form options={this.state.options} addNewOption={this.addNewOption} />
        </section>
      </>
    );
  }
}

export default App;
