import Faq from './components/Faq'
import imgBackground from './assets/images/background-pattern-desktop.svg'

function App() {
  return (
    <>
      <div className="body">
        <img
          className="imgBackground"
          src={imgBackground}
          alt="background image"
        />
        <div className="boxResponsive">
          <Faq />
        </div>
        <div className="attribution">
          Challenge by{' '}
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
            rel="noreferrer"
          >
            Frontend Mentor
          </a>
          . Coded by <a href="#">Your Name Here</a>.
        </div>
      </div>
    </>
  )
}

export default App
