import React, { Component } from 'react';
import Box from './Box';

class BoxList extends Component {
  constructor(props) {
    super(props)
    this.state = { boxes: [] }
  }
  render() {
    const { boxes } = this.state;

    const boxList = boxes.map((box, index) => (
      <Box 
        width={box.width}
        height={box.height}
        color={box.color}
      />
    ));

    return (
      <div className="BoxList">
      {boxes.length === 0 ? "Add a box!" : boxList}
      </div>
    )
  }
}

export default BoxList;