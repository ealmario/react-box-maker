import React, { Component } from 'react';

class BoxForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: '',
      height: '',
      color: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createBox(this.state);
    this.setState({      
      width: '',
      height: '',
      color: ''
    })
  }

  render() {
    return (
      <form className="BoxForm" onSubmit={this.handleSubmit}>
        <div className="form-grp">
          <label htmlFor="width" className="form-label">Width:</label>
          <input 
            className="form-inp"
            type="text" 
            id="width" 
            name="width" 
            value={this.state.width}
            onChange={this.handleChange}
          />
        </div>

        <div className="form-grp">
          <label htmlFor="height" className="form-label">Height:</label>
          <input 
            className="form-inp"
            type="text" 
            id="height" 
            name="height" 
            value={this.state.height}
            onChange={this.handleChange}
          />
        </div>

        <div className="form-grp">
          <label htmlFor="color" className="form-label">Color:</label>
          <input 
            className="form-inp"
            type="color" 
            id="color"
            name="color"
            value={this.state.color}
            onChange={this.handleChange}
          />
        </div>

        <button className="add-btn">Add Box</button>
      </form>
    );
  }
}

export default BoxForm;
