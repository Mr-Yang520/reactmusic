import PropTypes from 'prop-types'
import React, { Fragment, memo } from 'react'
import { ThemeHeaderWrapper } from './style'

function ThemeHeader(props) {
  const { title, keywords } = props
  return (
    <ThemeHeaderWrapper>
      <div className="headline">
        <div className="headleft">
          <a href="#/" className="HotSub">
            {title}
          </a>
          <div className="tab">
            {keywords.map((item) => {
              return (
                <Fragment key={item}>
                  <a href="#/">{item}</a>
                  <span>|</span>
                </Fragment>
              )
            })}
          </div>
        </div>
        <div className="headright">
          <a href="#/">更多</a>
          <i></i>
        </div>
      </div>
    </ThemeHeaderWrapper>
  )
}

ThemeHeader.propTypes = {
  title: PropTypes.string.isRequired,
  keywords: PropTypes.array,
}

ThemeHeader.defaultProps = {
  keywords: [],
}

export default memo(ThemeHeader)
