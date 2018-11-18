import StepIndicator from 'react-native-step-indicator';
import React from 'react'

const labels = ["Passo 1", "Passo 2", "Passo 3", "Passo 4"];
const style = {
  stepIndicatorSize: 30,
  currentStepIndicatorSize: 40,
  separatorStrokeWidth: 3,
  currentStepStrokeWidth: 5,
  separatorFinishedColor: '#4aae4f',
  separatorUnFinishedColor: '#aaaaaa',
  stepIndicatorFinishedColor: '#4aae4f',
  stepIndicatorUnFinishedColor: '#aaaaaa',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 15,
  currentStepIndicatorLabelFontSize: 15,
  stepIndicatorLabelCurrentColor: '#000000',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: 'rgba(255,255,255,0.5)',
  labelColor: '#666666',
  labelSize: 12,
  currentStepLabelColor: '#4aae4f'
}
export default class StepIndicatorComponent extends React.Component {
  render() {
    return (
      <StepIndicator
        stepCount={4}
        customStyles={style}
        currentPosition={this.props.currentPosition}
        labels={labels}
      />
    )
  }
}