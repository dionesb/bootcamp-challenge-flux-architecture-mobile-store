import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  background: #191920;
`;

export const ItemProduct = styled.View`
  background: #fff;
  width: 220px;
  height: 358px;
  padding: 10px;
  border-radius: 4px;
  margin-top: 30px;
  margin-left: 15px;
`;

export const ItemImage = styled.Image`
  width: 200px;
  height: 200px;
`;

export const Title = styled.Text`
  font-size: 16px;
  color: #333;
  margin-top: 10px;
`;

export const Price = styled.Text`
  margin-top: 5px;
  font-size: 21px;
  font-weight: bold;
  color: #000;
`;

export const Button = styled(RectButton)`
  margin-top: 10px;
  background: #7159c1;
  border-radius: 4px;
  height: 42px;

  flex-direction: row;
  align-items: center;
`;

export const ItensQtde = styled.View`
  padding: 0 10px;
  background: rgba(0, 0, 0, 0.1);
  height: 100%;

  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;

  flex-direction: row;
  align-items: center;
`;
