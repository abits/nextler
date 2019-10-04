import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import {
    Title,
    Section
 } from "./styles"

const GET_CARD = gql`
  query card {
    card {
        id
        title
        copy
        img_url
        }
    }
`;

function Card(props) {
    const { loading, error, data, fetchMore } = useQuery(GET_CARD, {
        variables: {},
        notifyOnNetworkStatusChange: true
      });
    if (!loading && !error && data.card) {
    return (
        <Section img={data.card.img_url}>
            <Title>Title Card {props.idx}</Title>
            <div>{data.card.copy}</div>
        </Section>
    )
    } else {
        return (
          <h1>
            Error loading card.
          </h1>
        )
    }
}

export default Card;