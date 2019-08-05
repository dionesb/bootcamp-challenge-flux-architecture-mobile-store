import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FlatList, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { formatPrice } from '../../util/format';

import api from '../../services/api';

import * as CartActions from '../../store/modules/cart/actions';

import {
  Container,
  ItemProduct,
  ItemImage,
  Title,
  Price,
  Button,
  ItensQtde,
} from './styles';

export default function Home() {
  const [products, setProducts] = useState([]);

  const amount = useSelector(state =>
    state.cart.reduce((sumAmount, product) => {
      sumAmount[product.id] = product.amount;

      return sumAmount;
    }, {})
  );

  useEffect(() => {
    /* Cria-se uma nova função para trabalhar com async. */
    async function loadProduct() {
      const response = await api.get('/products');
      const data = response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));

      setProducts(data);
    }

    loadProduct();
  }, []);

  const dispatch = useDispatch();

  function handleAddProduct(id) {
    dispatch(CartActions.addToCartRequest(id));
  }

  return (
    <Container>
      <FlatList
        horizontal
        data={products}
        extraData={amount}
        keyExtractor={product => String(product.id)}
        renderItem={({ item }) => {
          return (
            <ItemProduct>
              <ItemImage source={{ uri: item.image }} />
              <Title numberOfLines={2}>{item.title}</Title>
              <Price>{item.priceFormatted}</Price>
              <Button onPress={() => handleAddProduct(item.id)}>
                <ItensQtde>
                  <Icon name="add-shopping-cart" size={20} color="#FFF" />
                  <Text style={{ marginLeft: 5, color: '#FFF' }}>
                    {amount[item.id] || 0}
                  </Text>
                </ItensQtde>
                <Text
                  style={{
                    color: '#FFF',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    width: 147,
                  }}
                >
                  ADICIONAR
                </Text>
              </Button>
            </ItemProduct>
          );
        }}
      />
    </Container>
  );
}
