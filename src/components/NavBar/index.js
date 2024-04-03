import './index.css'

const NavBar = props => {
  const {topScore, isProgressGame, currentScore} = props
  return (
    <div className="nav-bar">
      <div className="logo-sec">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="img-logo"
        />
        <h1>EmojiGame</h1>
      </div>
      {isProgressGame && (
        <h3 className="scores">
          <h3>Score: {currentScore}</h3>
          <h3>TopScore: {topScore}</h3>
        </h3>
      )}
    </div>
  )
}

export default NavBar
