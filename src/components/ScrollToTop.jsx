import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'

function ScrollToTop(props) {
  const { children } = props
  const location = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>
}

ScrollToTop.propTypes = {
  children: PropTypes.shape().isRequired,
}

export default ScrollToTop
