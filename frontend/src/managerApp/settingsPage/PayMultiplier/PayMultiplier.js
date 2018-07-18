import React from 'react'

class PayMultiplierForm extends React.Component {
  state = {
    otRate: 1.25,
    dtRate: 2.0
  }

  handleOtChange = (e) => {
    this.setState({
      otRate: e.target.value
    })
  }

  handleDtChange = (e) => {
    this.setState({
      dtRate: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log('sends axios res to update backend')
  }
  
  checkState = (e) => {
    e.preventDefault()
    console.log(this.state)
  }

  render () {
    return (
      <div className='form-container'>
        <section className='pay-multiplier'>
          <h2>Pay Rates</h2>
          <br/>
          <form onSubmit={this.handleSubmit}>
            <section className='dt-mutliplier'>
              <h3>Overtime</h3>
              <br/>
              <h4>Current Rate</h4>
              <h1>{this.state.otRate}</h1>
              <select value={this.state.value} onChange={this.handleOtChange}>
                <option defaultValue="1.0">Set Rate</option>
                <option value="1.25">1.25</option>
                <option value="1.50">1.50</option>
                <option value="1.75">1.75</option>
                <option value="2.25">2.25</option>
                <option value="2.50">2.50</option>
                <option value="2.75">2.75</option>
                <option value="3.00">3.00</option>
              </select>
            </section>
            <section className='dt-mutliplier'>
              <h3>Doubletime</h3>
              <br/>
              <h4>Current Rate</h4>
              <h1>{this.state.dtRate}</h1>
              <select value={this.state.value} onChange={this.handleDtChange}>
                <option defaultValue="1.0">Set Rate</option>
                <option value="1.25">1.25</option>
                <option value="1.50">1.50</option>
                <option value="1.75">1.75</option>
                <option value="2.25">2.25</option>
                <option value="2.50">2.50</option>
                <option value="2.75">2.75</option>
                <option value="3.00">3.00</option>
              </select>
            </section>
            <input onClick={this.handleSubmit} type='submit' value='Confirm Change'/>
          </form>
        </section>
        <button onClick={this.checkState}>check state</button>
      </div>
    )
  }
}

export default PayMultiplierForm
