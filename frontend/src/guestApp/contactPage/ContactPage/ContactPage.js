import React from 'react'
import './ContactPage.scss'

class ContactPage extends React.Component {
  state = {
    email: null,
    reason: null,
    message: null
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSelectReason = (e) => {
    this.setState({
      reason: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state)
  }

  render () {
    return (
      <div className="ContactPage">
        <h1>Got a burning question?</h1>
        <div className="form_container">
          <form onSubmit={this.handleSubmit}>
            <label>Email</label>
            <input
              onChange={this.handleChange}
              type="email"
              name="email"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"
              title="Invalid email address"
              required/>
            <label>Reason for enquiry</label>
            <select onChange={this.handleSelectReason} name="enquery">
              <option value="">Select a reason...</option>
              <option value="reason1">Reason1</option>
              <option value="reason2">Reason2</option>
              <option value="reason3">Reason3</option>
              <option value="reason4">Reason4</option>
            </select>
            <label>Message</label>
            <textarea onChange={this.handleChange} name="message" cols="30" rows="10"></textarea>
            <button className="button_submit" type="submit">Send</button>
          </form>
        </div>
      </div>
    )
  }
}

export { ContactPage }