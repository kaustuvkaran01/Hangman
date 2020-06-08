import React, { Component } from 'react'
import { randomWord } from "./Word";
import styled from "styled-components";
import step0 from "../images/0.jpg";
import step1 from "../images/1.jpg";
import step2 from "../images/2.jpg";
import step3 from "../images/3.jpg";
import step4 from "../images/4.jpg";
import step5 from "../images/5.jpg";
import step6 from "../images/6.jpg";

class Hangman extends Component {
  
    static defaultProps = {
        maxWrong:6,
        images:[step0,step1,step2,step3,step4,step5,step6]
    }

    constructor(props){
        super(props);
        this.state = {
            mistake:0,
            guessed: new Set([]),
            answer: randomWord(),
            maxWrong:6,

        }
    }

    handleGuess = e => {
        let letter = e.target.value;
        this.setState( st => ({
            guessed: st.guessed.add(letter),
            mistake: st.mistake + (st.answer.includes(letter) ? 0:1)
        }));

    }

    guessedWord() {
        return this.state.answer.split("").map( letter => (this.state.guessed.has(letter) ? letter : " _ "));
    }

    generateButtons() {
        return "abcdefghijklmnopqrstuvwxyz"
          .split("")
          .map((letter) => (
            <button
             className="btn btn-lg btn-primary m-2"
             key={letter}
             value={letter}
             onClick = {this.handleGuess}
             disabled = {this.state.guessed.has(letter)}
            >
                {letter}
            </button>
          ));
    }

    resetButton = () => {
        this.setState({
            mistake : 0,
            guessed: new Set([]),
            answer: randomWord(),
            maxWrong:6,
        });
    }

   render() {

    const gameOver = this.state.mistake >= this.state.maxWrong;
    const isWinner = this.guessedWord().join("") === this.state.answer;
    let gameStat = this.generateButtons();

    if(isWinner) {
        gameStat="You Won!!!";
    }
    if (gameOver){
        gameStat="You lost!!"
    }
    console.log(gameStat);
    console.log(gameOver);
    return (
      <MainContainer>
          <h1>Hey! Let's Play Hangman</h1>
          <Guesses>
              Wrong Guesses: {this.state.mistake} of {this.props.maxWrong}
          </Guesses>
          <HangImage>
              <img src={this.props.images[this.state.mistake]} alt=""/>
          </HangImage>
          <div className="text-center" style={{fontWeight:"500", fontSize:"larger" }}>
            <p> Guess the name of the programming language: </p>
            <p>
                {!gameOver ? this.guessedWord() : this.state.answer}
            </p>
            <p>{gameStat}</p>
            <button className="btn btn-lg btn-info" onClick={this.resetButton}>Reset</button>
          </div>
      </MainContainer>
    )
  }
}
export default Hangman;

const MainContainer = styled.div`
    display: container;
    margin: 5rem;
    text-align: center;
    align-content: center;
    justify-content: center;
`;
const Guesses = styled.div`
    float: right;
    padding: 2rem;
    font-size: large;
`;
const HangImage = styled.div`
    padding-left: 20vw;
`;
