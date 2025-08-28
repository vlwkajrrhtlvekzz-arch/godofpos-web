export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string; // 임시 이미지 URL
}

export const products: Product[] = [
  {
    id: 'p1',
    name: '에스프레소 머신',
    description: '고압 에스프레소 추출이 가능한 콤팩트 머신.',
    price: 199990,
    image: 'https://picsum.photos/seed/p1/400/250'
  },
  {
    id: 'p2',
    name: '무선 POS 단말기',
    description: 블루투스·NFC 지원 무선 단말기.',
    price: 349500,
    image: 'https://picsum.photos/seed/p2/400/250'
  },
  {
    id: 'p3',
    name: '스마트 영수증 프린터',
    description: 클라우드 동기화가 가능한 열전사 프린터.',
    price: 129000,
    image: 'https://picsum.photos/seed/p3/400/250'
  }
];
