import React from 'react';

import Chevron from '../styles/chevron-left.png';
import Ripple from '../Components/Ripple.js';
import '../styles/Quiz.css';

class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      percentage: 20,
      questionCount: 1,
      question: 'Wann war die gemessene Angst in der Zeit von Corona in Deutschland am höchsten?',
      questionFour: 'Du möchtest deine Stromrechnung senken',
      answerOne: 'Am Donnerstag den 20.02.2020',
      answerTwo: 'Am Sonntag den 15.03.2020',
      answerThree: 'Am Samstag den 28.03.2020',
    };
  }

  goBack = () => {
    this.triggerSlideAnimation();
    if (this.state.questionCount === 1) {
      this.setState({
        questionCount: 1,
        percentage: 0,
        question: 'Wann war die gemessene Angst in der Zeit von Corona in Deutschland am höchsten?',
        answerOne: 'Am Donnerstag den 20.02.2020',
        answerTwo: 'Am Sonntag den 15.03.2020',
        answerThree: 'Am Samstag den 28.03.2020',
      });
      window.location.href = 'https://info.corona.saschamajewsky.de'; 
    }

    if (this.state.questionCount === 2) {
      this.setState({
        questionCount: 1,
        percentage: 20,
        question: 'Wann war die gemessene Angst in der Zeit von Corona in Deutschland am höchsten?',
        answerOne: 'Am Donnerstag den 20.02.2020',
        answerTwo: 'Am Sonntag den 15.03.2020',
        answerThree: 'Am Samstag den 28.03.2020',
      });
    }

    if (this.state.questionCount === 3) {
      this.setState({
        questionCount: 2,
        percentage: 40,
        question: 'Mit welchem Ereignis lässt sich die Angst vor COVID-19 in der Bevölkerung vergleichen?',
        answerOne: 'Anschläge in Paris vom 13.11.2015',
        answerTwo: 'Wahlsieg US-Präsident Trump 2016',
        answerThree: 'Flüchtlingskrise 2015/2016',
      });
    }

    if (this.state.questionCount === 4) {
      this.setState({
        questionCount: 3,
        percentage: 60,
        question:
        'Wie ist das Risiko eines schweren COVID-19 Krankheitsverlaufes bei Allergikern mit Heuschnupfen einzuschätzen?',
        answerOne: 'Höheres Risiko',
        answerTwo: 'Unverändertes Risiko',
        answerThree: 'Niedrigeres Risiko',
      });
    }

    if (this.state.questionCount === 5) {
      this.setState({
        questionCount: 4,
        percentage: 80,
        question: 'In welchem deutschen Bundesland war das Risiko an COVID-19 zu versterben am höchsten?',
        answerOne: 'Mecklenburg-Vorpommern',
        answerTwo: 'Bayern',
        answerThree: 'Berlin',
      });
    }
  };

  nextQuestion = (answerOption) => {
    this.triggerSlideAnimation();
    if (this.state.questionCount === 1) {
      this.setState({
        questionCount: 2,
        percentage: 40,
        question: 'Mit welchem Ereignis lässt sich die Angst vor COVID-19 in der Bevölkerung vergleichen?',
        answerOne: 'Anschläge in Paris vom 13.11.2015',
        answerTwo: 'Wahlsieg US-Präsident Trump 2016',
        answerThree: 'Flüchtlingskrise 2015/2016',
      });
      localStorage.setItem('question1', answerOption);
    }

    if (this.state.questionCount === 2) {
      this.setState({
        questionCount: 3,
        percentage: 60,
        question: 'Wie ist das Risiko eines schweren COVID-19 Krankheitsverlaufes bei Allergikern mit Heuschnupfen einzuschätzen?',
        answerOne: 'Höheres Risiko',
        answerTwo: 'Unverändertes Risiko',
        answerThree: 'Niedrigeres Risiko',
      });
      localStorage.setItem('question2', answerOption);
    }

    if (this.state.questionCount === 3) {
      this.setState({
        questionCount: 4,
        percentage: 80,
        question: 'In welchem deutschen Bundesland war das Risiko an COVID-19 zu versterben am höchsten?',
        answerOne: 'Mecklenburg-Vorpommern',
        answerTwo: 'Bayern',
        answerThree: 'Berlin',
      });
      localStorage.setItem('question3', answerOption);
    }

    if (this.state.questionCount === 4) {
      this.setState({
        questionCount: 5,
        percentage: 100,
        question: 'Wie viele Todesfälle durch COVID-19 ereigneten sich in Deutschland bis zum 19.05.2020?',
        answerOne: '8281 Todesfälle',
        answerTwo: '32330 Todesfälle',
        answerThree: '9186 Todesfälle',
      });
      localStorage.setItem('question4', answerOption);
    }

    if (this.state.questionCount === 5) {
      localStorage.setItem('question5', answerOption);
      this.props.history.push('/result');
    }
  };

  triggerSlideAnimation = () => {
    /* let slideELements = Array.from(document.querySelectorAll('.slider'));
    slideELements.forEach(element => {
      element.classList.add('slide-left');

      setTimeout(() => {
        element.classList.remove('slide-left');
      }, 600);
    }); */
  };

  render() {
    return (
      <div className='quiz-container noselect'>
        <div className='upper-container'>
          <div className='upper-info-container'>
            <div className='back-button' onClick={() => this.goBack()}>
              <img
                className='cta-svg noselect'
                src={Chevron}
                alt='Icon of a chevron pointing left.'
              />
            </div>
            <div className='quiz-counter'>
              <div className='quiz-counter-current'>
                0{this.state.questionCount}
              </div>
              <div className='quiz-counter-remaining'>/ 05</div>
            </div>
          </div>
          <div className='progress-bar'>
            <div
              className='filler'
              style={{ width: `${this.state.percentage}%` }}
            />
          </div>
          <div className='question-text slider slide-left slide-out'>
            {this.state.question}
          </div>
        </div>

        <div className='lower-container'>
          <div className='middle-container'></div>
          <div className='middle-second-container'></div>
          <div className='middle-third-container'></div>

          <div className='answer-container slider slide-left slide-out'>
            <Ripple
              className='answer answer-one btn '
              onClick={() => this.nextQuestion("a")}>
              <span className='ion-help-circled'></span>
              <div className='answer-symbol'>a</div>
              <div className='answer-text'>{this.state.answerOne}</div>
            </Ripple>
            <Ripple
              className='answer answer-two btn'
              onClick={() => this.nextQuestion("b")}>
              <span className='ion-help-circled'></span>
              <div className='answer-symbol'>b</div>
              <div className='answer-text'>{this.state.answerTwo}</div>
            </Ripple>
            <Ripple
              className='answer answer-three btn'
              onClick={() => this.nextQuestion("c")}>
              <span className='ion-help-circled'></span>
              <div className='answer-symbol'>c</div>
              <div className='answer-text'>{this.state.answerThree}</div>
            </Ripple>
          </div>
        </div>
      </div>
    );
  }
}

export default Quiz;
