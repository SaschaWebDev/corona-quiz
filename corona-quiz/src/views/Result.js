import React from 'react';

import DragonAnimation from '../Components/DragonAnimation.js';
import '../styles/Result.css';

class Result extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    if (localStorage.getItem("question1") === null || localStorage.getItem("question2") === null || localStorage.getItem("question3") === null || localStorage.getItem("question4") === null || localStorage.getItem("question5") === null) {
      window.location.href = 'https://info.corona.saschamajewsky.de';
    }
  }

  render() {
    return (
      <div className='result-container noselect'>
        <div className='result-title noselect fade'>Ergebnisse</div>
       

        <div class="card-container">
        <div class="card green-card">
        <div class="card-image"><div className='result-title-sub noselect fade'>
        <div className='result-title-sub noselect fade'>
          <span className='question'>Wann war die gemessene Angst in der Zeit von Corona in Deutschland am höchsten?</span>
        </div>
        </div></div>
        <div class="card-text"> 
          
        {localStorage.getItem('question1') === 'b' ? 
        <div className='result-title-sub noselect fade'>
          <span class="right">Ihre Antwort: Sonntag 15.03.2020</span><br/> 
          <span class="right">Richtige Antwort: Sonntag der 15.03.2020</span>
        </div> :
        <div className='result-title-sub noselect fade'>
          <span class="wrong">Ihre Antwort: {localStorage.getItem('question1') === 'a' ? "Donnerstag 20.02.2020" :  "Samstag 28.03.2020"}</span><br/> 
          <span class="right">Richtige Antwort: Sonntag der 15.03.2020</span>
        </div>}
          <p>
            xxxxxxxxxxxx
          </p>
        </div>
      </div>






        <div class="card green-card">
        <div class="card-image"><div className='result-title-sub noselect fade'>
          <span className='question'>Mit welchem Ereignis lässt sich die Angst vor COVID-19 in der Bevölkerung vergleichen?</span>
        </div></div>
        <div class="card-text">
          
        {localStorage.getItem('question2') === 'a' ? 
        <div className='result-title-sub noselect fade'>
          <span class="right">Ihre Antwort: Anschläge in Paris vom 13.11.2015</span><br/> 
          <span class="right">Richtige Antwort: Anschläge in Paris vom 13.11.2015</span>
        </div> :
        <div className='result-title-sub noselect fade'>
          <span class="wrong">Ihre Antwort: {localStorage.getItem('question2') === 'b' ? "Wahlsieg US-Präsident Trump 2016" :  "Flüchtlingskrise 2015/2016"}</span><br/> 
          <span class="right">Richtige Antwort: Anschläge in Paris vom 13.11.2015</span>
        </div>}
          <p>
            xxxxx
          </p>
        </div>
      </div>
      </div>



        
        <div className='result-title-sub noselect fade'>
          <span className='question'>Wie ist das Risiko eines schweren COVID-19 Krankheitsverlaufes bei Allergikern mit Heuschnupfen einzuschätzen?</span>
        </div>
        {localStorage.getItem('question3') === 'b' ? 
        <div className='result-title-sub noselect fade'>
          <span class="right">Ihre Antwort: Unverändertes Risiko</span><br/> 
          <span class="right">Richtige Antwort: Unverändertes Risiko</span>
        </div> :
        <div className='result-title-sub noselect fade'>
          <span class="wrong">Ihre Antwort: {localStorage.getItem('question3') === 'a' ? "Höheres Risiko" :  "Niedrigeres Risiko"}</span><br/> 
          <span class="right">Richtige Antwort: Unverändertes Risiko</span>
        </div>}
        <div className='result-title-sub noselect fade'>
          <span className='question'>In welchem deutschen Bundesland war das Risiko an COVID-19 zu versterben am höchsten?</span>
        </div>
        {localStorage.getItem('question4') === 'b' ? 
        <div className='result-title-sub noselect fade'>
          <span class="right">Ihre Antwort: Bayern</span><br/> 
          <span class="right">Richtige Antwort: Bayern</span>
        </div> :
        <div className='result-title-sub noselect fade'>
          <span class="wrong">Ihre Antwort: {localStorage.getItem('question4') === 'a' ? "Mecklenburg-Vorpommern" :  "Berlin"}</span><br/> 
          <span class="right">Richtige Antwort: Bayern</span>
        </div>}
        <div className='result-title-sub noselect fade'>
          <span className='question'>Wie viele Todesfälle durch COVID-19 ereigneten sich in Deutschland bis zum 19.05.2020?</span>
        </div>
        {localStorage.getItem('question5') === 'a' ? 
        <div className='result-title-sub noselect fade'>
          <span class="right">Ihre Antwort: 8176 Todesfälle</span><br/> 
          <span class="right">Richtige Antwort: 8176 Todesfälle</span>
        </div> :
        <div className='result-title-sub noselect fade'>
          <span class="wrong">Ihre Antwort: {localStorage.getItem('question1') === 'b' ? "32169 Todesfälle" :  "9108 Todesfälle"}</span><br/> 
          <span class="right">Richtige Antwort: 8176 Todesfälle</span>
        </div>}
        <button
          className='result-cta-button noselect fade-slow'
          onClick={() => this.resetQuiz()}>
          Versuch es nochmal!
        </button>
      </div>
    );
  }
}

export default Result;
