import React, { Component } from 'react';

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

export default class Cart extends Component {
  state = {};

  render() {
    return (
      <Container>
        <Wrapper>
          <ItemCart>
            <ItemInfo>
              <Image />
              <Info>
                <Description>Tênis de Caminhada Leve Confrotável</Description>
                <Price>R$179,90</Price>
              </Info>
            </ItemInfo>
            <ItemTotal>
              <AmountItem>
                <Icon name="remove" />
                <AmountInput value={String(2)} />
                <Icon name="add" />
              </AmountItem>
              <SubTotal>R$539,70</SubTotal>
            </ItemTotal>
          </ItemCart>

          <ItemCart>
            <ItemInfo>
              <Image />
              <Info>
                <Description>Tênis de Caminhada Leve Confrotável</Description>
                <Price>R$179,90</Price>
              </Info>
            </ItemInfo>
            <ItemTotal>
              <AmountItem>
                <Icon name="remove" />
                <AmountInput value={String(2)} />
                <Icon name="add" />
              </AmountItem>
              <SubTotal>R$539,70</SubTotal>
            </ItemTotal>
          </ItemCart>

          <ItemCart>
            <ItemInfo>
              <Image />
              <Info>
                <Description>Tênis de Caminhada Leve Confrotável</Description>
                <Price>R$179,90</Price>
              </Info>
            </ItemInfo>
            <ItemTotal>
              <AmountItem>
                <Icon name="remove" />
                <AmountInput value={String(2)} />
                <Icon name="add" />
              </AmountItem>
              <SubTotal>R$539,70</SubTotal>
            </ItemTotal>
          </ItemCart>

          <ItemCart>
            <ItemInfo>
              <Image />
              <Info>
                <Description>Tênis de Caminhada Leve Confrotável</Description>
                <Price>R$179,90</Price>
              </Info>
            </ItemInfo>
            <ItemTotal>
              <AmountItem>
                <Icon name="remove" />
                <AmountInput value={String(2)} />
                <Icon name="add" />
              </AmountItem>
              <SubTotal>R$539,70</SubTotal>
            </ItemTotal>
          </ItemCart>

          <ItemCart>
            <ItemInfo>
              <Image />
              <Info>
                <Description>Tênis de Caminhada Leve Confrotável</Description>
                <Price>R$179,90</Price>
              </Info>
            </ItemInfo>
            <ItemTotal>
              <AmountItem>
                <Icon name="remove" />
                <AmountInput value={String(2)} />
                <Icon name="add" />
              </AmountItem>
              <SubTotal>R$539,70</SubTotal>
            </ItemTotal>
          </ItemCart>

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
}
