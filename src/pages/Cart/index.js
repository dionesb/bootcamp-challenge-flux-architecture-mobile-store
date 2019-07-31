import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as CartActions from '../../store/modules/cart/actions';

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
  IconDelete,
  AmountInput,
  SubTotal,
  TotalCart,
  TotalLabel,
  Total,
  ButtonFinalizar,
  FinalizarText,
} from './styles';

function Cart({ cart, removeFromCart }) {
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
              <IconDelete
                name="delete"
                onPress={() => removeFromCart(product.id)}
              />
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

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
