const RandomNumberDisplay = ({ randomNumber, count }) => {
  return (
    <div>
      <h1>Random Number Generator</h1>
      <p>
        <strong>Generated Number:</strong> {randomNumber}
      </p>
      <p>
        <strong>Generation Count:</strong> {count}
      </p>
    </div>
  )
}

export default RandomNumberDisplay
