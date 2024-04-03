import './index.css'

const lossImg = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
const winImg = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'

const WinOrLoseCard = props => {
  const {isWon, score, resetCliking} = props
  const imgUrl = isWon ? winImg : lossImg
  const gameStatus = isWon ? 'You Won' : 'You Loss'
  const scoreLabel = isWon ? 'Best Score' : 'Score'

  return (
    <div className="win-loss-con">
      <div className="detail-section">
        <h1>{gameStatus}</h1>
        <p className="score-label">{scoreLabel}</p>
        <p className="total_score">{score}/12</p>
        <button type="button" className="button" onClick={resetCliking}>
          Play Again
        </button>
      </div>
      <div className="img-sec">
        <img src={imgUrl} alt="win or loss imgs" className="img" />
      </div>
    </div>
  )
}

export default WinOrLoseCard
