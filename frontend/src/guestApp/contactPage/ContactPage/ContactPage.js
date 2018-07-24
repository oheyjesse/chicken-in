import React from 'react'
import axios from 'axios'
import './ContactPage.scss'
import { hostURL } from '../../../hostUrl'

class ContactPage extends React.Component {
  state = {
    email: null,
    reason: null,
    message: null,
    sendMessage: false,
    sendingMessage: false
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

  handleSubmit = async (e) => {
    e.preventDefault()

    this.setState(() => {
      return {
        sendingMessage: true
      }
    })

    await axios.post(`http://${hostURL || window.location.host}/api/contact/`, this.state)
    this.setState(() => {
      return {
        sendMessage: true,
        sendingMessage: false
      }
    })

    setTimeout(() =>{
      this.setState(() => {
        return {
          sendMessage: false
        }
      })
    }, 5000)
  }

  render () {
    console.log(this.state.sendMessage)
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
              <option value="General">General</option>
              <option value="Problem/Bug Report">Problem/Bug Report</option>
              <option value="Improvement Suggestion">Improvement Suggestion</option>
              <option value="Other">Other</option>
            </select>
            <label>Message</label>
            <textarea onChange={this.handleChange} name="message" cols="30" rows="10"></textarea>
            <p className={this.state.sendMessage ? 'message_sent_message_active' : 'message_sent_message_hidden'}>Message sent!</p>
            <button className="button_submit" type="submit">{this.state.sendingMessage ? 'Sending message...' : 'Send'}</button>
          </form>
        </div>
      </div>
    )
  }
}

export { ContactPage }