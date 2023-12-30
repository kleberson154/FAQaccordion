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
          <div className="attribution">
            <div className="mentor">
              Challenge by{' '}
              <a
                href="https://www.frontendmentor.io?ref=challenge"
                target="_blank"
                rel="noreferrer"
              >
                Frontend Mentor
              </a>
              .
            </div>{' '}
            <div className="create">
              Coded by{' '}
              <a
                href="https://github.com/kleberson154"
                target="_blank"
                rel="noreferrer"
              >
                Kleberson A.
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
