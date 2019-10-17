import React from 'react'
import styled from 'styled-components'
import AMPage from '../components/AMPage'
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import Head from 'next/head'

export const config = { amp: true }

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
    <amp-story standalone>
      <Head>
        <script
          async
          key="amp-story"
          custom-element="amp-story"
          src="https://cdn.ampproject.org/v0/amp-story-1.0.js"
        />
      </Head>
      {data.story.cards.map((card, index) => (<AMPage idx={card}></AMPage>))}
    </amp-story>
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
