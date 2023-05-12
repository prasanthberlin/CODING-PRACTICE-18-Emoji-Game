import {Component} from 'react'

import NavBar from '../NavBar'

import EmojiCard from '../EmojiCard'

import WinOrLoseCard from '../WinOrLoseCard'

import './index.css'

/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

class EmojiGame extends Component {
  state = {idList: [], score: 0, topscore: 0, winOrLose: false}

  changeEmojiImage = id => {
    const {idList, score, topscore} = this.state

    const checkId = idList.some(eachId => eachId === id)

    if (checkId) {
      this.setState(prevState => ({winOrLose: !prevState.winOrLose}))
      if (score > topscore) {
        this.setState({topscore: score})
      }
    } else {
      this.setState(prevState => ({
        idList: [...prevState.idList, id],
        score: prevState.score + 1,
      }))
      const shuffledEmojisList = () => {
        const {emojisList} = this.props
        return emojisList.sort(() => Math.random() - 0.5)
      }
      shuffledEmojisList()
    }
  }

  playAgainGame = topscore => {
    this.setState({winOrLose: false, idList: [], score: 0, topscore})
  }

  render() {
    const {emojisList} = this.props

    const {score, idList, topscore, winOrLose} = this.state

    const navDetails = {score, topscore, winOrLose}
    const resultDetails = {score, topscore, emojisList}
    let displayPage

    if (idList.length !== emojisList.length) {
      if (winOrLose) {
        displayPage = (
          <WinOrLoseCard
            resultDetails={resultDetails}
            playAgainGame={this.playAgainGame}
          />
        )
      } else {
        displayPage = (
          <ul className="emoji-list-items">
            {emojisList.map(eachEmoji => (
              <EmojiCard
                key={eachEmoji.id}
                changeEmojiImage={this.changeEmojiImage}
                emojiItem={eachEmoji}
              />
            ))}
          </ul>
        )
      }
    } else {
      displayPage = (
        <WinOrLoseCard
          resultDetails={resultDetails}
          playAgainGame={this.playAgainGame}
        />
      )
    }

    return (
      <div className="app-container">
        <div>
          <NavBar navDetails={navDetails} />
          <div className="emoji-list-container">{displayPage}</div>
        </div>
      </div>
    )
  }
}

export default EmojiGame
