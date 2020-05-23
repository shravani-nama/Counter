import React, { Component } from 'react';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import {connect} from 'react-redux'
class Counter extends Component {
    state = {
        counter: 0
    }


    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={() => this.props.onInc()} />
                <CounterControl label="Decrement" clicked={() => this.props.onDec()}  />
                <CounterControl label="Add 5" clicked={() => this.props.onAdd()}  />
                <CounterControl label="Subtract 5" clicked={() => this.props.onSub()}  />
                <hr/>
                <button onClick={this.props.onStoreRes}>Store Result</button>
                    <ul>
                        {this.props.res.map(r=>(
                            <li onClick={()=>this.props.onDeleteRes(r.id)} key={r.id}>{r.value}</li>
                            ))
                        }   
                    </ul>
                
            </div>
        );
    }
}

const mapStateToProps=(state)=>{
    return{
        ctr:state.counter,
        res:state.results
    };
};
const mapDispatchToProps=(dispatch)=>{
    return{
        onInc:()=>dispatch({type:'INCREMENT'}),
        onDec:()=>dispatch({type:'DECREMENT'}),
        onAdd:(value)=>dispatch({type:'ADD',value:5}),
        onSub:(value)=>dispatch({type:'SUB',value:5}),
        onStoreRes:()=>dispatch({type:'STORE_RESULT'}),
        onDeleteRes:(id)=>dispatch({type:'DELETE_RESULT',key:id})
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(Counter);