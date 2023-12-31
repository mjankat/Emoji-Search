/* eslint-disable react/prop-types */

const ListEmojis = ({ emoji, onClick }) => {
    return (
      <button
      onClick={onClick}
      id="emojiButton"
      className="text-start block w-full text-sm text-gray-800 border border-gray-400 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    >
          <div className="p-5">
              {emoji.emoji}
              {emoji.name}
          </div>
      </button>
    )
  }
  
  export default ListEmojis