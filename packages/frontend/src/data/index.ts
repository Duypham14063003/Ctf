import images from '../assets/images';
import { typeContest, typeRanking } from '../utils/types';

export const dataContest: typeContest[] = [
  {
    id: 1,
    name: 'Find key in our Web(1)',
    authors: ['xuanlong2002'],
    duration: '02:15',
    start: '2023-05-25',
    description: '10:10:10',
    number_of_levels: [
      {
        level: 1,
        suggestion: 'lorem isum',
      },
    ],
    registered: 1012,
  },
  {
    id: 2,
    name: 'Jim Green',
    authors: ['xuanlong2002'],
    duration: '02:15',
    start: '2023-05-30',
    description: '10:10:10',
    number_of_levels: [
      {
        level: 1,
        suggestion: 'lorem isum',
      },
    ],
    registered: 2012,
  },
  {
    id: 3,
    name: 'Joe Black',
    authors: ['truonghuy2001', 'xuanlong2002', 'dotuan2002'],
    duration: '02:15',
    start: '2023-05-20',
    description: '10:10:10',
    number_of_levels: [
      {
        level: 1,
        suggestion: 'lorem isum',
      },
    ],
    registered: 3025,
  },
];
export const dataRanking: typeRanking[] = [
  {
    key: 1,
    name: 'Nguyễn Xuân Long',
    image:
      'https://i.pinimg.com/564x/44/92/6f/44926f40c372db2b701bb6b3e0e98fc4.jpg',
    solved: 201,
    point: 11201,
    country: images.vietnamFlag,
    level: 10,
  },
  {
    key: 2,
    name: 'Trương Thành Huy',
    image:
      'https://i.pinimg.com/564x/44/92/6f/44926f40c372db2b701bb6b3e0e98fc4.jpg',
    solved: 250,
    point: 11201,
    country: images.vietnamFlag,
    level: 21,
  },
  {
    key: 3,
    name: 'Đỗ Ngọc Tuân',
    image:
      'https://i.pinimg.com/564x/44/92/6f/44926f40c372db2b701bb6b3e0e98fc4.jpg',
    solved: 100,
    point: 11201,
    country: images.vietnamFlag,
    level: 15,
  },
];
