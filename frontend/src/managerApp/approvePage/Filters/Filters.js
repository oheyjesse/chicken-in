import React from 'react'
import './Filters.scss'

class Filters extends React.Component {
  state = {
    locationFilterMenu: false,
    employeeFilterMenu: false
  }

  toggleLocationFilter = () => {
    this.setState((prevState) => {
      return {
        locationFilterMenu: !prevState.locationFilterMenu
      }
    })
  }

  toggleEmployeeFilter = () => {
    this.setState((prevState) => {
      return {
        employeeFilterMenu: !prevState.employeeFilterMenu
      }
    })
  }

  render () {
    return (
      <div className='left-items'>
        {/* Render all the checkboxes for employee names */}
        <div className='filter'>
          <button
            className={
              this.state.employeeFilterMenu
                ? 'button filter active'
                : 'button filter hidden'
            }
            onClick={this.toggleEmployeeFilter}
          >{this.state.employeeFilterMenu ? 'Done' : 'Employee'}
          </button>

          <div className={this.state.employeeFilterMenu ? 'menu active' : 'menu hidden'}>
            {this.props.employeeList.map((fullName, index) => {
              return (
                <div className='item' key={index}>
                  <input
                    type="checkbox"
                    id={fullName + index.toString()}
                    name={fullName}
                    value={fullName}
                    onChange={this.props.toggleEmployeeFilter}>
                  </input>
                  <label className='checkbox' htmlFor={fullName + index.toString()}></label>
                  <label className='label'>{fullName}</label>
                </div>
              )
            })}
          </div>
        </div>

        {/* Render all the checkboxes for location names */}
        <div className='filter'>
          <button
            className={
              this.state.locationFilterMenu
                ? 'button filter active'
                : 'button filter hidden'
            }
            onClick={this.toggleLocationFilter}
          >{this.state.locationFilterMenu ? 'Done' : 'Location'}
          </button>

          <div className={this.state.locationFilterMenu ? 'menu active' : 'menu hidden'}>
            {this.props.locationList.map((location, index) => {
              return (
                <div className='item' key={index}>
                  <input
                    type="checkbox"
                    id={location + index.toString()}
                    name={location}
                    value={location}
                    onChange={this.props.toggleLocationFilter}>
                  </input>
                  <label className='checkbox' htmlFor={location + index.toString()}></label>
                  <label className='label'>{location}</label>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}

export { Filters }
