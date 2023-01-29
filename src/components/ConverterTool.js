import React from "react";
import "../styles/ConverterTool.scss";

import { MEASUREMENT_OPTIONS } from "../shared/consts.mjs";

export default class ConverterTool extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      inputMeasurement: MEASUREMENT_OPTIONS[0].val,
      targetValue: "",
      targetMeasurement: MEASUREMENT_OPTIONS[0].val,
      isLoading: false,
      response: {
        isMatch: null,
        convertedValue: null,
        targetValue: null,
        message: null,
      },
    };

    this.handleInputValueChange = this.handleInputValueChange.bind(this);
    this.handleInputMeasurementChange =
      this.handleInputMeasurementChange.bind(this);
    this.handleTargetMeasurementChange =
      this.handleTargetMeasurementChange.bind(this);
    this.handleTargetValueChange = this.handleTargetValueChange.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(event) {
    try {
      event.preventDefault();

      // set loading, reset message
      this.setState({ isLoading: true, response: { message: null } });

      let response = await fetch("/api", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          inputValue: this.state.inputValue,
          inputMeasurement: this.state.inputMeasurement,
          targetMeasurement: this.state.targetMeasurement,
          targetValue: this.state.targetValue,
        }),
      });

      let json = await response.json();

      this.setState({ response: json });
    } catch (ex) {
      this.setState({
        response: { message: "There was an error with the connection" },
      });
      console.log(`Error: ${ex}`);
    } finally {
      this.setState({ isLoading: false });
    }
  }

  handleInputValueChange(event) {
    this.setState({ inputValue: event.target.value });
  }

  handleInputMeasurementChange(event) {
    this.setState({ inputMeasurement: event.target.value });
  }

  handleTargetMeasurementChange(event) {
    this.setState({ targetMeasurement: event.target.value });
  }

  handleTargetValueChange(event) {
    this.setState({ targetValue: event.target.value });
  }

  /**
   * Creates input measurement options based off const
   */
  renderInputMeasurementOptions() {
    let options = [];
    MEASUREMENT_OPTIONS.forEach((temp) =>
      options.push(
        <option key={temp.val} value={temp.val}>
          {temp.name}
        </option>
      )
    );

    return options;
  }

  /**
   * Sets options based on input measurement unit
   */
  renderTargetMeasurementOptions() {
    let options = [];
    let type =
      MEASUREMENT_OPTIONS.find((x) => x.val == this.state.inputMeasurement)
        ?.type ?? "";

    MEASUREMENT_OPTIONS.filter((x) =>
      this.state.inputMeasurement ? x.type == type : x
    ).forEach((temp) =>
      options.push(
        <option key={temp.val} value={temp.val}>
          {temp.name}
        </option>
      )
    );

    return options;
  }

  render() {
    return (
      <div className="converter-tool-container">
        <form onSubmit={this.handleSubmit}>
          <div className="input-group">
            <label>Initial Measurement Value:</label>
            <input
              type="number"
              value={this.state.inputValue}
              onChange={this.handleInputValueChange}
            />
          </div>
          <div className="input-group">
            <label>Initial Unit of Measurement:</label>
            <select
              value={this.state.inputMeasurement}
              onChange={this.handleInputMeasurementChange}
            >
              {this.renderInputMeasurementOptions()}
            </select>
          </div>
          <div className="input-group">
            <label>Target Unit of Measurement:</label>
            <select
              value={this.state.targetMeasurement}
              onChange={this.handleTargetMeasurementChange}
              key={this.state.inputMeasurement}
            >
              {this.renderTargetMeasurementOptions()}
            </select>
          </div>
          <div className="input-group">
            <label>Target Measurement Value:</label>
            <input
              type="number"
              value={this.state.targetValue}
              onChange={this.handleTargetValueChange}
            />
          </div>
          <button type="submit">Check Answer</button>
        </form>
        {(() => {
          if (this.state.isLoading) return <p>Loading...</p>;
          else
            return (
              <div>
                <p>
                  {this.state.response.isMatch == true
                    ? "It is correct!"
                    : this.state.response.isMatch == false
                    ? `It is not correct. ${this.state.response.convertedValue} does not equal ${this.state.response.targetValue}`
                    : ""}
                </p>
                {this.state.response.message ? (
                  <p>{this.state.response.message}</p>
                ) : (
                  ""
                )}
              </div>
            );
        })()}
      </div>
    );
  }
}
