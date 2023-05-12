// Write your code here.

import './index.css'

const WinOrLoseCard = props => {
  const {resultDetails, playAgainGame} = props

  console.log(resultDetails)

  const {score, topscore, emojisList} = resultDetails

  const playAgainButton = () => {
    playAgainGame(topscore)
  }

  const winOrLose = topscore === emojisList.length

  const wonImg = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
  const loseImg = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  const imgUrl = winOrLose ? wonImg : loseImg
  const imgText = winOrLose ? 'You Won' : 'You Lose'
  const scoreText = winOrLose ? 'Best Score' : 'Score'

  return (
    <div className="result-page-container">
      <img src={imgUrl} alt="win or lose" className="result-img" />
      <div>
        <h1 className="result-heading">{imgText}</h1>
        <p className="result-score">{scoreText}</p>
        <h1 className="score-details">{`${score}/${emojisList.length}`}</h1>
        <button
          className="play-again-button"
          onClick={playAgainButton}
          type="button"
        >
          Play Again
        </button>
      </div>
    </div>
  )
}

export default WinOrLoseCard
