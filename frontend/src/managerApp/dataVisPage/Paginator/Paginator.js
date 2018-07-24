import React from 'react'
import moment from 'moment'
import './Paginator.scss'

const Paginator = ({paginationWeekStart, paginationWeekEnd, handleBack, handleForward}) => {
  return (
    <div className="paginator">
      <div className="center">
        <button className="btn-page back" onClick={handleBack}>◀︎</button>
        <h2>&nbsp;{paginationWeekStart.format('DD/MM/YY')} - {paginationWeekEnd.format('DD/MM/YY')}&nbsp;</h2>
        <button className="btn-page forward" onClick={handleForward}>▶</button>
      </div>
    </div>
  )
}

export { Paginator }
