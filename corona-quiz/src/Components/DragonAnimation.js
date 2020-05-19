import React, { Component } from 'react';

import '../styles/Dragon.css';

class Dragon extends React.Component {
  componentDidMount() {}
  render() {
    return (
      <div className='dragon-container noselect'>
        <iframe
          className='embedded'
          height='270px'
          scrolling='no'
          title='Sneeze the dragon'
          src='https://codepen.io/Majewsky/embed/mdJRwyy?height=300&theme-id=39004&default-tab=result'
          frameborder='no'
          allowtransparency='true'
          allowfullscreen='true'>
          See the Pen{' '}
          <a href='https://codepen.io/Majewsky/pen/mdJRwyy'>
            Sneeze the dragon
          </a>{' '}
          by Sascha (<a href='https://codepen.io/Majewsky'>@Majewsky</a>) on{' '}
          <a href='https://codepen.io'>CodePen</a>.
        </iframe>
      </div>
    );
  }
}

export default Dragon;
