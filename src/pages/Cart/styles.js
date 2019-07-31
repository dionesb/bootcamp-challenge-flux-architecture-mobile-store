import styled from 'styled-components/native';

import IconMaterial from 'react-native-vector-icons/MaterialIcons';

export const Container = styled.ScrollView`
  padding: 15px;
  background: #191920;
  height: 100%;
`;

export const Wrapper = styled.View`
  background: #fff;
  padding: 15px;
  border-radius: 4px;
  margin-bottom: 30px;
`;

export const ItemCart = styled.View`
  margin-top: 20px;
`;

export const ItemInfo = styled.View`
  flex-direction: row;
`;

export const IconDelete = styled(IconMaterial).attrs({
  size: 20,
  color: '#7159c1',
})``;

export const Image = styled.Image`
  width: 80px;
  height: 80px;
`;

export const Info = styled.View`
  height: 80px;
  margin-left: 10px;
  width: 163px;

  flex-grow: 1;
  justify-content: space-between;
`;

export const Description = styled.Text.attrs({
  numberOfLines: 3,
})`
  font-size: 14px;
  color: #333;
`;

export const Price = styled.Text`
  margin-top: 5px;
  font-size: 16px;
  font-weight: bold;
  color: #000;
`;

export const ItemTotal = styled.View`
  margin-top: 10px;
  background: #eee;
  border-radius: 4px;
  padding: 5px 15px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const AmountItem = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Icon = styled(IconMaterial).attrs({
  size: 16,
  color: '#FFF',
})`
  background: #7159c1;
  border-radius: 9px;
`;

export const AmountInput = styled.TextInput`
  margin: 0 5px;
  font-size: 14px;
  color: #666;
  padding: 0 5px;
  width: 45px;
  height: 26px;
  border-radius: 4px;
  background: #fff;
  border: 1px solid #ddd;
`;

export const SubTotal = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #000;
`;

export const TotalCart = styled.View`
  margin-top: 30px;
  align-items: center;
`;

export const TotalLabel = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #999;
`;

export const Total = styled.Text`
  font-size: 30px;
  font-weight: bold;
  color: #000;
`;

export const ButtonFinalizar = styled.TouchableOpacity`
  background: #7159c1;
  border-radius: 4px;
  padding: 10px 0;
  margin-top: 30px;
  align-items: center;
`;

export const FinalizarText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #fff;
`;
