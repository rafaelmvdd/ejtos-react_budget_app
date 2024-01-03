import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
  const { budget, expenses, dispatch, currency } = useContext(AppContext);
  const [newBudget, setNewBudget] = useState(budget);
  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);
  const handleBudgetChange = (event) => {
    if (event.target.value > 20000) {
      alert('The budget value cannot exceed £20000');
    }
    if(event.target.value < totalExpenses) {
      alert('You cannot reduce the budget value lower than the spending')
    }
    setNewBudget(event.target.value);
  };
  const handleCurrencyChange = (event) => {
    dispatch({
      type: 'CHG_CURRENCY',
      payload: event.target.value,
    });
    
  }
  return (
    <div>
      <div className="alert alert-secondary">
      <span>Budget: {currency}</span>
      <input
        type="number"
        step="10"
        value={newBudget}
        onChange={(event) => handleBudgetChange(event)}
      ></input>
    </div>
    <div>
      <select
            className="custom-select"
            id="inputGroupSelect01"
            onChange={(event) => handleCurrencyChange(event)}
            value={currency}
          >
            <option defaultValue>Choose...</option>
            <option value="$" name="dollar">
              {' '}
              $ Dollar
            </option>
            <option value="£" name="pound">
              £ Pound
            </option>
            <option value="€" name="euro">
              € Euro
            </option>
            <option value="₹" name="ruppee">
              ₹ Ruppee
            </option>
          </select>
    </div>
    </div>
    
  );
};
export default Budget;
