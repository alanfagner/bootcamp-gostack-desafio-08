import React from 'react';
import { View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import * as CartActions from '../../../store/modules/cart/actions';
import {
  Container,
  Image,
  Name,
  Price,
  Button,
  TextButton,
  ShoppingIcon,
  IconContainer,
  CountText,
} from './styles';

function Item({ item }) {
  const amount = useSelector(state =>
    state.cart.reduce((sumAmount, product) => {
      sumAmount[product.id] = product.amount;
      return sumAmount;
    }, {})
  );

  const dispatch = useDispatch();

  const { id, image, title, priceFormatted } = item;

  return (
    <Container>
      <View>
        <Image source={{ uri: image }} />
        <Name>{title}</Name>
      </View>
      <View>
        <Price>{priceFormatted}</Price>
        <Button onPress={() => dispatch(CartActions.addToCartRequest(id))}>
          <IconContainer>
            <ShoppingIcon />
            <CountText>{amount[id] || 0}</CountText>
          </IconContainer>
          <TextButton>ADICIONAR</TextButton>
        </Button>
      </View>
    </Container>
  );
}

Item.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    image: PropTypes.string,
    title: PropTypes.string,
    priceFormatted: PropTypes.string,
  }).isRequired,
};

export default Item;
