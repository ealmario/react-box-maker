import React, { Component } from 'react';

class Box extends Component {
  render() {
    const {width, height, color, id, removeBox} = this.props;

    return (
      <div className="Box">
        <div className="btn-container">
          <button className="delete-btn" onClick={() => {removeBox(id)}}>Delete</button>
        </div>
        <div
          className="custom-box"
          style={{
          "width" : `${width}px`,
          "height" : `${height}px`,
          "backgroundColor" : color
          }}
        >     
        </div>
      </div>
    );
  }
}

export default Box;
