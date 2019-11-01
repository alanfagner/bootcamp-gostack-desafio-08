import React from 'react';
import { useSelector } from 'react-redux';

import Navigation from '../../services/navigation';
import {
  Container,
  Text,
  Logo,
  CartContainer,
  CountContainer,
  ShoppingIcon,
} from './styles';

export default function Header() {
  const cartSize = useSelector(state => state.cart.length);

  return (
    <Container>
      <Logo />
      <CartContainer onPress={() => Navigation.navigate('Cart')}>
        <ShoppingIcon />
        <CountContainer>
          <Text>{cartSize}</Text>
        </CountContainer>
      </CartContainer>
    </Container>
  );
}
