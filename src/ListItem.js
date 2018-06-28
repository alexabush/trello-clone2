import React, { Component } from 'react';

class ListItem extends Component {
  state = {};
  render() {
    const left = this.props.left ? 'L' : null;
    const right = this.props.right ? 'R' : null;
    // debugger;
    return (
      <div>
        <p
          onClick={() => {
            // console.log(this.props.moveItemLeft);
            // debugger;
            this.props.moveItemLeft();
          }}
        >
          {left}
        </p>
        <p>
          {this.props.itemName}
          {right}
        </p>
      </div>
    );
  }
}

export default ListItem;
