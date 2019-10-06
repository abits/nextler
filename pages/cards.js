import React from 'react'
import styled from 'styled-components'
import Card from '../components/Card'
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const StoryContainer = styled.article`
margin: 0;
`

const GET_STORY = gql`
  query story($id: ID!)  {
      story(id: $id)  {
        id
        cards
      }
    }
`;

function Story() {
  const { loading, error, data, fetchMore } = useQuery(GET_STORY, {
    variables: { id: "1"},
    notifyOnNetworkStatusChange: true
  });
  if (!loading && !error && data) {
    return (
    <StoryContainer>
      {data.story.cards.map((card, index) => (<Card idx={card}></Card>))}
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
