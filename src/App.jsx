import { useState, useEffect } from 'react'
import ScaledPage from './ScaledPage'
import PortfolioC from './PortfolioC'

// Below this width we render a genuinely responsive (stacked, full-size) layout.
// At or above it, the fixed 1280px design is scaled to fit — faithful on tablet/desktop.
const MOBILE_BREAKPOINT = 760

function useIsMobile(breakpoint = MOBILE_BREAKPOINT) {
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth < breakpoint : false
  )
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < breakpoint)
    onResize()
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [breakpoint])
  return isMobile
}

function App() {
  const isMobile = useIsMobile()

  if (isMobile) {
    return <PortfolioC mobile />
  }

  return (
    <ScaledPage designWidth={1280}>
      <PortfolioC />
    </ScaledPage>
  )
}

export default App
