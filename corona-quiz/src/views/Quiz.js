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
        question:
          'Deine Oma hat Geburtstag und du möchtest ihr Blumen schenken',
        answerOne: 'Auslandimport günstiger Blumen',
        answerTwo: 'Blumenkauf im lokalen Blumenladen',
        answerThree: 'Blumen selber pflücken',
      });
      this.props.history.push('/');
    }

    if (this.state.questionCount === 2) {
      this.setState({
        questionCount: 1,
        percentage: 20,
        question:
          'Deine Oma hat Geburtstag und du möchtest ihr Blumen schenken',
        answerOne: 'Auslandimport günstiger Blumen',
        answerTwo: 'Blumenkauf im lokalen Blumenladen',
        answerThree: 'Blumen selber pflücken',
      });
    }

    if (this.state.questionCount === 3) {
      this.setState({
        questionCount: 2,
        percentage: 40,
        question:
          'Für dein Lieblings- rezept benötigst du noch etwas frische Milch',
        answerOne: 'Frischmilchkauf beim regionalen Bauern',
        answerTwo: 'Kauf von H-Milch im Supermarkt',
        answerThree: 'Kauf von veganer Mandelmilch',
      });
    }

    if (this.state.questionCount === 4) {
      this.setState({
        questionCount: 3,
        percentage: 60,
        question: 'Du planst für deine nächste Reise einen Trip nach Ungarn',
        answerOne: 'Suche nach günstigen Flug bei Billig-Airline',
        answerTwo: 'Mieten von bezahlbaren Auto bei Sixt',
        answerThree: 'Erwerb eines Bahnticket bei DB',
      });
    }

    if (this.state.questionCount === 5) {
      this.setState({
        questionCount: 4,
        percentage: 80,
        question: 'Du planst für deine nächste Reise einen Trip nach Ungarn',
        answerOne: 'Suche nach günstigen Flug bei Billig-Airline',
        answerTwo: 'Mieten von bezahlbaren Auto bei Sixt',
        answerThree: 'Erwerb eines Bahnticket bei DB',
      });
    }
  };

  nextQuestion = (answerOption) => {
    this.triggerSlideAnimation();
    if (this.state.questionCount === 1) {
      this.setState({
        questionCount: 2,
        percentage: 40,
        question:
          'Für dein Lieblings- rezept benötigst du noch etwas frische Milch',
        answerOne: 'Frischmilchkauf beim regionalen Bauern',
        answerTwo: 'Kauf von H-Milch im Supermarkt',
        answerThree: 'Kauf von veganer Mandelmilch',
      });
      localStorage.setItem('question1', answerOption);
    }

    if (this.state.questionCount === 2) {
      this.setState({
        questionCount: 3,
        percentage: 60,
        question: 'Du planst für deine nächste Reise einen Trip nach Ungarn',
        answerOne: 'Suche nach günstigen Flug bei Billig-Airline',
        answerTwo: 'Mieten von bezahlbaren Auto bei Sixt',
        answerThree: 'Erwerb eines Bahnticket bei DB',
      });
      localStorage.setItem('question2', answerOption);
    }

    if (this.state.questionCount === 3) {
      this.setState({
        questionCount: 4,
        percentage: 80,
        question: 'Du versuchst deine Strom- rechnung zu reduzieren',
        answerOne: 'Vertrag mit günstigen Atomstromanbieter',
        answerTwo: 'Solaranlagen am Dach anbringen',
        answerThree: 'Vertrag mit Stromanbieter erneuerbarer Energien',
      });
      localStorage.setItem('question3', answerOption);
    }

    if (this.state.questionCount === 4) {
      this.setState({
        questionCount: 5,
        percentage: 100,
        question: 'Du versuchst deine Strom- rechnung zu reduzieren',
        answerOne: 'Vertrag mit günstigen Atomstromanbieter',
        answerTwo: 'Solaranlagen am Dach anbringen',
        answerThree: 'Vertrag mit Stromanbieter erneuerbarer Energien',
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
