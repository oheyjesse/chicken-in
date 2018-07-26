import React from 'react'
import * as scale from 'd3-scale' // Using d3 modules instead of the whole d3 library saves about 150 kB
import * as shape from 'd3-shape' // Using d3 modules instead of the whole d3 library saves about 150 kB
import * as d3 from 'd3-array' // Using d3 modules instead of the whole d3 library saves about 150 kB
import './StackedBarChart.scss'

class StackedBarChart extends React.Component {
  state = {
    chartWidth: 0
  }

  wholeChart = React.createRef()

  componentDidMount () {
    this.setState(() => {
      return {
        chartWidth: this.wholeChart.current.offsetWidth
      }
    })
  }

  render () {
    const locations = [...new Set(this.props.shifts.map(shift => shift.location))]

    let dataset = []

    locations.forEach(() => {
      dataset.push({standardHours: null, overtimeHours: null, doubleTimeHours: null})
    })

    this.props.shifts.forEach((shift) => {
      let locationsIndex = locations.indexOf(shift.location)
      dataset[locationsIndex].standardHours += shift.standardMinutes / 60
      dataset[locationsIndex].overtimeHours += shift.overtimeMinutes / 60
      dataset[locationsIndex].doubleTimeHours += shift.doubleTimeMinutes / 60
    })

    const chartWidth = this.state.chartWidth
    const chartHeight = 400

    // Stack layout
    const stack = shape.stack()
      .keys(['standardHours', 'overtimeHours', 'doubleTimeHours'])

    const stackData = stack(dataset)

    // Scales
    const xScale = scale.scaleBand()
      .domain(Array.from(new Array(dataset.length), (data, index) => index))
      .range([0, chartWidth])
      .paddingInner(0.1)

    const yScale = scale.scaleLinear()
      .domain([0, d3.max(dataset, (data) => {
        return data.standardHours + data.overtimeHours + data.doubleTimeHours
      })])
      .range([chartHeight, 0])

    const colors = ['#78BA5D', '#FFC315', '#D12E1C']

    return (
      <div className='StackedBarChart' ref={this.wholeChart}>
        <div className='ledgend'>
          <span className='ledgend__standard'>Standard Hours</span>
          <span className='ledgend__overtime'>Overtime Hours</span>
          <span className='ledgend__double'>Double Time Hours</span>
        </div>
        <svg width='100%' height={chartHeight}>
          {stackData.map((groupArray, index) => {
            return (
              <g key={index} fill={colors[index]}>
                {groupArray.map((data, index) => {
                  return (
                    <g key={index}>
                      <rect
                        x={xScale(index)}
                        y={yScale(data[1])}
                        height={yScale(data[0]) - yScale(data[1])}
                        width={xScale.bandwidth()}
                      ></rect>
                      <text
                        fill='#1D252E'
                        textAnchor='middle'
                        x={xScale(index) + (xScale.bandwidth() / 2)}
                        y={yScale(data[1]) + 15}
                      >
                        {(yScale(data[0]) - yScale(data[1])) > 15 ? (data[1] - data[0]).toFixed(1) : ''}
                      </text>
                    </g>
                  )
                })}
              </g>
            )
          })}
        </svg>
        <div>
          {locations.map((location, index) => {
            return <span key={index} className='location_label' style={{'display': 'inline-block', 'width': (chartWidth / locations.length) - 0.1, 'textAlign': 'center'}}>{location}</span>
          })}
        </div>
      </div>
    )
  }
}

export { StackedBarChart }
