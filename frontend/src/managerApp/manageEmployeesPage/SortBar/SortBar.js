import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import { dummyData } from '../../../dummyData'
import 'react-datepicker/dist/react-datepicker.css';




const employeeList = dummyData.map((name, i) => {
    return (
        <p key={i}>{name}</p>
    )
})


class SortBar extends React.Component {
    state = {
        startDate: moment()
    }

    handleChange = (date) => {
        this.setState({
            startDate: date
        })
    }
    
    render() {
        return (
            <div>
                <h1>Sorting</h1>
                <DatePicker
                dateFormat="DD/MM/YYYY"
                placeholderText="Date"
                selected={this.state.startDate}
                onChange={this.handleChange}
                 />

                <select name="emoloyee">
                {dummyData.map((employee, i) => {
                    return <option key={i} value={employee.name}>{employee.name}</option>
                })}   
                </select>
            </div>
        )   
    }
} 

export default SortBar