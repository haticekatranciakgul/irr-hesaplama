import { configureStore } from '@reduxjs/toolkit';
import creditReducer from './creditSlice';
import formReducer from './formSlice';
import dataReducer from './dataSlice';
import modalReducer from './modalSlice';
import expensesReducer from './expensesSlice';
import creditTypeReducer from './creditTypeSlice';
import blockReducer from './blockSlice';
import taxReducer from './taxSlice';
import subscriptionReducer from './subscriptionSlice';


const store = configureStore({
  reducer: {
    credit: creditReducer,
    form: formReducer,
    data: dataReducer,
    modal: modalReducer,
    expenses: expensesReducer,
    creditType: creditTypeReducer,
    block: blockReducer, 
    tax: taxReducer, 
    subscription: subscriptionReducer,


  },
});

export default store;
