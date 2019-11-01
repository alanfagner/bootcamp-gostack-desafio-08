import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import {
  Container,
  Product,
  ImageProduct,
  DetaisProduct,
  Name,
  Price,
  IconDel,
  SumProduct,
  Count,
  Minus,
  Amout,
  Plus,
  Total,
} from './styles';

import * as CartActions from '../../../store/modules/cart/actions';

function Item({ item }) {
  const dispatch = useDispatch();

  return (
    <Container>
      <Product>
        <ImageProduct source={{ uri: item.image }} />
        <DetaisProduct>
          <Name>{item.title}</Name>
          <Price>{item.priceFormat}</Price>
        </DetaisProduct>
        <IconDel
          onPress={() => dispatch(CartActions.removeFromCart(item.id))}
        />
      </Product>
      <SumProduct>
        <Count>
          <Minus
            onPress={() =>
              dispatch(
                CartActions.updateAmountRequest(item.id, item.amount - 1)
              )
            }
          />
          <Amout>{item.amount}</Amout>
          <Plus
            onPress={() =>
              dispatch(
                CartActions.updateAmountRequest(item.id, item.amount + 1)
              )
            }
          />
        </Count>
        <Total>item.priceTotal</Total>
      </SumProduct>
    </Container>
  );
}

Item.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    image: PropTypes.string,
    title: PropTypes.string,
    priceFormat: PropTypes.string,
    amount: PropTypes.number,
    priceTotal: PropTypes.string,
  }).isRequired,
};

export default Item;
