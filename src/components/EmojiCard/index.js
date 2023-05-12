// Write your code here.

import './index.css'

const EmojiCard = props => {
  const {emojiItem, changeEmojiImage} = props

  const {emojiName, emojiUrl, id} = emojiItem

  const changeEmoji = () => {
    changeEmojiImage(id)
  }

  return (
    <li className="emoji-each-item">
      <button type="button" onClick={changeEmoji} className="emoji-button">
        <img src={emojiUrl} alt={emojiName} className="emoji-image" />
      </button>
    </li>
  )
}

export default EmojiCard
