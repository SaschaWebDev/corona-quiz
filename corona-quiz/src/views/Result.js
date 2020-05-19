import React from 'react';

import DragonAnimation from '../Components/DragonAnimation.js';
import '../styles/Result.css';
import FlameAnimation from '../Components/FlameAnimation.js';

class Result extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: true,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ hidden: false });
      setTimeout(() => {
        this.setState({ hidden: true });
      }, 800);
    }, 100);
  }

  resetQuiz = () => {
    this.props.history.push('/');
  };

  render() {
    return (
      <div className='result-container noselect'>
        <div className='result-title noselect fade'>The Bad Place</div>
        <div className='result-title-sub noselect fade'>
          <span className='text-intro'>Beflissen</span>, leider haben die
          Konsequenzen deiner Handlungen dir ein Leben im Bad Place verschafft.
        </div>
        {/* <img
          class='cta-svg noselect'
          src={welcomeSVG}
          alt='Illustraition of a sitting woman with a laptop in red.'
        /> */}
        {this.state.hidden ? (
          <DragonAnimation />
        ) : (
          <div className='loading fade'>Loading...</div>
        )}

        <button
          className='result-cta-button noselect fade-slow'
          onClick={() => this.resetQuiz()}>
          Versuch es nochmal!
        </button>
        <FlameAnimation onClick={() => this.resetQuiz()} />
      </div>
    );
  }
}

export default Result;
