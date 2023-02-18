import styled from 'styled-components';

export const Container = styled.div`
  background-color: #fff;
  width: 320px;
  margin: 0px auto;
  margin-bottom: 100px;
  border-radius: 10px;
  box-shadow: -10px 0px 13px -7px #000000, 10px 0px 13px -7px #000000,
    5px 5px 15px 5px rgba(0, 0, 0, 0);
`;

export const Description = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 30px;
`;

export const Image = styled.img`
  width: 150px;
  height: 150px;
  padding: 5px;
  border-radius: 50%;
  border: 2px solid #797979;
`;

export const UserName = styled.p`
  font-size: 24px;
  font-weight: 700;
`;

export const InfoItem = styled.p`
  margin: 0;
  margin-bottom: 5px;
  font-size: 18px;
  color: gray;
`;

export const List = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  height: 80px;
  border-top: 2px solid rgb(146, 146, 146);
  background-color: #7b904b;
  margin: 0;
  padding: 0;
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-right: 1px solid #ccc;
`;

export const Label = styled.span`
  color: #fff;
  margin-bottom: 5px;
`;

export const Quantity = styled.span`
  font-weight: 600;
  color: #fff;
`;
