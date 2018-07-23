import React from 'react'
import './Filters.scss'

class Filters extends React.Component {
  state = {
    nameFilters: [...new Set(this.props.allShifts.map(shift => shift.employee.lastName))].sort((a, b) => {
      if (a < b) return -1
      if (a > b) return 1
      return 0
    }),
    locationFilters: [...new Set(this.props.allShifts.map(shift => shift.location))].sort((a, b) => {
      if (a < b) return -1
      if (a > b) return 1
      return 0
    }),
    statusFilters: [...new Set(this.props.allShifts.map(shift => shift.status))].sort((a, b) => {
      if (a < b) return -1
      if (a > b) return 1
      return 0
    }),
    displayEmployeeFilterOptions: false,
    displayLocationFilterOptions: false,
    displayStatusFilterOptions: false,
    firstNames: [...new Set(this.props.allShifts.map(shift => shift.employee.firstName))].sort((a, b) => {
      if (a < b) return -1
      if (a > b) return 1
      return 0
    })
  }

  toggleEmployeeFilter = () => {
    this.setState((prevState) => {
      return {
        displayEmployeeFilterOptions: !prevState.displayEmployeeFilterOptions
      }
    })
  }

  toggleLocationFilter = () => {
    this.setState((prevState) => {
      return {
        displayLocationFilterOptions: !prevState.displayLocationFilterOptions
      }
    })
  }

  toggleStatusFilter = () => {
    this.setState((prevState) => {
      return {
        displayStatusFilterOptions: !prevState.displayStatusFilterOptions
      }
    })
  }
  render () {
    return (
      <div className='Filters'>

        <div className='Filters__container'>
          
          {/* Render all the checkboxes for employee names */}
          <div className='employee_filter_container'>
            <button className={this.state.displayEmployeeFilterOptions ? 'toggle_filter_button_active' : 'toggle_filter_button_hidden'} onClick={this.toggleEmployeeFilter}>{this.state.displayEmployeeFilterOptions ? 'Done' : 'Employee'}</button>
            <div className={this.state.displayEmployeeFilterOptions ? 'employee_filter_options_active' : 'employee_filter_options_hidden'}>
              {this.state.nameFilters.map((name, index) => {
                return (
                  <div className='filter_option_item' key={index}>
                    <input type="checkbox" id={name + index.toString()} name={name} value={name} onChange={this.props.toggleNameFilter}></input>
                    <label className='cutom_checkbox' htmlFor={name + index.toString()}></label>
                    <label className='filter_option_label'>{name}, {this.state.firstNames[index][0]}</label>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Render all the checkboxes for locations */}
          <div className='location_filter_container'>
            <button className={this.state.displayLocationFilterOptions ? 'toggle_filter_button_active' : 'toggle_filter_button_hidden'} onClick={this.toggleLocationFilter}>{this.state.displayLocationFilterOptions ? 'Done' : 'Location'}</button>
            <div className={this.state.displayLocationFilterOptions ? 'location_filter_options_active' : 'location_filter_options_hidden'}>
              {this.state.locationFilters.map((location, index) => {
                return (
                  <div className='filter_option_item' key={index}>
                    <input type="checkbox" id={location + index.toString()} name={location} value={location} onChange={this.props.toggleLocationFilter}></input>
                    <label className='cutom_checkbox' htmlFor={location + index.toString()}></label>
                    <label className='filter_option_label'>{location}</label>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Render all the checkboxes for statuses */}
          <div className='status_filter_container'>
            <button className={this.state.displayStatusFilterOptions ? 'toggle_filter_button_active' : 'toggle_filter_button_hidden'} onClick={this.toggleStatusFilter}>{this.state.displayStatusFilterOptions ? 'Done' : 'Status'}</button>
            <div className={this.state.displayStatusFilterOptions ? 'status_filter_options_active' : 'status_filter_options_hidden'}>
              {this.state.statusFilters.map((status, index) => {
                return (
                  <div className='filter_option_item' key={index}>
                    <input type="checkbox" id={status + index.toString()} name={status} value={status} onChange={this.props.toggleStatusFilter}></input>
                    <label className='cutom_checkbox' htmlFor={status + index.toString()}></label>
                    <label className='filter_option_label'>{status}</label>
                  </div>
                )
              })}
            </div>
          </div>

        </div>

      </div>
    )
  }
}

export { Filters }
