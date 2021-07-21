import {ActionTypeTemplate} from './templateAction';

export const initialState = {
  template: 0,
};

export const OperationTemplate = {};

export const templateReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypeTemplate.TEST:
      return {...state, template: action.payload};

    default:
      break;
  }

  return state;
};
