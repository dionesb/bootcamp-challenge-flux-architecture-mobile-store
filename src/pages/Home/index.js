import React, { Component } from 'react';
import { FlatList, Image, Text } from 'react-native';

import api from '../../services/api';

import { Container, ItemProduct } from './styles';

export default class Home extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    console.tron.log('componentDidMount');
    const response = await api.get('/products');

    this.setState({
      products: response.data,
    });
  }

  render() {
    const { products } = this.state;

    return (
      <Container>
        <FlatList
          data={products}
          keyExtractor={product => String(product.id)}
          renderItem={({ item }) => (
            <ItemProduct>
              <Image source={{ uri: item.image }} />
              <Text>{item.title}</Text>
              <Text>{item.price}</Text>
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
