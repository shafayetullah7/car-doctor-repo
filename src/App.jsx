
import { Outlet } from 'react-router-dom'
import './App.css'

function App() {


  return (
    <div className='w-full max-w-[86rem] mx-auto'>
      <Outlet></Outlet>
    </div>
  )
}

export default App
