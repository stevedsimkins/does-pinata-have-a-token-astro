import "../styles/Pinnie.css"
import JSConfetti from "js-confetti"

export default function Pinnie() {

  const jsConfetti = new JSConfetti()

  jsConfetti.addConfetti()

  function shootConfetti() {
    jsConfetti.addConfetti()
  }

  return (
    <div className="container">
      <img onClick={shootConfetti} src="/assets/pinnie.svg" alt="Pinata logo" />
      <h1>NO</h1>
    </div>
  )
}
