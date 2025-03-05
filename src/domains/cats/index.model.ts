export interface ICat {
  url: string;
  id: string;
}

export interface ICatResponse {
  images: ICat[];
}

export interface ICatRank extends ICat {
  voteCount: number;
}
