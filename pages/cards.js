import React from 'react'
import styled from 'styled-components'
import Card from '../components/Card'
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const StoryContainer = styled.article`
margin: 0;
`

const GET_STORY = gql`
  query story {
      story {
        id
        cards {
          id
        }
      }
    }
`;

function Story() {
  const { loading, error, data, fetchMore } = useQuery(GET_STORY, {
    variables: {},
    notifyOnNetworkStatusChange: true
  });
  if (!loading && !error && data.story) {
    console.dir(data.story.cards);
    return (
      <StoryContainer>
        {data.story.cards.map((card, index) => (
          <Card idx={card.id}></Card>
        ))}
      </StoryContainer>
    )
  } else {
    return (
      <h1>
        Error.
      </h1>
    )
  }
}

export default () => <Story></Story>
