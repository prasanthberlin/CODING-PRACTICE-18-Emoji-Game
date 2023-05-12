// Write your code here.
import './index.css'

const NavBar = props => {
  const {navDetails} = props
  const {score, topscore, winOrLose} = navDetails

  const displayScore = (
    <div className="score-details-container">
      <p className="score-app-detail">Score: {score}</p>
      <p className="top-score-details">Top Score: {topscore}</p>
    </div>
  )

  const resultPage = winOrLose ? '' : displayScore

  return (
    <div className="navbar-container">
      <div className="app-logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="app-emoji-logo"
        />
        <h1 className="emoji-game-text">Emoji Game</h1>
      </div>
      {resultPage}
    </div>
  )
}

export default NavBar
