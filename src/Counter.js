import React, {Component} from 'react'

export default class Counter extends Component {
    constructor(props){
        super(props);
        this.state = {
            // owner: this.props.name
            count : 0,
            counters:[12]
        }


    }

    _createIncrement(){

    }
    _onClick(event){
        this.setState({
            count:this.state.count + 1
        })
    }
    _onSubmit(event){
        event.preventDefault()
    }


    get counters(){
        return this.state.counters.map((amount,i)=>{
            return <button key={i}>{amount}</button>
        })
    }
    render(){
        return(
            <div>
                <h3>{this.props.name}'s counter</h3>
                <h4>The current Count is:{this.state.count}</h4>
                <form onSubmit={this._onSubmit}>

                    <input type="number" name="amount" onChange={this._createIncrement}/>
                    <button>Create Increment</button>
                </form>
                {this.counters}

            </div>
    )
    }
}