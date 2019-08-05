import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
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

export default function Cart() {
  const cart = useSelector(state =>
    state.cart.map(product => ({
      ...product,
      subtotal: formatPrice(product.price * product.amount),
    }))
  );

  const total = useSelector(state =>
    formatPrice(
      state.cart.reduce((total, product) => {
        return total + product.price * product.amount;
      }, 0)
    )
  );

  const dispatch = useDispatch();

  function increment(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount + 1));
  }

  function decrement(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount - 1));
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
                    onPress={() =>
                      dispatch(CartActions.removeFromCart(product.id))
                    }
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
