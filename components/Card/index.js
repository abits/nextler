import {
    Title,
    Section
 } from "./styles"
import { loadGetInitialProps } from "next/dist/next-server/lib/utils";

function Card(props) {
    return (
        <Section img={props.img_url}>
            <Title>Title Card {props.idx}</Title>
            <div>{props.copy}</div>
        </Section>
    )
}

export default Card;