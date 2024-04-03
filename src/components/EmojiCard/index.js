import './index.css'

const EmojiCard = props => {
  const {list, clickEmoji} = props

  const OnClickEmojiCard = () => {
    clickEmoji(list.id)
  }

  return (
    <li className="emoji-card">
      <img
        src={list.emojiUrl}
        alt="emoji"
        onClick={OnClickEmojiCard}
        className="emoji-img"
      />
    </li>
  )
}

export default EmojiCard
