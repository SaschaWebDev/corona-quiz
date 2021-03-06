import React from 'react';

import '../styles/Ripple.css';

const styleRipple = {
  position: 'relative',
  overflow: 'hidden',
};

const styleRippleContainer = {
  position: 'absolute',
  top: '0',
  right: '0',
  bottom: '0',
  left: '0',
};

const styleSpan = {
  transform: 'scale(0)',
  borderRadius: '100%',
  position: 'absolute',
  opacity: '0.75',
  backgroundColor: '#ffffff',
  animation: 'ripple 850ms',
};

class Ripple extends React.Component {
  initializeState = () => {
    return {
      spanStyles: {},
      count: 0,
    };
  };
  state = this.initializeState();

  /* Debounce Code to call the Ripple removing function */
  callCleanUp = (cleanup, delay) => {
    return function() {
      clearTimeout(200);
      setTimeout(() => {
        cleanup();
      }, delay);
    };
  };

  showRipple = e => {
    const rippleContainer = e.currentTarget;
    const size = rippleContainer.offsetWidth;
    const pos = rippleContainer.getBoundingClientRect();
    const x = e.pageX - pos.x - size / 2;
    const y = e.pageY - pos.y - size / 2;

    const spanStyles = {
      top: y + 'px',
      left: x + 'px',
      height: size + 'px',
      width: size + 'px',
    };

    const count = this.state.count + 1;
    this.setState({
      spanStyles: { ...this.state.spanStyles, [count]: spanStyles },
      count: count,
    });
  };

  cleanUp = () => {
    const initialState = this.initializeState();

    this.setState({ ...initialState });
    /* let slideELements = Array.from(document.querySelectorAll('.slider'));
    slideELements.forEach(element => {
      element.classList.remove('slide-left');
    }); */
  };

  renderRippleSpan = () => {
    const { showRipple = false, spanStyles = {} } = this.state;
    const spanArray = Object.keys(spanStyles);

    /* let slideELements = Array.from(document.querySelectorAll('.slider'));
    slideELements.forEach(element => {
      element.classList.add('slide-left');
    }); */

    if (spanArray && spanArray.length > 0) {
      return spanArray.map((key, index) => {
        return (
          <span
            key={'spanCount_' + index}
            className=''
            style={{ ...spanStyles[key] }}></span>
        );
      });
    } else {
      return null;
    }
  };

  render() {
    const { children = null, classes = '' } = this.props;
    return (
      <div
        onClick={this.props.onClick}
        ref='targetElement'
        className={'ripple answer ' + classes}>
        {children}
        <div
          className='rippleContainer'
          onMouseDown={this.showRipple}
          onMouseUp={this.callCleanUp(this.cleanUp, 2000)}>
          {this.renderRippleSpan()}
        </div>
      </div>
    );
  }
}

export default Ripple;
