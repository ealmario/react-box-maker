import React, { Component } from 'react';
import Box from './Box';
import EmptyBox from './EmptyBox';

class BoxList extends Component {
  render() {
    const { boxes } = this.props;

    const boxList = boxes.map((box, index) => (
      <Box 
        width={box.width}
        height={box.height}
        color={box.color}
      />
    ));

    return (
      <div className="BoxList">
      {boxes.length === 0 ? <EmptyBox /> : boxList}
      </div>
    )
  }
}

export default BoxList;