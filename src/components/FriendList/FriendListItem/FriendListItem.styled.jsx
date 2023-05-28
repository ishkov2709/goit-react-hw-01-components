import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  gap: 10px;
  justify-content: flex-start;
  align-items: center;
  width: 200px;
  padding: 6px 8px;

  box-shadow: 2px 2px 4px 2px rgba(143, 143, 143, 1);

  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const Status = styled.span`
  display: block;
  width: 16px;
  height: 16px;
  background-color: ${props => (props.isOnline ? 'green' : 'red')};
  border-radius: 50%;
`;

export const Avatar = styled.img``;

export const Name = styled.p`
  margin: 0;
  font-size: 20px;
`;
