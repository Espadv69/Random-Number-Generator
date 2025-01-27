const GenerateButton = ({ onGenerate }) => {
  return (
    <button className="generateBtn" onClick={onGenerate}>
      Generate Random Number
    </button>
  )
}

export default GenerateButton
