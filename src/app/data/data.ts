import { title } from "process";

// export const blog = [
//   {
//     id: 1,
//     title: 'Lorem Ipsum',
//     content: `Ulamco laboris nisi ut aliquip ex ea commodo consequat. Et
//         consectetur ducimus vero placeat`,
//   },
//   {
//     id: 2,
//     title: 'Repellat Nihil',
//     content: `Dolorem est fugiat occaecati voluptate velit esse. Dicta
//     veritatis dolor quod et vel dire leno para dest`,
//   },
//   {
//     id: 3,
//     title: 'Ad ad velit qui',
//     content: `Molestiae officiis omnis illo asperiores. Aut doloribus vitae
//     sunt debitis quo vel nam quis`,
//   },
// ];

// export const events = [
//   {
//     id: 1,
//     image: './assets/images/events/event-birthday.jpg',
//     title: 'Birthday Parties',
//     price: 189,
//     content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
//     magna aliqua.`,
//     details: [
//       'Ullamco laboris nisi ut aliquip ex ea commodo consequat.',
//       'Duis aute irure dolor in reprehenderit in voluptate velit.',
//       'Ullamco laboris nisi ut aliquip ex ea commodo consequat.',
//     ],
//     summary: `Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
//     velit esse cillum dolore eu fugiat nulla pariatur`,
//   },
//   {
//     id: 2,
//     image: './assets/images/events/event-private.jpg',
//     title: 'Private Parties',
//     price: 290,
//     content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
//     magna aliqua.`,
//     details: [
//       'Ullamco laboris nisi ut aliquip ex ea commodo consequat.',
//       'Duis aute irure dolor in reprehenderit in voluptate velit.',
//       'Ullamco laboris nisi ut aliquip ex ea commodo consequat.',
//     ],
//     summary: `Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
//     velit esse cillum dolore eu fugiat nulla pariatur`,
//   },
//   {
//     id: 3,
//     image: './assets/images/events/event-custom.jpg',
//     title: 'Custom Parties',
//     price: 99,
//     content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
//     magna aliqua.`,
//     details: [
//       'Ullamco laboris nisi ut aliquip ex ea commodo consequat.',
//       'Duis aute irure dolor in reprehenderit in voluptate velit.',
//       'Ullamco laboris nisi ut aliquip ex ea commodo consequat.',
//     ],
//     summary: `Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
//     velit esse cillum dolore eu fugiat nulla pariatur`,
//   },
// ];

// export const testimonials = [
//   {
//     id: 1,
//     content: `Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. 
//     Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.`,
//     avatar: './assets/images/testimonials/testimonials-1.jpg',
//     client: 'Saul Goodman',
//     position: 'CEO',
//   },
//   {
//     id: 2,
//     content: `Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum 
//     eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.`,
//     avatar: './assets/images/testimonials/testimonials-2.jpg',
//     client: 'Sara Wilsson',
//     position: 'Consultant',
//   },
//   {
//     id: 3,
//     content: `Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis 
//     minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.`,
//     avatar: './assets/images/testimonials/testimonials-3.jpg',
//     client: 'Jena Karlis',
//     position: 'Store Owner',
//   },
//   {
//     id: 4,
//     content: `Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim 
//     velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.`,
//     avatar: './assets/images/testimonials/testimonials-4.jpg',
//     client: 'Matt Brandon',
//     position: 'Freelancer',
//   },
//   {
//     id: 5,
//     content: `Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim
//      culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.`,
//     avatar: './assets/images/testimonials/testimonials-5.jpg',
//     client: 'John Larson',
//     position: 'Entrepreneur',
//   },
// ];

// export const gallery = [
//   {
//     id: 1,
//     image: '/assets/images/gallery/gallery-1.jpg',
//   },
//   {
//     id: 2,
//     image: '/assets/images/gallery/gallery-2.jpg',
//   },
//   {
//     id: 3,
//     image: '/assets/images/gallery/gallery-3.jpg',
//   },
//   {
//     id: 4,
//     image: '/assets/images/gallery/gallery-4.jpg',
//   },
//   {
//     id: 5,
//     image: '/assets/images/gallery/gallery-5.jpg',
//   },
//   {
//     id: 6,
//     image: '/assets/images/gallery/gallery-6.jpg',
//   },
//   {
//     id: 7,
//     image: '/assets/images/gallery/gallery-7.jpg',
//   },
//   {
//     id: 8,
//     image: '/assets/images/gallery/gallery-8.jpg',
//   },
// ];

