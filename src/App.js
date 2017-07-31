import Counter from './Counter';

import React, { Component } from 'react';

import './App.css';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            first_name : "Mattias",
            last_name : "Ljung",
            age :"really old",
            names: ['mattias']
        }
        this._onSubmit = this._onSubmit.bind(this)
    }



    _onSubmit(event){
        event.preventDefault()
        let newNames = this.state.names
        newNames.push(event.target.name.value.toUpperCase())
        this.setState({
            names: newNames
        })
    }

    get names(){
        return this.state.names.map((name)=>{
            return <button name="alert" onClick={this._createClosure(name)}>{name} </button>
        })
    }

    _createClosure(name){
        return () =>{
            alert('Hello ' + name)
        }
    }

    render(){
        return (
            <div id ="myDiv">
                <form onSubmit={this._onSubmit}>
                    <label htmlFor="name">what is your name?</label>
                    <input id="name" type="text" name="name" onChange={this._createClosure}/>
                </form>
                {Name(this.state.name)}
                <Counter
                    name = {this.state.name}
                />
                {this.names}
            </div>
        );
    }

}
const Name = (name) => <h1> My name is {name}</h1>

export default App;
