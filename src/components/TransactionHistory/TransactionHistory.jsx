import PropTypes from 'prop-types';
import { TableItem } from './TableItem/TebleItem';
import {
  Table,
  Head,
  Title,
  TitleVal,
  Body,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ transactions }) => {
  return (
    <Table>
      <Head>
        <Title>
          <TitleVal>Type</TitleVal>
          <TitleVal>Amount</TitleVal>
          <TitleVal>Currency</TitleVal>
        </Title>
      </Head>

      <Body>{transactions.map(TableItem)}</Body>
    </Table>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    })
  ),
};
