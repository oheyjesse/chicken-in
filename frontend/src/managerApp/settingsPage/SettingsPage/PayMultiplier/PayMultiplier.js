import React from 'react'
import './PayMultiplier.scss'

class PayMultiplierForm extends React.Component {

  render () {
    return (
      <div className='card-container'>
        <header className='card-header'>
          <h2>Pay Rates</h2>
        </header>
        <div className='card-content-pay'>
          <section className='pay-multiplier'>
            <form className='multiplier-form' onSubmit={this.props.handleSubmit}>
              <div className='ot-mutliplier'>
                <div className="title-card">
                  <h2>Overtime</h2>
                </div>
                <div className="Rate-info">
                  <h3>Current Rate</h3>
                  <div className='rate-indicator'>
                    <h3>{this.props.otRate}</h3>
                  </div>
                </div>
                <div className="custom-select">
                  <select value={this.props.value} onChange={this.props.handleOtChange}>
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
            
              <div className='dt-mutliplier'>
                <div className="title-card">
                  <h2>Double Time</h2>
                </div>
                <div className="Rate-info">
                  <h3>Current Rate</h3>
                  <div className='rate-indicator'>
                    <h3>{this.props.dtRate}</h3>
                  </div>
                </div>
                <div className="custom-select">
                  <select value={this.props.value} onChange={this.props.handleDtChange}>
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
            </form>
          </section>
        </div>
      </div>
    )
  }
}

export default PayMultiplierForm
