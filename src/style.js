import styled from 'styled-components'

export const Main = styled.div`
  display: flex;
  height: 100vh;
`
export const LeftCard = styled.div`
  background-color: ${props => (props.notask ? '#000000' : '#131213')};
  display: flex;
  padding: 40px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: ${props => (props.notask ? '100%' : '40%')};
`
export const Heading = styled.h1`
  color: ${props => (props.right ? '#f1f5f9' : '#f3aa4e')};
  font-family: 'Roboto';
`
export const Label = styled.label`
  color: #f8f8f8;
  font-family: 'Roboto';
`
export const Input = styled.input`
  background-color: ${props => (props.select ? '#f8f8f8' : '#f1f5f9')};
  color: ${props => (props.select ? '#1a171d' : '#64748b')};
  padding-left: 10px;
  height: 35px;
  width: 100%;
  margin-bottom: 20px;
  border: 0px;
  outline: none;
  cursor: pointer;
`
export const Btn = styled.button`
  background-color: ${props => (props.right ? 'transparent' : '#f3aa4e')};
  color: #f8f8f8;
  height: 35px;
  width: ${props => (props.right ? '100%' : '80px')};
  border: ${props => (props.right ? '1px solid #f3aa4e' : '0px')};
  ouline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: ${props => (props.right ? '20px' : '10px')};
`
export const RightCard = styled.div`
  background-color: #000000;
  padding-top: 60px;
  padding: 20px;
  width: 60%;
`
export const List = styled.ul`
  padding: 0px;
  list-style-type: none;
  display: flex;
  flex-direction: ${props => (props.task ? 'column' : 'row')};
  width: 70%;
  justify-content: space-between;
`
export const Item = styled.li`
  background-color: #131213;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
`
export const Para = styled.p`
  color: #f1f5f9;
  font-family: 'Roboto';
  font-size: 20px;
`
