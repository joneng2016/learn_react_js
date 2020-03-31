import React, { Component } from 'react'
import LifecycleB from './LIfecycleB';

class LifecycleA extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            name: 'Vishwas'
        }

        console.log('LifecycleA contructor')
    }
    
    static getDerivedStateFromProps(props,state)
    {
        console.log('LifecycleA getDerivedStateFromProps')
        return null
    }

    componentDidMount() {
        console.log('LifecycleA Component Did Mount')
    }

    render() {

        console.log('LifecycleA Render')

        return (
            <div>
                <div> LifecleA </div>
                <LifecycleB />
            </div>
        )
    }
}

export default LifecycleA
