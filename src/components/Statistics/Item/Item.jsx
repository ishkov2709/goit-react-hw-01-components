import { Element, Label, Percentage } from "./Item.styled"

export const Item = ({ id, label, percentage }) => {
    return <Element key={id} labelName={label}>
        <Label>{label}</Label>
        <Percentage>{percentage}&#37;</Percentage>
    </Element>
}