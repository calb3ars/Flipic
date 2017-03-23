import React from 'react';

class Timestamp extends React.Component {
  render() {
    const photo = this.props.photo;
    return (
        <p className="timestamp">{photo.timestamp}</p>
    );
  }
}

export default Timestamp;
