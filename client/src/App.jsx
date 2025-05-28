import './app.css'
import RightBar from './components/rightBar/RightBar'
import TopBar from './components/topBar/TopBar'
import Main from './components/main/Content'


const App = () => {
  return (
    <div className='app' dir='rtl'>
      <RightBar />
      <div className='main-content'>
      <TopBar />
      <Main />
      </div>  
    </div>
  )
}

export default App