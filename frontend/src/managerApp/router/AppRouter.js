import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import { ReportPage } from '../reportPage/ReportPage/ReportPage'
import { ApprovePage } from '../approvePage/ApprovePage/ApprovePage'
import { ManageEmployeesPage } from '../manageEmployeesPage/ManageEmployeesPage/ManageEmployeesPage'
import { SettingsPage } from '../settingsPage/SettingsPage/SettingsPage'

const AppRouter = () => (

  <BrowserRouter>
    <div>

      <h1>Welcome to the Manager App!</h1>
      <p><Link to="/">Report Page</Link></p>
      <p><Link to="/approve">Approve Page</Link></p>
      <p><Link to="/manage">Manage Employees Page</Link></p>
      <p><Link to="/settings">Settings</Link></p>
      <hr/>

      <Switch>
        <Route exact path="/" component={ReportPage} />
        <Route path="/approve" component={ApprovePage}/>
        <Route path="/manage" component={ManageEmployeesPage}/>
        <Route path="/settings" component={SettingsPage}/>
      </Switch>

    </div>
  </BrowserRouter>
)

export { AppRouter }