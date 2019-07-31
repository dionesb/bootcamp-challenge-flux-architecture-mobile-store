import React, { Component } from 'react';
import { FlatList, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { formatPrice } from '../../util/format';

import api from '../../services/api';

import {
  Container,
  ItemProduct,
  ItemImage,
  Title,
  Price,
  Button,
  ItensQtde,
} from './styles';

export default class Home extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    console.tron.log('componentDidMount');
    const response = await api.get('/products');
    const data = response.data.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));

    this.setState({
      products: data,
    });
  }

  render() {
    const { products } = this.state;

    return (
      <Container>
        <FlatList
          horizontal
          data={products}
          keyExtractor={product => String(product.id)}
          renderItem={({ item }) => (
            <ItemProduct>
              <ItemImage source={{ uri: item.image }} />
              <Title numberOfLines={2}>{item.title}</Title>
              <Price>{item.priceFormatted}</Price>
              <Button>
                <ItensQtde>
                  <Icon name="add-shopping-cart" size={20} color="#FFF" />
                  <Text style={{ marginLeft: 5, color: '#FFF' }}>2</Text>
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
          )}
        />
      </Container>
    );
  }
}

Home.navigationOptions = {
  title: 'Home',
};
