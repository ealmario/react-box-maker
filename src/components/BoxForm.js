import React, { Component } from 'react';

class BoxForm extends Component {
  render() {
    return (
      <form className="BoxForm">
        <div className="form-grp">
          <label htmlFor="width" className="form-label">Width:</label>
          <input type="text" id="width" className="form-inp"/>
        </div>

        <div className="form-grp">
          <label htmlFor="height" className="form-label">Height:</label>
          <input type="text" id="height" className="form-inp"/>
        </div>

        <div className="form-grp">
          <label htmlFor="color" className="form-label">Color:</label>
          <input type="color" className="form-inp"/>
        </div>
      </form>
    );
  }
}

export default BoxForm;
