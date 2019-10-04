import {
    Title,
    Section
 } from "./styles"

function Card(props) {
    return (
        <Section>
            <Title>Title Card {props.idx}</Title>
        </Section>
    )
}

export default Card;