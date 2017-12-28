import React, { Component } from 'react';
import './info-section.css';

const whatContent = () => (
<section id="modal" className="overlay" tabIndex="-1">
    <div className="content">
      <h3>What do I do?</h3>
      <div>
      <p>This is a Hot or Cold Number Guessing Game. The game goes like this:</p>
      <ul>
        <li>1. I pick a <strong>random secret number</strong> between 1 to 100 and keep it hidden.</li>
        <li>2. You need to <strong>guess</strong> until you can find the hidden secret number.</li>
        <li>3. You will <strong>get feedback</strong> on how close ("hot") or far ("cold") your guess is.</li>
      </ul>
      <p>If you're using a screen reader, you can use the visually hidden "Hear state of game" link in the navigation region to get a reminder of all your past guesses and how close your current guess is to being correct.</p>
      </div>
    </div>
  </section>
)

export default class InfoSection extends Component {
  constructor (props) {
    super(props);
    this.state = {
      toggle: false
    }
  }

  toggle = () => {
    this.setState({
      toggle: !this.state.toggle
    })
  }

  render() {
    return(<div>
    <a 
      href="#what" 
      className="what"
      aria-label="How to play"
     onClick={this.toggle}
    >
    { this.state.toggle  && whatContent() }
      What?
    </a>
    </div>
    )
  }
}