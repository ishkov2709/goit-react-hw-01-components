import styled from "@emotion/styled";
import setItemBgColor from "components/utils/setItemBgColor";

export const Element = styled.li`
width: calc(100% / 5);

padding: 8px;

background-color: ${setItemBgColor};
color: #ffffff;

font-size: 12px;
text-align: center;
`

export const Label = styled.span`
display: block;
margin-bottom: 6px;
`

export const Percentage = styled.span`
display: block;
`