export const navs = [
  {
    id: 1,
    name: 'Home',
    target: '/',
    active: true,
  },
  {
    id: 2,
    name: 'About us',
    target: '/about-us',
    active: false,
  },
  {
    id: 3,
    name: 'Services',
    target: '#',
    active: false,
  },
  {
    id: 4,
    name: 'Careers',
    target: '#',
    active: false,
  },
  {
    id: 5,
    name: 'Blog',
    target: '/blog',
    active: false,
  },
];

export const bookings = [
  {
    id: 1,
    details: {
      name: 'Example Name',
      email: 'info@example.com',
      phone: '12345678',
      date: '2024-2-06',
      time: '11:30',
      people: 3,
      message: `Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
    velit esse cillum dolore eu fugiat nulla pariatur`,
    },
  },
];

export const ourservices = [
  {
    id: 1,
    title: 'Web Development',
    content: 'This is a company that builds websites, web apps and e-commerce solutions.',
  },
  {
    id: 2,
    title: 'Application Development',
    content: 'This is a company that builds Application, mobile apps and e-commerce solutions.',
  },
  {
    id: 3,
    title: 'Data analysis',
    content: 'This is a company that builds Data models, web apps and e-commerce solutions.',
  },
  {
    id: 4,
    title: 'Web Development',
    content: 'This is a company that builds websites, web apps and e-commerce solutions.',
  },
];

export const carouselphotos = [
  {
    "id": 1,
    "title": "Photography",
    "imageUrl": "assets/images/homepage/carousel/01.png",
  },
  {
    "id": 2,
    "title": "Photography",
    "imageUrl": "assets/images/homepage/carousel/02.png",
  },
  {
    "id": 3,
    "title": "Photography",
    "imageUrl": "assets/images/homepage/carousel/03.png",
  },
  {
    "id": 4,
    "title": "Photography",
    "imageUrl": "assets/images/homepage/carousel/04.png",
  },
  {
    "id": 5,
    "title": "Photography",
    "imageUrl": "assets/images/homepage/carousel/05.png",
  },
  {
    "id": 6,
    "title": "Photography",
    "imageUrl": "assets/images/homepage/carousel/06.png",
  },
  {
    "id": 7,
    "title": "Photography",
    "imageUrl": "assets/images/homepage/carousel/07.png",
  },
  {
    "id": 8,
    "title": "Photography",
    "imageUrl": "assets/images/homepage/carousel/08.png",
  },
  {
    "id": 9,
    "title": "Photography",
    "imageUrl": "assets/images/homepage/carousel/09.png",
  },
  {
    "id": 10,
    "title": "Photography",
    "imageUrl": "assets/images/homepage/carousel/10.png",
  },
  {
    "id": 11,
    "title": "Photography",
    "imageUrl": "assets/images/homepage/carousel/11.png",
  },
];

export const ourPartnersImages = [
  {
    "id": 1,
    "imageUrl": "assets/images/ourPartners/p1.png",
  },
  {
    "id": 2,
    "imageUrl": "assets/images/ourPartners/p2.png",
  },
  {
    "id": 3,
    "imageUrl": "assets/images/ourPartners/p3.png",
  },
  {
    "id": 4,
    "imageUrl": "assets/images/ourPartners/p4.png",
  },
  {
    "id": 5,
    "imageUrl": "assets/images/ourPartners/p5.png",
  },
  {
    "id": 6,
    "imageUrl": "assets/images/ourPartners/p6.png",
  },
  {
    "id": 7,
    "imageUrl": "assets/images/ourPartners/p7.png",
  },
  {
    "id": 8,
    "imageUrl": "assets/images/ourPartners/p8.png",
  },
  {
    "id": 9,
    "imageUrl": "assets/images/ourPartners/p9.png",
  },
  {
    "id": 10,
    "imageUrl": "assets/images/ourPartners/p10.png",
  },
  {
    "id": 11,
    "imageUrl": "assets/images/ourPartners/p11.png",
  },
  {
    "id": 12,
    "imageUrl": "assets/images/ourPartners/p1.png",
  },
  {
    "id": 13,
    "imageUrl": "assets/images/ourPartners/p2.png",
  },
  {
    "id": 14,
    "imageUrl": "assets/images/ourPartners/p3.png",
  },
];