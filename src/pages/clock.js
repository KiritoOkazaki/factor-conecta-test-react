import React from 'react'
import CardClock from '../components/cardClock'


class Clock extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            days: 2,
            hours: 0,
            minutes: 0,
            seconds: 0
        }
    }

    ///MOUNTED

    componentDidMount () {
        this.timerId = setInterval(()=>this.timer(), 1)
    }

    componentWillUnmount(){
        clearInterval(this.timerId)
    }

    ///METHODS

    timer () {
        if(this.state.days === 0 && this.state.hours === 0 && this.state.minutes === 0 && this.state.seconds === 0){
            alert("FINISHED")
            clearInterval(this.timerId)
            return 
        }
        if(this.state.seconds === 0){
            this.setState({ seconds: 59})
            if(this.state.minutes === 0){
                this.setState({minutes: 59})
                if(this.state.hours === 0){
                    this.setState({hours: 23})
                    if(this.state.days === 2){
                        this.setState({days: 1})
                    }
                    else {
                        this.setState({days: this.state.days-1})
                    }
                } else {
                    this.setState({hours: this.state.hours-1})
                }
            }
            else{
                this.setState({minutes: this.state.minutes-1})
            }
        } else {
            this.setState({seconds: this.state.seconds-1})
        }
    
    }

    ////RENDER
    render() {
        return(
            <div className="main">
                <CardClock title="Days" time={this.state.days}/>
                <CardClock title="Hours"  time={this.state.hours}/>
                <CardClock title="Minutes"  time={this.state.minutes} />
                <CardClock title="Seconds"  time={this.state.seconds}/>
            </div>
        )
    }
}

export default Clock