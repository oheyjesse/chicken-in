import React from 'react'
import '../PaySelector.scss'

const PaySelector = ({value, handleDtChange}) => {
  return (
    <div className='dt-mutliplier'>
      <div className="title-card">
        <h2>Double Time</h2>
      </div>
      <div className="Rate-info">
        <h3>Current Rate</h3>
        <div className='rate-indicator'>
          <h3>{this.state.dtRate}</h3>
        </div>
      </div>
      <div className="custom-select">
        <select value={value} onChange={handleDtChange}>
          <option defaultValue="1.0">Set Rate</option>
          <option value="1.25">1.25</option>
          <option value="1.50">1.50</option>
          <option value="1.75">1.75</option>
          <option value="2.25">2.25</option>
          <option value="2.50">2.50</option>
          <option value="2.75">2.75</option>
          <option value="3.00">3.00</option>
        </select>
      </div>
    </div>
  )
}

export { PaySelector }
