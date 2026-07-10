import { useState } from 'react'
import Button from '../../components/Button'

function AddCourse() {
  const [title, setTitle] = useState('')

  function handleSave() {
    console.log(title)
  }

  return (
    <>
      <h1>Назва </h1>

      <input
        type="text"
        placeholder="Назва курсу"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <Button onClick={handleSave}>
        Ок
      </Button>
    </>
  )
}

export default AddCourse