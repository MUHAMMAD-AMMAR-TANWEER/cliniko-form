// store.ts
import { createStore, combineReducers } from 'redux';
import { dobReducer, phoneNumberReducer, ExpiryDateReducer,DateOfInjuryReducer } from './reducers';


// Combine reducers if you have multiple reducers
const rootReducer = combineReducers({
  dob: dobReducer,
  expiryDate: ExpiryDateReducer,
  phoneNumber: phoneNumberReducer,
  dateOfInjury: DateOfInjuryReducer,
});

// Create the Redux store
const store = createStore(rootReducer);

export default store;
