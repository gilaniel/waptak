export type ChannelItem = {
  id: number;
  gallery: number[];
  title: string;
  link: string;
  author: string;
  genre: string;
  subs: string;
  views: string;
  episodes?: string;
  length?: string;
  date?: string;
  imdb?: string;
  desc: string;
  // languages: string;
  // director: string;
  highlights?: string;
  // stars: string;
  category: string;
};

export type Partner = {
  id: number;
  name: string;
};
