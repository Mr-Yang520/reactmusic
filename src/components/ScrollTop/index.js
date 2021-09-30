import { memo, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default memo(function ScrollTop(props) {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return props.children
})
