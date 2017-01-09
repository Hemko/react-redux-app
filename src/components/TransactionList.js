import React, { PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow } from 'material-ui/Table';
import Transaction from './Transaction';

const TransactionList = ({ transactions, onDeleteButtonClick }) => (
  <MuiThemeProvider>
    <Table>
      <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
        <TableRow>
          <TableHeaderColumn>Date</TableHeaderColumn>
          <TableHeaderColumn>Value</TableHeaderColumn>
          <TableHeaderColumn>Type</TableHeaderColumn>
          <TableHeaderColumn></TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody>
        {transactions.map(transaction =>
          <Transaction
            onDelete={() => onDeleteButtonClick(transaction.id)}
            key={transaction.id}
            date={transaction.date}
            amount={transaction.amount}
            type={transaction.type}
          />
        )}
      </TableBody>
    </Table>
  </MuiThemeProvider>
);

TransactionList.propTypes = {
  transactions: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    amount: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onDeleteButtonClick: PropTypes.func.isRequired
}

export default TransactionList;
