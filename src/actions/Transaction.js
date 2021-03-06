import { ADD_TRANSACTION, DELETE_TRANSACTION } from '../constants/ActionTypes';

export const addTransaction = (date, amount, transactionType) => ({
  type: ADD_TRANSACTION,
  id: Date.now(),
  date,
  transactionType,
  amount
});

export const deleteTransaction = (id) => ({
  type: DELETE_TRANSACTION,
  id
});
