import { Order } from './order';

export const ORDERS: Order[] = [
  {
    id: 'test_merchant_id_1',
    products: ['test_product_id_1'],
    image: 'assets/imgs/cloth.png',
    date: '31-10-19',
    status: 'shipped',
    sizes: [34]
  },
  {
    id: 'test_merchant_id_2',
    products: ['test_product_id_2', 'test_product_id_3'],
    image: 'assets/imgs/jacket.png',
    date: '27-09-19',
    status: 'received',
    sizes: [32, 34]
  },
  {
    id: 'test_merchant_id_3',
    products: ['test_product_id_2', 'test_product_id_3'],
    image: 'assets/imgs/cardigan.png',
    date: '12-08-19',
    status: 'received',
    sizes: [36, 36]
  }
]