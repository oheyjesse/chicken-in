import React from 'react'
import moment from 'moment'
import './Paginator.scss'

const Paginator = ({pagination, handleClick: paginate}) => {
  return (
    <div className="paginator">
      {pagination.weekStart.format('MMMM Do')}
      <button onClick={paginate} value="backward">Previous Week</button>
      <button onClick={paginate} value="forward">Next Week</button>
      {pagination.weekEnd.format('MMMM Do')}
    </div>
  )
}

export { Paginator }
