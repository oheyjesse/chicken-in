import React from 'react';
import postits from './postits.jpg'

const ContactPage = () => (
  <div>
    <img src={postits} alt="postits" width="300"/>
    <h2>Got a burning question?</h2>
    <form action="" method="post">
      Email <br/>
      <input
        type="email"
        name="email"
        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"
        title="Invalid email address"
        required/> <br/>
      Reason for enquery <br/>
      <select name="enquery">
        <option value="">Select a reson...</option>
        <option value="reason1">Reason1</option>
        <option value="reason2">Reason2</option>
        <option value="reason3">Reason3</option>
        <option value="reason4">Reason4</option>
      </select> <br/>
      Message <br/>
      <textarea name="message" cols="30" rows="10"></textarea> <br/>
      <button type="submit">Send</button>
    </form>
  </div>
)

export { ContactPage }