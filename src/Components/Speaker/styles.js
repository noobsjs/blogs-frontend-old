import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: black;
  width: 100%;
  height: 100%;
`
export const WrapperImage = styled.div`
  padding: 30px;
  height: auto;
`

export const Image = styled.img`
  object-fit:cover;
  filter: blur(0px);
  width: 100%;
  height: 50rem;
`

export const About = styled.div`
  color: white;
`