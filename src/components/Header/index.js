import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Wrapper, Logo, BasketContainer, ItemCount } from './styles';

export default function Header({ navigation }) {
  return (
    <Wrapper>
      <Logo />
      <BasketContainer onPress={() => navigation.navigate('Cart')}>
        <Icon name="shopping-cart" size={24} color="#FFF" />
        <ItemCount>5</ItemCount>
      </BasketContainer>
    </Wrapper>
  );
}
