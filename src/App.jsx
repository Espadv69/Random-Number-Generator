import { useState } from 'react'

import RandomNumberDisplay from './components/RandomNumberDisplay'
import GenerateButton from './components/GenerateButton'
import RangeInput from './components/RangeInput'

import { getRandomNumber } from './utils/randomUtils'

const App = () => {
  const [min, setMin] = useState(1) // Initial value
  const [max, setMax] = useState(100) // Initial value
  const [randomNumber, setRandomNumber] = useState(null) // Generated number
  const [count, setCount] = useState(0) // Generation counter

  const handleGenerate = () => {
    if (min >= max) {
      alert('Min value should be less than Max value')
      return
    }

    const number = getRandomNumber(min, max)
    setRandomNumber(number)
    setCount((prevCount) => prevCount + 1)
  }
}
