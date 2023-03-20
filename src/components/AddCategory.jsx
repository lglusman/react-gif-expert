import { useState } from 'react'

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState('')

  const onInputChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (inputValue.trim().length <= 1) return
    onNewCategory(inputValue.trim())
    setInputValue('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={onInputChange}
        type='text'
        placeholder='buscar gifs'
        value={inputValue}
      />
    </form>
  )
}
