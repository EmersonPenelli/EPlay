import Banner from './components/Banner'
import Header from './components/Header'
import { GlobalCss } from './style'

function App() {
  return (
    <>
      <GlobalCss />
      <div className="container">
        <Header />
      </div>
      <Banner />
    </>
  )
}

export default App
