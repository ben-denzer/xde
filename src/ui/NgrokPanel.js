import React from 'react';

import ProcessInfo from './ProcessInfo';

class NgrokPanel extends React.Component {
  render() {
    return (
      <iframe src="http://localhost:4040/" seamless="seamless" style={{
        border: '0 none',
        width: '100%',
        height: 300,
      }} />
    );
  }
}

module.exports = NgrokPanel;
