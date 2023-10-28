import React from 'react'

const Statistics = () => {
  return (
    <div>
      Statistics

      function calculateWPM(correctCharacters, timeInMinutes) {
  return Math.round(correctCharacters / 5 / timeInMinutes);
}

function calculateAccuracy(correctWords, totalWords) {
  return ((correctWords / totalWords) * 100).toFixed(2);
}

// Other score-related functions

    </div>
  )
}

export default Statistics
