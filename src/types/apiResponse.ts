export interface Anime {
  mal_id: number;
  url: string;
  images: {
    jpg: {
      image_url: string;
      small_image_url: string;
      large_image_url: string;
    };
    webp: {
      image_url: string;
      small_image_url: string;
      large_image_url: string;
    };
  };
  trailer: {
    youtube_id: string | null;
    url: string | null;
    embed_url: string | null;
  };
  approved: boolean;
  titles: {
    type: string;
    title: string;
  }[];

  title: string;
  title_english: string;
  title_japanese: string;
  title_synonyms: string[];
  type: string;
  source: string;
  episodes: number;
  status: string;
  airing: boolean;
  aired: {
    from: string;
    to: string;
    prop: {
      from: {
        day: number;
        month: number;
        year: number;
      };
      to: {
        day: number;
        month: number;
        year: number;
      };
      string: string;
    };
  };
  duration: string;
  rating: string;
  score: number;
  scored_by: number;
  rank: number;
  popularity: number;
  members: number;
  favorites: number;
  synopsis: string;
  background: string;
  season: string;
  year: number;
  broadcast: {
    day: string;
    time: string;
    timezone: string;
    string: string;
  };
  producers: {
    mal_id: number;
    type: string;
    name: string;
    url: string;
  }[];

  licensors: {
    mal_id: number;
    type: string;
    name: string;
    url: string;
  }[];

  studios: {
    mal_id: number;
    type: string;
    name: string;
    url: string;
  }[];

  genres: {
    mal_id: number;
    type: string;
    name: string;
    url: string;
  }[];

  explicit_genres: {
    mal_id: number;
    type: string;
    name: string;
    url: string;
  }[];

  themes: {
    mal_id: number;
    type: string;
    name: string;
    url: string;
  }[];

  demographics: {
    mal_id: number;
    type: string;
    name: string;
    url: string;
  }[];

  relations?: {
    relation: string;
    entry: {
      mal_id: number;
      type: string;
      name: string;
      url: string;
    }[];
  }[];

  theme?: {
    openings: string[];
    endings: string[];
  };
  external?: {
    name: string;
    url: string;
  }[];

  streaming?: {
    name: string;
    url: string;
  }[];
}

export interface pagination {
  pagination: {
    last_visible_page: number;
    has_next_page: boolean;
    current_page: number;
    items: {
      count: number;
      total: number;
      per_page: number;
    };
  };
}

export interface IGenre {
  mal_id: number;
  name: string;
  url: string;
  count: number;
}

export interface IReview {
  user: {
    username: string;
    url: string;
    images: {
      jpg: {
        image_url: string;
      };
      webp: {
        image_url: string;
      };
    };
  };
  mal_id: number;
  url: string;
  type: string;
  reactions: {
    overall: number;
    nice: number;
    love_it: number;
    funny: number;
    confusing: number;
    informative: number;
    well_written: number;
    creative: number;
  };
  date: string;
  review: string;
  score: number;
  tags: string[];
  is_spoiler: boolean;
  is_preliminary: boolean;
  episodes_watched: number;
}
