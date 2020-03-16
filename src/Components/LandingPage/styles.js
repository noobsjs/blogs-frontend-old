import styled from 'styled-components'
import Icon from '@ant-design/icons'
import { FacebookOutlined, TwitterOutlined, InstagramOutlined } from '@ant-design/icons';

export const Image = styled.img`
  object-fit:cover;
  filter: blur(0px);
  width: 100%;
  height: fit-content;
`
export const Wrapper = styled.div`
  height: 50%;
  width: 50%;
`
export const CenterText = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 95px;
`

export const MainImage = styled.img`
  align-self: center;
  height: 50%;
  width: 50%;
`
export const SocialDiv = styled.div`
  display: flex;
  justify-content: center;
`
export const AnchorLink = styled.a`
  color: '#F0DB4F';
  padding: 10px;
`
export const FacebookStyle = styled(FacebookOutlined)`
  & > svg {
  color: white;
  &:hover {
    color: #F0DB4F;
   }
  } 
`
export const TwitterStyle = styled(TwitterOutlined)`
  & > svg {
  color: white;
  &:hover {
    color: #F0DB4F;
   }
  } 
`
export const InstagramStyle = styled(InstagramOutlined)`
  & > svg {
  color: white;
  &:hover {
    color: #F0DB4F;
   }
  } 
`