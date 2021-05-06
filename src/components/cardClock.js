import React from 'react'

class ClockCard extends React.Component {
    render (){
        return (
            <div className="card">
                <div className="card-body">
                    <div>{ this.props.time}</div>
                    <span>{ this.props.title}</span>
                </div>
            </div>
        )
    }
}

export default ClockCard