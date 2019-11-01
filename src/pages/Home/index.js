import React, { useState, useEffect } from 'react';

import { List, Container } from './styles';
import Item from './Item';

import api from '../../services/api';
import { formatPrice } from '../../util/format';

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function searchProducts() {
      const rep = await api.get('/products');

      const data = rep.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));

      setProducts(data);
    }

    searchProducts();
  }, []);

  return (
    <Container>
      <List
        horizontal
        data={products}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => <Item key={String(item.id)} item={item} />}
      />
    </Container>
  );
}
