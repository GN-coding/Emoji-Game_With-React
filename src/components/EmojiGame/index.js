import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

class EmojiGame extends Component {
  state = {isProgressGame: true, topScore: 0, clikedEmojiesList: []}

  finishGameAndSetTopScore = currentTopScore => {
    const {topScore} = this.state
    let newTopScore = topScore
    if (currentTopScore > newTopScore) {
      newTopScore = currentTopScore
    }
    this.setState({topScore: newTopScore, isProgressGame: false})
  }

  resetGame = () => {
    this.setState({clikedEmojiesList: [], isProgressGame: true})
  }

  emojiClicking = id => {
    const {emojisList} = this.props
    const {clikedEmojiesList} = this.state
    const isEmojiPresent = clikedEmojiesList.includes(id)
    const clikedEmojiListLength = clikedEmojiesList.length

    if (isEmojiPresent) {
      this.finishGameAndSetTopScore(clikedEmojiListLength)
    } else {
      if (emojisList.length - 1 === clikedEmojiListLength) {
        this.finishGameAndSetTopScore(emojisList.length)
      }
      this.setState(pre => ({
        clikedEmojiesList: [...pre.clikedEmojiesList, id],
      }))
    }
  }

  renderDisplayCArd = () => {
    const {emojisList} = this.props
    const {clikedEmojiesList} = this.state
    const isWon = emojisList.length === clikedEmojiesList.length

    return (
      <WinOrLoseCard
        isWon={isWon}
        score={clikedEmojiesList.length}
        resetCliking={this.resetGame}
      />
    )
  }

  renderEmojisList = () => {
    const {emojisList} = this.props
    const ShuffledEmojisList = emojisList.sort(() => Math.random() - 0.5)
    return (
      <ul className="emoji-list">
        {ShuffledEmojisList.map(eachEmoji => (
          <EmojiCard
            key={eachEmoji.id}
            list={eachEmoji}
            clickEmoji={this.emojiClicking}
          />
        ))}
      </ul>
    )
  }

  render() {
    const {clikedEmojiesList, isProgressGame, topScore} = this.state
    return (
      <div className="App-container">
        <NavBar
          isProgressGame={isProgressGame}
          topScore={topScore}
          currentScore={clikedEmojiesList.length}
        />
        <div className="game-container">
          {isProgressGame ? this.renderEmojisList() : this.renderDisplayCArd()}
        </div>
      </div>
    )
  }
}

export default EmojiGame
