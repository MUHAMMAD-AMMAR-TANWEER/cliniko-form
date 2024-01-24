// reducers.js
const initialDOBState = '';
const dobReducer = (state = initialDOBState, action:any) => {
  switch (action.type) {
    case 'SET_DOB':
      return action.payload;
    default:
      return state;
  }
};

const initialExpiryDateState = '';
const ExpiryDateReducer = (state = initialExpiryDateState, action:any) => {
  switch (action.type) {
    case 'SET_ExpiryDate':
      return action.payload;
    default:
      return state;
  }
};

const initialDateOfInjuryState = '';
const DateOfInjuryReducer = (state = initialDateOfInjuryState, action:any) => {
  switch (action.type) {
    case 'SET_DateOfInjury':
      return action.payload;
    default:
      return state;
  }
};

const initialPhoneNumberState:any = [];
const phoneNumberReducer = (state = initialPhoneNumberState, action:any) => {
  switch (action.type) {
    case 'SET_PHONE_NUMBER':
      return [...state, action.payload];
    default:
      return state;
  }
};

export { dobReducer, phoneNumberReducer, ExpiryDateReducer, DateOfInjuryReducer };
