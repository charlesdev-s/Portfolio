import { useState, useEffect, useRef, useLayoutEffect, useCallback } from 'react'

// Scale the fixed 1280px design down to fit narrower viewports, faithfully.
export default function ScaledPage({ designWidth = 1280, children }) {
  const innerRef = useRef(null)
  const [scale, setScale] = useState(1)
  const [outerH, setOuterH] = useState('auto')

  const recompute = useCallback(() => {
    const vw = document.documentElement.clientWidth
    const s = vw < designWidth ? vw / designWidth : 1
    setScale(s)
    if (innerRef.current) setOuterH(innerRef.current.offsetHeight * s)
  }, [designWidth])

  useLayoutEffect(() => {
    // Measure-then-scale: we must read the rendered width/height before we can
    // compute the scale factor, so the synchronous setState here is intentional.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    recompute()
    window.addEventListener('resize', recompute)
    return () => window.removeEventListener('resize', recompute)
  }, [recompute])

  useEffect(() => {
    if (!innerRef.current) return
    const ro = new ResizeObserver(() => recompute())
    ro.observe(innerRef.current)
    return () => ro.disconnect()
  }, [recompute])

  return (
    <div style={{ width: '100%', overflow: 'hidden', height: outerH }}>
      <div
        ref={innerRef}
        style={{ width: designWidth, transform: `scale(${scale})`, transformOrigin: '0 0' }}
      >
        {children}
      </div>
    </div>
  )
}
