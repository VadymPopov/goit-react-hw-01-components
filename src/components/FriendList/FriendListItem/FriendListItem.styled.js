import styled from 'styled-components';

export const Status = styled.span`
  width: 20px;
  height: 20px;
  margin-right: 15px;
  border-radius: 50%;
  background-color: ${props => {
    return props.isOnline ? 'green' : 'red';
  }};
`;

export const Item = styled.li`
  display: flex;
  width: 260px;
  background-color: rgb(248, 240, 240);
  align-items: center;
  margin: 0px auto;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0px 1px 3px rgb(0 0 0 / 22%), 0px 1px 1px rgb(0 0 0 / 24%),
    0px 2px 1px rgb(0 0 0 / 30%);
  margin-bottom: 20px;
`;

export const Image = styled.img`
  width: 70px;
  height: 70px;
  padding: 2px;
  margin-right: 20px;
  background-color: rgb(236, 219, 219);
  border-radius: 50%;
  box-shadow: 1px 2px 1px rgb(0 0 0 / 12%), 1px 2px 2px rgb(0 0 0 / 14%),
    0px 1px 3px rgb(0 0 0 / 20%);
`;

export const Name = styled.p`
  font-size: 20px;
  margin: 0;
`;
