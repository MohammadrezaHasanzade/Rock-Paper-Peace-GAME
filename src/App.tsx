import React, { useState, type JSX } from 'react'
import Game from './components/Game'
import Start from './components/Start'

const App: React.FC = () => {
  // should be before state
  const handelStartBtn = ()=>{
    setComponent(<Game/>)
  }

  const [component, setComponent] = useState<JSX.Element>(<Start goToGame={handelStartBtn} />);

  return (
    <div>
      {component}
    </div>
  )
}

export default App