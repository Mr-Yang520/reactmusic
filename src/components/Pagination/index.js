import { Pagination } from 'antd'
import React, { memo } from 'react'
import { PaginNationWrapper } from './style'

export default memo(function style(props) {
  const { total, onPageChange, CurrentPageIndex } = props
  function itemRender(current, type, originalElement) {
    if (type === 'prev') {
      return <button className="control prev">上一页</button>
    }
    if (type === 'next') {
      return <button className="control next">下一页</button>
    }
    return originalElement
  }
  return (
    <PaginNationWrapper>
      <Pagination
        size="small"
        current={CurrentPageIndex}
        itemRender={itemRender}
        defaultCurrent={1}
        pageSize={35}
        showSizeChanger={false}
        total={total}
        onChange={onPageChange}
      />
    </PaginNationWrapper>
  )
})
