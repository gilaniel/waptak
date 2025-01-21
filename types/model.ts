// export type ChannelItem = {
//   id: number;
//   gallery: number[];
//   title: string;
//   link: string;
//   author: string;
//   genre: string;
//   subs: string;
//   views: string;
//   episodes?: string;
//   length?: string;
//   date?: string;
//   imdb?: string;
//   desc: string;
//   // languages: string;
//   // director: string;
//   highlights?: string;
//   // stars: string;
//   category: string;
// };

export type ChannelItem = {
  id: number;
  category: string;
  title: string;
  link?: string;
  desc?: string;
  genre?: string;
  subs?: string;
  views?: string;
  author?: string;
  categoryName: string;
};

export type Partner = {
  id: number;
  name: string;
};
