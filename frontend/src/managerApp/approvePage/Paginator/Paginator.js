import React from 'react'
import moment from 'moment'
import './Paginator.scss'

const Paginator = ({pagination, handleClick: paginate}) => {
  return (
    <div className="paginator">
      <div className="center">
        <button className="btn-page back" onClick={paginate} value="backward">◀︎</button>
        <h2>&nbsp;{pagination.weekStart.format('MM/DD/YY')} - {pagination.weekEnd.format('MM/DD/YY')}&nbsp;</h2>
        <button className="btn-page forward" onClick={paginate} value="forward">▶</button>
      </div>
    </div>
  )
}

export { Paginator }
