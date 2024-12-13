import {useReducer} from 'react';

let id = 0;

const initialExpense = {
 id: id++, label: "", price: "", category: ""
}
const initialError = {
 label: false, price: false, category: false
}
const initialState = {
 expense: initialExpense, expenses: [], error: initialError
};

const checkValues = (expense) => {
 const errors = {}
 
 errors.label = expense.label === "";
 errors.price = expense.price === "" || expense.price === 0;
 errors.category = expense.category === "";
 
 return errors;
}

const ExpenseReducer = (state, action) => {
 const errors = checkValues(state.expense);
 switch (action.type) {
  case "set_value":
   return {
    ...state,
    expense: {
     ...state.expense, [action.payload.name]: action.payload.value
    },
    error: initialError
   }
  
  case "add_expense":
   console.log(Object.values(errors))
   if (!Object.values(errors).includes(true)) {
    return {
     ...state, expenses: state.expenses.concat([state.expense]),
     expense: {
      ...initialExpense, id: id++
     }
    }
   } else {
    return {
     ...state,
     error: {
      ...state.error,
      ...errors
     }
    }
   }
  
  case "remove_expense":
   return {
    ...state,
    expenses: state.expenses.filter(exp => exp.id !== action.payload)
   }
  
  default:
   return state;
 }
};

const useExpenseReducer = () => {
 const [state, dispatch] = useReducer(ExpenseReducer, initialState);
 
 const setValue = (payload) => {
  dispatch({
   type: "set_value", payload
  })
 }
 
 const addExpense = () => {
  dispatch({
   type: "add_expense"
  })
 }
 
 const removeExpense = (payload) => {
  dispatch({
   type: "remove_expense", payload
  })
 }
 
 return {
  state, setValue, addExpense, removeExpense
 }
}

export default useExpenseReducer;