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
  EmptyCart,
  EmptyText,
} from './styles';
import { formatPrice } from '../../util/format';

function Cart({ cart, total, removeFromCart, updateAmountRequest }) {
  function increment(product) {
    updateAmountRequest(product.id, product.amount + 1);
  }

  function decrement(product) {
    updateAmountRequest(product.id, product.amount - 1);
  }

  return (
    <Container>
      <Wrapper>
        {cart.length > 0 ? (
          <>
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
                    <Icon name="remove" onPress={() => decrement(product)} />
                    <AmountInput value={String(product.amount)} />
                    <Icon name="add" onPress={() => increment(product)} />
                  </AmountItem>
                  <SubTotal>{product.subtotal}</SubTotal>
                </ItemTotal>
              </ItemCart>
            ))}
            <TotalCart>
              <TotalLabel>TOTAL</TotalLabel>
              <Total>{total}</Total>
            </TotalCart>
            <ButtonFinalizar>
              <FinalizarText>FINALIZAR PEDIDO</FinalizarText>
            </ButtonFinalizar>
          </>
        ) : (
          <EmptyCart>
            <Icon name="remove-shopping-cart" size={64} color="#eee" />
            <EmptyText>Seu carrinho está vazio.</EmptyText>
          </EmptyCart>
        )}
      </Wrapper>
    </Container>
  );
}

const mapStateToProps = state => ({
  cart: state.cart.map(product => ({
    ...product,
    subtotal: formatPrice(product.price * product.amount),
  })),
  total: formatPrice(
    state.cart.reduce((total, product) => {
      return total + product.price * product.amount;
    }, 0)
  ),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
