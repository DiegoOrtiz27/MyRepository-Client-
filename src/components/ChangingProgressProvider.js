import React from "react";

class ChangingProgressProvider extends React.Component {
  static defaultProps = {
    interval: 1000
  };

  state = {
    valuesIndex: 0
  };

  componentDidMount() {
    const lastIndex = this.props.values.length - 1;
    const intervalId = setInterval(() => {
      this.setState(prevState => {
        const nextIndex = (prevState.valuesIndex + 1) % this.props.values.length;
        if (nextIndex === lastIndex) {
          clearInterval(intervalId);
        }
        return { valuesIndex: nextIndex };
      });
    }, this.props.interval);
  }

  render() {
    return this.props.children(this.props.values[this.state.valuesIndex]);
  }
}

export default ChangingProgressProvider;