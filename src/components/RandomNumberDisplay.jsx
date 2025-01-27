const RandomNumberDisplay = ({ randomNumber, count }) => {
  return (
    <div>
      <h1 className="h1-title">Random Number Generator</h1>
      <p className="generatedNumber">
        <strong>Generated Number:</strong>{' '}
        {randomNumber !== null ? randomNumber : 'N/A'}
      </p>
      <p className="counter">
        <strong>Generation Count:</strong> {count}
      </p>
    </div>
  )
}

export default RandomNumberDisplay
