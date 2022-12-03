import { useState } from 'react'
import './App.css'
import AppRoutes from './routes/routes'
import { AuthGoogleProvider } from './contexts/googleAuth'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <AuthGoogleProvider>
        <AppRoutes />
      </AuthGoogleProvider>
    </div>
  )
}

export default App
