import styled from 'styled-components';

export const Table = styled.table`
  background-color: #fff;
  width: 640px;
  margin: 0px auto;
  margin-bottom: 100px;
  padding: 30px;
  border-radius: 5px;
  box-shadow: -10px 0px 13px -7px #000000, 10px 0px 13px -7px #000000,
    5px 5px 15px 5px rgba(0, 0, 0, 0);
`;

export const TableHeader = styled.th`
  height: 50px;
  text-align: center;
  border: 1px solid #555;
  background-color: #2596be;
  color: #fff;
  font-size: 14px;
  text-transform: uppercase;
`;

export const TableData = styled.td`
  height: 50px;
  text-align: center;
  border: 1px solid #555;
`;

export const TableRow = styled.tr`
  background-color: #fff;
  text-transform: uppercase;
  &:nth-child(2n) {
    background-color: #76b5c5;
    color: #fff;
  }
`;
