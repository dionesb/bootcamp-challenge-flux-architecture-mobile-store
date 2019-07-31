import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
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

class Home extends Component {
  navigationOptions = {
    title: 'Home',
  };

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

  handleAddProduct = product => {
    const { addToCart } = this.props;

    addToCart(product);
  };

  render() {
    const { products } = this.state;

    return (
      <Container>
        <FlatList
          horizontal
          data={products}
          extraData={this.props}
          keyExtractor={product => String(product.id)}
          renderItem={({ item }) => {
            const { amount } = this.props;

            return (
              <ItemProduct>
                <ItemImage source={{ uri: item.image }} />
                <Title numberOfLines={2}>{item.title}</Title>
                <Price>{item.priceFormatted}</Price>
                <Button onPress={() => this.handleAddProduct(item)}>
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
}

const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;

    return amount;
  }, {}),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
