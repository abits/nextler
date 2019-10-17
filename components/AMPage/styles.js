import styled from 'styled-components'

export const Title = styled.h1`
font-size: 50px;
color: ${({ theme }) => theme.colors.primary};
`

export const Section = styled.section`
margin: 0;
height: 100vh;
scroll-snap-align: start;
background-image: url(${props => props.img});
background-size: cover;
background-repeat: no-repeat;
background-position: center center; 
}
`