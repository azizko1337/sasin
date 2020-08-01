import React from "react";
import "../styles/Form.css";

class Form extends React.Component {
  state = {
    name: "",
    cost: "",
  };

  nextOptionID = this.props.options.length;

  handleChange = (e) => {
    if (e.target.type === "text") {
      this.setState({
        name: e.target.value,
      });
    } else if (e.target.type === "number") {
      this.setState({
        cost: e.target.value,
      });
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.name) {
      if (this.state.cost) {
        if (
          this.props.options.filter((option) => option.name === this.state.name)
            .length === 0
        ) {
          const newOption = {
            name: this.state.name,
            cost: parseInt(this.state.cost),
            id: this.nextOptionID,
            value: this.nextOptionID.toString(),
          };
          this.nextOptionID++;
          this.props.addNewOption(newOption);
          this.setState({
            name: "",
            cost: "",
          });
        }
      }
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Dodanie własnej rzeczy:</h2>
        <label htmlFor="">
          Co zmarnował sasin?{" "}
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>
        <label htmlFor="">
          Ile kosztowała jedna taka rzecz?{" "}
          <input
            type="number"
            value={this.state.cost}
            onChange={this.handleChange}
          />
        </label>
        <button type="submit">Dodaj do listy</button>
      </form>
    );
  }
}

export default Form;
