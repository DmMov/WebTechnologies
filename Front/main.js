import {createStore} from 'redux';

const initialState = {
   name: 'Tom',
   secondName: 'Tomas'
};

function reducer(state, action) {
   switch (action.type) {
      case 'CHANGE_NAME':
         return {...state, name: action.payload}
      case 'CHANGE_SECOND_NAME':
         return {...state, name: action.payload}
     
   }

   return state;
}

const store = createStore(reducer, initialState);

const changeName = {
   type: 'CHANGE_NAME',
   payload: 'Ivan'
}

const changeSecondName = {
   type: 'CHANGE_SECOND_NAME',
   payload: 'Ivanov'
}

store.dispatch(changeName)