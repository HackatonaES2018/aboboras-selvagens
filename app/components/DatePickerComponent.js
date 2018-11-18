import React, { Component } from 'react'
import DatePicker from 'react-native-datepicker'

export default class DatePickerComponent extends Component {
  constructor(props) {
    super(props)
    this.state = { date: "18-12-2018" }
  }

  render() {
    return (
      <DatePicker
        showIcon={false}

        style={{ width: 200, borderWidth: 0 }}
        date={this.state.date}
        mode="date"
        placeholder="select date"
        format="DD-MM-YYYY"
        minDate="18-12-2018"
        maxDate="18-01-2020"
        confirmBtnText="Confirmar"
        cancelBtnText="Cancelar"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36,
            borderWidth: 0
          }
        }}
        onDateChange={(date) => { this.setState({ date: date }) }}
      />
    )
  }
}
