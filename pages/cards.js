import React from 'react'
import styled from 'styled-components'
import Link from 'next/link';

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

const Story = styled.article`
  margin: 0;
`

const Card = styled.section`
  margin: 0;
  height: 100vh;
  scroll-snap-align: start;
  background-image: url(${props => props.img});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center; 
  }
`
export default () => 
<Story>
  <Card img={"https://images.pexels.com/photos/1201388/pexels-photo-1201388.jpeg"}><Title>A</Title></Card>
  <Card img={"https://images.pexels.com/photos/2826351/pexels-photo-2826351.jpeg"}><Title>B</Title></Card>
  <Card img={"https://images.pexels.com/photos/614497/pexels-photo-614497.jpeg"}><Title>C</Title></Card>
  <Card img={"https://images.pexels.com/photos/2984347/pexels-photo-2984347.jpeg"}><Title>D</Title></Card>
  <Card img={"https://images.pexels.com/photos/614497/pexels-photo-614497.jpeg"}><Title>E</Title></Card>
  <Card img={"https://images.pexels.com/photos/2826351/pexels-photo-2826351.jpeg"}><Title>F</Title></Card>
</Story>
