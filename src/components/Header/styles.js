import styled from 'styled-components/native';

import logo from '../../assets/logo.png';

export const Wrapper = styled.SafeAreaView`
  height: 60px;
  background: #141419;
  padding: 15px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.Image.attrs({
  source: logo,
  resizeMod: 'cover',
})`
  width: 185px;
  height: 24px;
`;

export const BasketContainer = styled.TouchableOpacity``;

export const ItemCount = styled.Text`
  color: #fff;
  background: #7159c1;
  border-radius: 9px;
  text-align: center;
  min-width: 18px;
  min-height: 18px;
  font-size: 12px;
  padding: 2px;

  top: -8px;
  right: -8px;

  position: absolute;
  overflow: hidden;
`;
