import React, { Component } from 'react'

class LifecycleB extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            name: 'Vishwas'
        }

        console.log('LifecycleB contructor')
    }
    
    static getDerivedStateFromProps(props,state)
    {
        console.log('LifecycleB getDerivedStateFromProps')
        return null
    }

    componentDidMount() {
        console.log('LifecycleB Component Did Mount')
    }

    render() {

        console.log('LifecycleB Render')

        return (
            <div>
                Lyfecycle B
            </div>
        )
    }
}

export default LifecycleB
