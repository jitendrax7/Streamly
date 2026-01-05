const movies = [
  {
    id: 1,
    title: "Inception",
    rating: 8.8,
    poster: "https://tse4.mm.bing.net/th/id/OIP.I9-iSKAlFKcfNmK0fowAEwHaK-?rs=1&pid=ImgDetMain&o=7&rm=3",
    description:
      "A skilled thief who steals information by entering dreams is given the task of planting an idea into a target's subconscious."
  },
  {
    id: 2,
    title: "Interstellar",
    rating: 8.6,
    poster: "https://tse4.mm.bing.net/th/id/OIP.I9-iSKAlFKcfNmK0fowAEwHaK-?rs=1&pid=ImgDetMain&o=7&rm=3",
    description:
      "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival."
  },
  {
    id: 3,
    title: "The Dark Knight",
    rating: 9.0,
    poster: "https://tse4.mm.bing.net/th/id/OIP.I9-iSKAlFKcfNmK0fowAEwHaK-?rs=1&pid=ImgDetMain&o=7&rm=3",
    description:
      "Batman faces the Joker, a criminal mastermind who wants to plunge Gotham City into chaos."
  },
  {
    id: 3,
    title: "The Dark Knight",
    rating: 9.0,
    poster: "https://tse4.mm.bing.net/th/id/OIP.I9-iSKAlFKcfNmK0fowAEwHaK-?rs=1&pid=ImgDetMain&o=7&rm=3",
    description:
      "Batman faces the Joker, a criminal mastermind who wants to plunge Gotham City into chaos."
  },
  {
    id: 3,
    title: "The Dark Knight",
    rating: 9.0,
    poster: "https://tse4.mm.bing.net/th/id/OIP.I9-iSKAlFKcfNmK0fowAEwHaK-?rs=1&pid=ImgDetMain&o=7&rm=3",
    description:
      "Batman faces the Joker, a criminal mastermind who wants to plunge Gotham City into chaos."
  },
  {
    id: 3,
    title: "The Dark Knight",
    rating: 9.0,
    poster: "https://tse4.mm.bing.net/th/id/OIP.I9-iSKAlFKcfNmK0fowAEwHaK-?rs=1&pid=ImgDetMain&o=7&rm=3",
    description:
      "Batman faces the Joker, a criminal mastermind who wants to plunge Gotham City into chaos."
  },
  {
    id: 3,
    title: "The Dark Knight",
    rating: 9.0,
    poster: "https://tse4.mm.bing.net/th/id/OIP.I9-iSKAlFKcfNmK0fowAEwHaK-?rs=1&pid=ImgDetMain&o=7&rm=3",
    description:
      "Batman faces the Joker, a criminal mastermind who wants to plunge Gotham City into chaos."
  },
  {
    id: 3,
    title: "The Dark Knight",
    rating: 9.0,
    poster: "https://tse4.mm.bing.net/th/id/OIP.I9-iSKAlFKcfNmK0fowAEwHaK-?rs=1&pid=ImgDetMain&o=7&rm=3",
    description:
      "Batman faces the Joker, a criminal mastermind who wants to plunge Gotham City into chaos."
  },
  {
    id: 3,
    title: "The Dark Knight",
    rating: 9.0,
    poster: "https://tse4.mm.bing.net/th/id/OIP.I9-iSKAlFKcfNmK0fowAEwHaK-?rs=1&pid=ImgDetMain&o=7&rm=3",
    description:
      "Batman faces the Joker, a criminal mastermind who wants to plunge Gotham City into chaos."
  },
  {
    id: 3,
    title: "The Dark Knight",
    rating: 9.0,
    poster: "https://tse4.mm.bing.net/th/id/OIP.I9-iSKAlFKcfNmK0fowAEwHaK-?rs=1&pid=ImgDetMain&o=7&rm=3",
    description:
      "Batman faces the Joker, a criminal mastermind who wants to plunge Gotham City into chaos."
  },
  {
    id: 3,
    title: "The Dark Knight",
    rating: 9.0,
    poster: "https://tse4.mm.bing.net/th/id/OIP.I9-iSKAlFKcfNmK0fowAEwHaK-?rs=1&pid=ImgDetMain&o=7&rm=3",
    description:
      "Batman faces the Joker, a criminal mastermind who wants to plunge Gotham City into chaos."
  },
  {
    id: 3,
    title: "The Dark Knight",
    rating: 9.0,
    poster: "https://tse4.mm.bing.net/th/id/OIP.I9-iSKAlFKcfNmK0fowAEwHaK-?rs=1&pid=ImgDetMain&o=7&rm=3",
    description:
      "Batman faces the Joker, a criminal mastermind who wants to plunge Gotham City into chaos."
  },
  {
    id: 3,
    title: "The Dark Knight",
    rating: 9.0,
    poster: "https://tse4.mm.bing.net/th/id/OIP.I9-iSKAlFKcfNmK0fowAEwHaK-?rs=1&pid=ImgDetMain&o=7&rm=3",
    description:
      "Batman faces the Joker, a criminal mastermind who wants to plunge Gotham City into chaos."
  },
  {
    id: 3,
    title: "The Dark Knight",
    rating: 9.0,
    poster: "https://tse4.mm.bing.net/th/id/OIP.I9-iSKAlFKcfNmK0fowAEwHaK-?rs=1&pid=ImgDetMain&o=7&rm=3",
    description:
      "Batman faces the Joker, a criminal mastermind who wants to plunge Gotham City into chaos."
  },
  {
    id: 3,
    title: "The Dark Knight",
    rating: 9.0,
    poster: "https://tse4.mm.bing.net/th/id/OIP.I9-iSKAlFKcfNmK0fowAEwHaK-?rs=1&pid=ImgDetMain&o=7&rm=3",
    description:
      "Batman faces the Joker, a criminal mastermind who wants to plunge Gotham City into chaos."
  },
  {
    id: 3,
    title: "The Dark Knight",
    rating: 9.0,
    poster: "https://tse4.mm.bing.net/th/id/OIP.I9-iSKAlFKcfNmK0fowAEwHaK-?rs=1&pid=ImgDetMain&o=7&rm=3",
    description:
      "Batman faces the Joker, a criminal mastermind who wants to plunge Gotham City into chaos."
  },
  {
    id: 3,
    title: "The Dark Knight",
    rating: 9.0,
    poster: "https://tse4.mm.bing.net/th/id/OIP.I9-iSKAlFKcfNmK0fowAEwHaK-?rs=1&pid=ImgDetMain&o=7&rm=3",
    description:
      "Batman faces the Joker, a criminal mastermind who wants to plunge Gotham City into chaos."
  },
  {
    id: 3,
    title: "The Dark Knight",
    rating: 9.0,
    poster: "https://tse4.mm.bing.net/th/id/OIP.I9-iSKAlFKcfNmK0fowAEwHaK-?rs=1&pid=ImgDetMain&o=7&rm=3",
    description:
      "Batman faces the Joker, a criminal mastermind who wants to plunge Gotham City into chaos."
  },
  {
    id: 3,
    title: "The Dark Knight",
    rating: 9.0,
    poster: "https://tse4.mm.bing.net/th/id/OIP.I9-iSKAlFKcfNmK0fowAEwHaK-?rs=1&pid=ImgDetMain&o=7&rm=3",
    description:
      "Batman faces the Joker, a criminal mastermind who wants to plunge Gotham City into chaos."
  },
  {
    id: 3,
    title: "The Dark Knight",
    rating: 9.0,
    poster: "https://tse4.mm.bing.net/th/id/OIP.I9-iSKAlFKcfNmK0fowAEwHaK-?rs=1&pid=ImgDetMain&o=7&rm=3",
    description:
      "Batman faces the Joker, a criminal mastermind who wants to plunge Gotham City into chaos."
  },
  {
    id: 3,
    title: "The Dark Knight",
    rating: 9.0,
    poster: "https://tse4.mm.bing.net/th/id/OIP.I9-iSKAlFKcfNmK0fowAEwHaK-?rs=1&pid=ImgDetMain&o=7&rm=3",
    description:
      "Batman faces the Joker, a criminal mastermind who wants to plunge Gotham City into chaos."
  },
  {
    id: 3,
    title: "The Dark Knight",
    rating: 9.0,
    poster: "https://tse4.mm.bing.net/th/id/OIP.I9-iSKAlFKcfNmK0fowAEwHaK-?rs=1&pid=ImgDetMain&o=7&rm=3",
    description:
      "Batman faces the Joker, a criminal mastermind who wants to plunge Gotham City into chaos."
  },
  {
    id: 3,
    title: "The Dark Knight",
    rating: 9.0,
    poster: "https://tse4.mm.bing.net/th/id/OIP.I9-iSKAlFKcfNmK0fowAEwHaK-?rs=1&pid=ImgDetMain&o=7&rm=3",
    description:
      "Batman faces the Joker, a criminal mastermind who wants to plunge Gotham City into chaos."
  },
  {
    id: 3,
    title: "The Dark Knight",
    rating: 9.0,
    poster: "https://tse4.mm.bing.net/th/id/OIP.I9-iSKAlFKcfNmK0fowAEwHaK-?rs=1&pid=ImgDetMain&o=7&rm=3",
    description:
      "Batman faces the Joker, a criminal mastermind who wants to plunge Gotham City into chaos."
  },
  {
    id: 3,
    title: "The Dark Knight",
    rating: 9.0,
    poster: "https://tse4.mm.bing.net/th/id/OIP.I9-iSKAlFKcfNmK0fowAEwHaK-?rs=1&pid=ImgDetMain&o=7&rm=3",
    description:
      "Batman faces the Joker, a criminal mastermind who wants to plunge Gotham City into chaos."
  },
  {
    id: 3,
    title: "The Dark Knight",
    rating: 9.0,
    poster: "https://tse4.mm.bing.net/th/id/OIP.I9-iSKAlFKcfNmK0fowAEwHaK-?rs=1&pid=ImgDetMain&o=7&rm=3",
    description:
      "Batman faces the Joker, a criminal mastermind who wants to plunge Gotham City into chaos."
  },
  {
    id: 3,
    title: "The Dark Knight",
    rating: 9.0,
    poster: "https://tse4.mm.bing.net/th/id/OIP.I9-iSKAlFKcfNmK0fowAEwHaK-?rs=1&pid=ImgDetMain&o=7&rm=3",
    description:
      "Batman faces the Joker, a criminal mastermind who wants to plunge Gotham City into chaos."
  },
  {
    id: 3,
    title: "The Dark Knight",
    rating: 9.0,
    poster: "https://tse4.mm.bing.net/th/id/OIP.I9-iSKAlFKcfNmK0fowAEwHaK-?rs=1&pid=ImgDetMain&o=7&rm=3",
    description:
      "Batman faces the Joker, a criminal mastermind who wants to plunge Gotham City into chaos."
  },
  {
    id: 3,
    title: "The Dark Knight",
    rating: 9.0,
    poster: "https://tse4.mm.bing.net/th/id/OIP.I9-iSKAlFKcfNmK0fowAEwHaK-?rs=1&pid=ImgDetMain&o=7&rm=3",
    description:
      "Batman faces the Joker, a criminal mastermind who wants to plunge Gotham City into chaos."
  },
  {
    id: 3,
    title: "The Dark Knight",
    rating: 9.0,
    poster: "https://tse4.mm.bing.net/th/id/OIP.I9-iSKAlFKcfNmK0fowAEwHaK-?rs=1&pid=ImgDetMain&o=7&rm=3",
    description:
      "Batman faces the Joker, a criminal mastermind who wants to plunge Gotham City into chaos."
  }
];

export default movies;
