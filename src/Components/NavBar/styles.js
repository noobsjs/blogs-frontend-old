import styled from 'styled-components'

export const MainNav = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
`
export const Anchor = styled.a`
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  &:hover{
    color: black;
    background-color: yellow
  }
`
export const Wrapper = styled.div`
  width: '100%';
  height: '100%';
`

export const Image = styled.img`
  object-fit:cover;
  filter: blur(0px);
  width: 10%;
  height: 10%;
`

export const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
`