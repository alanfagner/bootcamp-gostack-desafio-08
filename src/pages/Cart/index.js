import React from 'react';
import { useSelector } from 'react-redux';

import Item from './Item';
import {
  List,
  EmptyContainer,
  Container,
  Text,
  Total,
  PriceTotal,
  ButtonFinsh,
  TextButton,
  TotalContainer,
  Wapper,
} from './styles';

import { formatPrice } from '../../util/format';

export default function Cart() {
  const cart = useSelector(state =>
    state.cart.map(product => {
      return {
        ...product,
        priceFormat: formatPrice(product.price),
        priceTotal: formatPrice(product.price * product.amount),
      };
    })
  );

  const amountTotal = useSelector(state =>
    formatPrice(
      state.cart.reduce((total, product) => {
        total += product.price * product.amount;
        return total;
      }, 0)
    )
  );

  function renderEmpty() {
    return (
      <EmptyContainer>
        <Text>Carrinho de compras vazio</Text>
      </EmptyContainer>
    );
  }

  return (
    <Container>
      <Wapper>
        <List
          ListEmptyComponent={renderEmpty}
          data={cart}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => <Item key={item.id} item={item} />}
          ListFooterComponent={
            <TotalContainer>
              <Total>Total</Total>
              <PriceTotal>{amountTotal}</PriceTotal>
              <ButtonFinsh>
                <TextButton>Finalizar</TextButton>
              </ButtonFinsh>
            </TotalContainer>
          }
        />
      </Wapper>
    </Container>
  );
}
