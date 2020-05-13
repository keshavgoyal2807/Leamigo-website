import React from 'react'
import Slider from '@material-ui/core/Slider';
import { withStyles, makeStyles } from "@material-ui/core/styles";

const PriceSlider = withStyles({
    root: {
      color: "#cccccc",
      height: 8
    },
    thumb: {
      height: 24,
      width: 24,
      backgroundColor: "#fff",
      border: "2px solid currentColor",
      marginTop: -8,
      marginLeft: -12,
      "&:focus, &:hover, &$active": {
        boxShadow: "inherit"
      }
    },
    active: {},
    valueLabel: {
      left: "calc(-50% + 4px)"
    },
    track: {
      height: 8,
      borderRadius: 4
    },
    rail: {
      height: 8,
      borderRadius: 4
    }
  })(Slider);

  class SliderUi extends React.Component{
      constructor(props)
      {
          super(props)
          this.state={
              slider_value :[this.props.min,this.props.max]
          }
      }

      changeValue = (e,new_value)=>{
          this.setState({
              slider_value:new_value
          })
          this.props.changeMinMax(new_value)
      }

      render()
      {
          return(
            <PriceSlider value={this.state.slider_value} onChange={this.changeValue} min={this.props.min} max={this.props.max} />
          )
      }
  }

  export default SliderUi