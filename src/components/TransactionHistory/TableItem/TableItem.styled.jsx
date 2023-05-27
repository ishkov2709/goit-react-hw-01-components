import styled from "@emotion/styled";

export const RowItem = styled.tr`
    &:nth-child(2n) {
        background-color: #eeeeee;
    }
`

export const ItemVal = styled.td`
    margin: 0;

    padding: 10px 0;


    color: #797979;

    text-align: center;

    font-size: 16px;

    &:not(:last-child) {
        border-right: 1px solid #e9e9e9;
    }
`