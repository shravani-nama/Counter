const redux = require('redux');
const createStore=redux.createStore;
const initialState={
    counter:0
};
//Reducer
const reducer =(state=initialState,action)=>{
    if(action.type=== 'INC_COUNTER'){
        return{
            ...state,
            counter:state.counter+1
        }
    }
    else if(action.type=== 'ADD_COUNTER'){
        return{
            ...state,
            counter:state.counter+action.value
        }
    }
}

//Store
const store= createStore(reducer);
// console.log(store.getState())

//Subscription
store.subscribe(()=>{
    console.log('[Subs]',store.getState())
})

// Dispatching action
store.dispatch({type:'INC_COUNTER'});
store.dispatch({type:'ADD_COUNTER',value:10});
console.log(store.getState())
