import React from 'react';
import { connect } from 'react-redux';

import {
  Container,
  Wrapper,
  ItemCart,
  ItemInfo,
  Image,
  Info,
  Description,
  Price,
  ItemTotal,
  AmountItem,
  Icon,
  AmountInput,
  SubTotal,
  TotalCart,
  TotalLabel,
  Total,
  ButtonFinalizar,
  FinalizarText,
} from './styles';

function Cart({ cart }) {
  return (
    <Container>
      <Wrapper>
        {cart.map(product => (
          <ItemCart key={product.id}>
            <ItemInfo>
              <Image source={{ uri: product.image }} />
              <Info>
                <Description>{product.title}</Description>
                <Price>{product.priceFormatted}</Price>
              </Info>
            </ItemInfo>
            <ItemTotal>
              <AmountItem>
                <Icon name="remove" />
                <AmountInput value={String(product.amount)} />
                <Icon name="add" />
              </AmountItem>
              <SubTotal>R$539,70</SubTotal>
            </ItemTotal>
          </ItemCart>
        ))}
        <TotalCart>
          <TotalLabel>TOTAL</TotalLabel>
          <Total>R$ 1619,10</Total>
        </TotalCart>
        <ButtonFinalizar>
          <FinalizarText>FINALIZAR PEDIDO</FinalizarText>
        </ButtonFinalizar>
      </Wrapper>
    </Container>
  );
}

const mapStateToProps = state => ({
  cart: state.cart,
});

export default connect(mapStateToProps)(Cart);
