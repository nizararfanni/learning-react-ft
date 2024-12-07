import React from "react";
// class componen
//lifecycle react pertama constructor
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  // setelah didmount ada componentdidmoutnt yang mengubah constructor
  componentDidMount() {
    // update component yg ada di constructor
    this.setState({ count: 10 });
  }

  // update component yg ada di dimount
  componentDidUpdate(prevProps,PrevState){
    if(this.state.count === 10){
      this.setState({count :0})
    }
  }

  render() {
    return (
      <div className="flex items-center my-2 me-4">
        <h1>{this.state.count}</h1>
        <button
          className="bg-blue-600 rounded-lg p-3 text-white ms-4"
          onClick={() => this.setState({ count: this.state.count + 1 })}
        >
          tambah
        </button>
      </div>
    );
  }
}

export default Counter;
