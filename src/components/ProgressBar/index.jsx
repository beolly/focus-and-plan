function ProgressBar({ progress }) {
  return (
    <>
      <progress
        value={progress}
        max="100"
      />

      <p>{progress}%</p>
    </>
  )
}

export default ProgressBar