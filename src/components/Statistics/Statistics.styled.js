import styled from 'styled-components';

export const Container = styled.section`
  width: 320px;
  margin: 0px auto;
  margin-bottom: 100px;
  box-shadow: -10px 0px 13px -7px #000000, 10px 0px 13px -7px #000000,
    5px 5px 15px 5px rgba(0, 0, 0, 0);
  border-radius: 10px;
  background-color: #fff;
  color: #fff;
`;
export const List = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-basis: calc(100% / 5);
  padding: 10px;
  background-color: ${props => props.bgColor};
`;

export const Label = styled.span`
  margin-bottom: 5px;
`;

export const Percentage = styled.span`
  font-size: 24px;
  font-weight: 600;
`;

export const Title = styled.h2`
  font-size: 22px;
  padding-top: 20px;
  padding-bottom: 20px;
  text-transform: uppercase;
  text-align: center;
  color: #000;
`;
