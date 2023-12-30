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
        <Faq />
      </div>
    </>
  )
}

export default App
