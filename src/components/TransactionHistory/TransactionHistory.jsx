import { TableItem } from "./TableItem/TebleItem";
import { Table, Head, Title, TitleVal, Body } from "./TransactionHistory.styled"

export const TransactionHistory = ({ transactions }) => { 
    console.log(transactions);
    return <Table>
            <Head>
                <Title>
                <TitleVal>Type</TitleVal>
                <TitleVal>Amount</TitleVal>
                <TitleVal>Currency</TitleVal>
                </Title>
            </Head>

                <Body>
                    {transactions.map(TableItem)}
                </Body>
            </Table>
}