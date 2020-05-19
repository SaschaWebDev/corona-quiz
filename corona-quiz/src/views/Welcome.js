import React from 'react';

import welcomeSVG from '../styles/welcome2.svg';
import '../styles/Welcome.css';

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  redirectToQuiz = () => {
    this.props.history.push('/quiz');
  };

  render() {
    return (
      <div class='welcome-container'>
        <div class='title noselect fade'>The Good Place</div>
        <div class='title-sub noselect fade'>
          Hast du einen Platz im Good Place verdient? Beantworte einfach die
          Fragen intuitiv.
        </div>
        <img
          class='cta-svg noselect fade-slow'
          src={welcomeSVG}
          alt='Illustraition of a sitting woman with a laptop in red.'
        />
        <button
          class='cta-button noselect fade-slow'
          onClick={() => this.redirectToQuiz()}>
          Teste dich!
        </button>
      </div>
    );
  }
}

export default Welcome;
