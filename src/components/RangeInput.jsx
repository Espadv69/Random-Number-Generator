const RangeInput = ({ min, max, setMin, setMax }) => {
  const handleMinChange = (e) => {
    setMin(Number(e.target.value))
  }

  const handleMaxChange = (e) => {
    setMax(Number(e.target.value))
  }

  return (
    <div>
      <label>
        Min:
        <input type="number" value={min} onChange={handleMinChange} />
      </label>

      <label>
        Max:
        <input type="number" value={max} onChange={handleMaxChange} />
      </label>
    </div>
  )
}

export default RangeInput
