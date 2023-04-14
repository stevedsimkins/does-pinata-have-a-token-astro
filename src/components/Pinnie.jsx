import "../styles/Pinnie.css"
import JSConfetti from "js-confetti"

export default function Pinnie() {

  const jsConfetti = new JSConfetti()

  jsConfetti.addConfetti({
    confettiColors: [
      '#6e57ff', '#00cc92', '#ec78ff', '#ff9900'
    ]
  })

  function shootConfetti() {
    jsConfetti.addConfetti({
      confettiColors: [
        '#6e57ff', '#00cc92', '#ec78ff', '#ff9900'
      ]
    })
  }

  return (
    <div className="container">
      <img onClick={shootConfetti} src="/assets/pinnie.svg" alt="Pinata logo" />
      <h1>NO</h1>
    </div>
  )
}
