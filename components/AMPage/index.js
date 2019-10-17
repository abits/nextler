import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import {
    Title,
    Section
 } from "./styles"

const GET_CARD = gql`
  query card($id: ID!) {
    card(id: $id) {
        title
        copy
        img_url
        }
    }
`;

function AMPage(props) {
    const { loading, error, data, fetchMore } = useQuery(GET_CARD, {
        variables: { id: props.idx },
        notifyOnNetworkStatusChange: true
      });
    if (!loading && !error && data) {
    return (
        <amp-story-page id="{props.idx}">
          <amp-story-grid-layer template="fill">
            <amp-img src={data.card.img_url} width="1024" height="720" layout="responsive"></amp-img>
          </amp-story-grid-layer>
          <amp-story-grid-layer template="vertical">
            <h1>Title AMPage No. {props.idx}</h1>
            <p>{data.card.copy}</p>
          </amp-story-grid-layer>
        </amp-story-page>
    )
    } else {
        return (
          <h1>
            Error loading AMPage.
          </h1>
        )
    }
}

export default AMPage;