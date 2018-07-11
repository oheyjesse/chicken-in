import React from 'react';
import { ChildComponentOne } from '../ChildComponentOne/ChildComponentOne'
import { ChildComponentTwo } from '../ChildComponentTwo/ChildComponentTwo'
import postits from './postits.jpg'

const ContactPage = () => (
  <div>
    <h2>Contact Page Component</h2>
    <img src={postits} alt="postits" width="300"/>
    <ChildComponentOne />
    <ChildComponentTwo />
    <p>End of Contact Page</p>
  </div>
)

export { ContactPage }