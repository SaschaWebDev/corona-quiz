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
      <div className='container noselect'>
        <div className="left-container">
          <div className="heading">Das Quiz</div>
          {/* This should be a component later */}
          <div className="question-number">Frage #1</div>
          <div className="question-text-2">Wann war die gemessene Angst in der Zeit von Corona in Deutschland am höchsten?</div>
          <div className="question-number space">Frage #2</div>
          <div className="question-text-2">Mit welchem Ereignis lässt sich die Angst vor COVID-19 in der Bevölkerung vergleichen?</div>
          <div className="question-number space">Frage #3</div>
          <div className="question-text-2">Wie ist das Risiko eines schweren COVID-19 Krankheitsverlaufes bei Allergikern mit Heuschnupfen einzuschätzen?</div>
          <div className="question-number space">Frage #4</div>
          <div className="question-text-2">In welchem deutschen Bundesland war das Risiko an COVID-19 zu versterben am höchsten?</div>
          <div className="question-number space">Frage #5</div>
          <div className="question-text-2 last">Wie viele Todesfälle durch COVID-19 ereigneten sich in Deutschland bis zum 21.05.2020?
          </div>
          <div className="cta">
            <div className="cta-text question-number">Erfahren Sie mehr mit<br/>  unseren Infografiken</div>
          <div className="cta-button">
            <div class="button-container">
              <div class="rounded-md shadow">
                <a href="https://corona.saschamajewsky.de" class="button-cta  md:text-lg md:px-10">
                  Mehr Infos
                </a>
              </div>
            </div>
          </div>
          </div>
        </div>
        <div className="right-container">
          <div className="heading">Ihre Antworten</div>
          <div class="result-text fade">
            {localStorage.getItem('question1') === 'b' ?
              <div className='result-title-sub-1 noselect fade'>
                <span class="right"><span className="bold">Ihre Antwort:</span> Sonntag 15.03.2020</span><br/>
                <span class="right"><span className="bold">Richtige Antwort:</span> Sonntag der 15.03.2020</span>
              </div> :
              <div className='result-title-sub-1 noselect fade'>
                <span class="wrong"><span className="bold">Ihre Antwort:</span> {localStorage.getItem('question1') === 'a' ? "Donnerstag 20.02.2020" :  "Samstag 28.03.2020"}</span><br/> 
                <span class="right"><span className="bold">Richtige Antwort:</span> Sonntag der 15.03.2020</span>
              </div>
            }
            <div className="explanation fade">Am 15.03.2020 verkündete die Tagesschau die Schließung der deutschen Außengrenzen und verursachte Unsicherheit für Reisende und Familien. Neben den meisten Google Suchanfragen nach „Angst“ hatten auch symptomatische Suchbegriffe wie „Husten“ an diesem Tag seinen Höhepunkt.</div>
        </div>

        <div class="result-text fade space-2">
          {localStorage.getItem('question2') === 'a' ? 
            <div className='result-title-sub-1 noselect fade'>
              <span class="right"><span className="bold">Ihre Antwort:</span> Anschläge Paris 13.11.2015</span><br/> 
              <span class="right"><span className="bold">Richtige Antwort:</span> Anschläge Paris 13.11.2015</span>
            </div> :
            <div className='result-title-sub-1 noselect fade'>
              <span class="wrong"><span className="bold">Ihre Antwort:</span> {localStorage.getItem('question2') === 'b' ? "Wahlsieg Trump 2016" :  "Flüchtlingskrise 2015/2016"}</span><br/> 
              <span class="right"><span className="bold">Richtige Antwort:</span> Anschläge Paris 13.11.2015</span>
            </div>
          }
            <div className="explanation fade">Vergleicht man die Suche der Deutschen nach dem Schlagwort „Angst“ über einen längeren Zeitraum stellt man fest, dass nur selten die Angst in der Bevölkerung so hoch war. Ähnliche Ergebnisse gab es während den Terroranschlägen in Paris am 13.11.2015 bei dem neben dem Bataclan-Theater mehrere Orte des öffentlichen Lebens gleichzeitig angegriffen worden sind.</div>
        </div>

        <div class="result-text fade space-2">
          {localStorage.getItem('question3') === 'b' ? 
            <div className='result-title-sub-1 noselect fade'>
              <span class="right"><span className="bold">Ihre Antwort:</span> Unverändertes Risiko</span><br/> 
              <span class="right"><span className="bold">Richtige Antwort:</span> Unverändertes Risiko</span>
            </div> :
            <div className='result-title-sub-1 noselect fade'>
              <span class="wrong"><span className="bold">Ihre Antwort:</span> {localStorage.getItem('question3') === 'a' ? "Höheres Risiko" :  "Niedrigeres Risiko"}</span><br/> 
              <span class="right"><span className="bold">Richtige Antwort:</span> Unverändertes Risiko</span>
            </div>
          }
            <div className="explanation fade">Allergikern mit Heuschnupfen zeigen bei Pollen bestimmter Bäume eine starke Reaktion des Immunsystems und interpretiert harmlose Stoffe als gefährlich ein. Für die Corona-Krise gibt es jedoch keine Auswirkung, da das Immunsystem keine Überreaktion zeigt und somit keinen schwereren Krankheitsverlauf erzeugt.</div>
        </div>

        <div class="result-text fade space-2">
          {localStorage.getItem('question4') === 'b' ? 
            <div className='result-title-sub-1 noselect fade'>
              <span class="right"><span className="bold">Ihre Antwort:</span> Bayern</span><br/> 
              <span class="right"><span className="bold">Richtige Antwort:</span> Bayern</span>
            </div> :
            <div className='result-title-sub-1 noselect fade'>
              <span class="wrong"><span className="bold">Ihre Antwort:</span> {localStorage.getItem('question4') === 'a' ? "Mecklenburg-Vorpommern" :  "Berlin"}</span><br/> 
              <span class="right"><span className="bold">Richtige Antwort:</span> Bayern</span>
            </div>
          }
            <div className="explanation fade">Die meisten Todesfälle im Zusammenhang mit COVID-19 gab es in Bayern. Hier gab es 2.407 Todesfälle (18,41 Todesfälle pro 100 Tsd. Einwohner). In Berlin gab es insgesamt 186 Todesfälle (5,1 Todesfälle pro 100 Tsd. Einwohner), wohingegen Mecklenburg- Vorpommern 20 Todesfälle (1,24 Todesfälle pro 100 Tsd. Einwohner) zu verzeichnen hatte.</div>
        </div>

        <div class="result-text fade space-3">
          {localStorage.getItem('question5') === 'a' ? 
            <div className='result-title-sub-1 noselect fade'>
              <span class="right"><span className="bold">Ihre Antwort:</span> 8.281 Todesfälle</span><br/> 
              <span class="right"><span className="bold">Richtige Antwort:</span> 8.281 Todesfälle</span>
            </div> :
            <div className='result-title-sub-1 noselect fade'>
              <span class="wrong"><span className="bold">Ihre Antwort:</span> {localStorage.getItem('question1') === 'b' ? "32.330 Todesfälle" :  "9.186 Todesfälle"}</span><br/> 
              <span class="right"><span className="bold">Richtige Antwort:</span> 8.281 Todesfälle</span>
            </div>
          }
            <div className="explanation fade">In Deutschland ereigneten sich bis zum 21.05.2020 8.281 Todesfälle. In Belgien waren es zum selben Zeitpunkt 9.186 Todesfälle und in Italien 32.330 Todesfälle.</div>
        </div>

        
        </div>
        {/* <div className='result-title noselect fade'>Ergebnisse</div>
       

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
        </button> */}
      </div>
    );
  }
}

export default Result;
