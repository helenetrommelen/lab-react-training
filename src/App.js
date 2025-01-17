import React from 'react';
import logo from './logo.svg';
import './App.css';
import IdCard from './IdCard';
import "./styles/styles-idCard.css"
import LikeButton from './LikeButton'
import ClickablePicture from './ClickablePicture'
import Greetings from './Greetings'
import Random from './Random'
import BoxColor from './BoxColor'
import CreditCard from './CreditCard'



export default class App extends React.Component {


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>Iteration 1: IdCard</h2><br />
          <IdCard 
            lastName='Doe'
            firstName='John'
            gender='male'
            height={178}
            birth={new Date("1992-07-14")}
            picture="https://randomuser.me/api/portraits/men/44.jpg"
          />
          <IdCard
            lastName='Delores '
            firstName='Obrien'
            gender='female'
            height={172}
            birth={new Date("1988-05-11")}
            picture="https://randomuser.me/api/portraits/women/44.jpg"
          />
          <br/>

          <h2>Iteration 2: Greetings</h2><br />
          <Greetings lang="de">Ludwig</Greetings>
          <Greetings lang="fr">François</Greetings>
          <br />

          <h2>Iteration 3: Random</h2><br />
          <Random min={1} max={6}/>
          <Random min={1} max={100}/>
          <br />

          <h2>Iteration 4: Boxcolor</h2><br />
        
          <BoxColor r={255} g={0} b={0} />
          <BoxColor r={128} g={255} b={0} />
          <br />

          <h2>Iteration 5: Credit Card</h2><br />

          <CreditCard
            type="Visa"
            number="0123456789018845"
            expirationMonth={3}
            expirationYear={2021}
            bank="BNP"
            owner="Maxence Bouret"
            bgColor="#11aa99"
            color="white" 
          />
          <CreditCard
            type="Master Card"
            number="0123456789010995"
            expirationMonth={3}
            expirationYear={2021}
            bank="N26"
            owner="Maxence Bouret"
            bgColor="#eeeeee"
            color="#222222" />
          <CreditCard
            type="Visa"
            number="0123456789016984"
            expirationMonth={12}
            expirationYear={2019}
            bank="Name of the Bank"
            owner="Firstname Lastname"
            bgColor="#ddbb55"
            color="white" />

          <h2>Iteration 6: Rating</h2><br />

          <h2>Iteration 8</h2>
          <LikeButton/>
          <br/>

          <h2>Iteration 9</h2>

          <ClickablePicture
            img='/img/persons/maxence.png'
            imgClicked='/img/persons/maxence-glasses.png'
          />
          <br/>
          <h2>Iteration 10</h2>



        </header>
      </div>
    );
  }
}