import customizeText from "components/utils/custimizeText"
import { RowItem, ItemVal } from "./TableItem.styled"

export const TableItem = ({ id, type, amount, currency }) => { 
    return <RowItem key={id}>
        <ItemVal>{customizeText(type)}</ItemVal>
        <ItemVal>{amount}</ItemVal>
        <ItemVal>{currency}</ItemVal>
    </RowItem>
}