# Great Novels API

## Requests and Responses

### Get All Authors

**GET** http://localhost:1337/authors

**Response**
```JSON
[
  {
    id: 1,
    nameFirst: 'Bram',
    nameLast: 'Stoker',
  },
  {
    id: 2,
    nameFirst: 'Oscar',
    nameLast: 'Wilde',
  },
  ... all other authors
]
```
### Get an Author with their novels and those novels genres by the author's Id (created@, updated@ and linking table not visible due to through attribute.)

**GET** http://localhost:1337/authors/2

**Response**
```JSON
{
  id: 2,
  nameFirst: 'Oscar',
  nameLast: 'Wilde',
  novels: [
    {
      id: 2,
      title: 'The Picture of Dorian Gray',
      authorId: 2,
      genres: [
        {
          id: 6,
          name: 'Fantasy',
          
        },
        ... all other genres for novel
      ]
    },
    ... all other novels by author
  ]
}
```

### Get All Genres

**GET** http://localhost:1337/genres

**Response**
```JSON
[
  {
    id: 1,
    name: 'Adventure',
  },
  {
    id: 2,
    name: 'African Literature',
  },
  ... all other genres
]
```
### Get a Genre with all novels in that genres and those novels author by the genre's Id

**GET** http://localhost:1337/genres/2

**Response**
```JSON
{
  id: 2,
  name: 'African Literature',
  novels: [
    {
      id: 15,
      title: 'Things Fall Apart',
      authorId: 15,
      },
      author: {
        id: 15,
        nameFirst: 'Chinua',
        nameLast: 'Achebe',
      }
  ]
}
```
### Get All Novels with their authors and genres

**GET** http://localhost:1337/novels

**Response**
```JSON
[
  {
    id: 1,
    title: 'Dracula',
    authorId: 1,
    author: {
      id: 1,
      nameFirst: 'Bram',
      nameLast: 'Stoker',
    },
    genres: [
      {
        id: 6,
        name: 'Fantasy'
      },
      ... all other genres for novel
    ]
  },
  ... all other novels
]
```
### Get a Novel with its author and genres the novel's Id

**GET** http://localhost:1337/novels/4

**Response**
```JSON
{
  id: 4,
  title: 'War and Peace',
  authorId: 4,
  author: {
    id: 4,
    nameFirst: 'Leo',
    nameLast: 'Tolstoy',
  },
  genres: [
    {
      id: 7,
      name: 'Fiction',
    },
    ... all other genres for novel
  ]
}
```
### Get Author by Last Name (partial match)

**GET** http://localhost:1337/authors/wild

**Response**
```JSON
{
  id: 2,
  nameFirst: 'Oscar',
  nameLast: 'Wilde',
  novels: [
    {
      id: 2,
      title: 'The Picture of Dorian Gray',
      authorId: 2,
      genres: [
        {
          id: 6,
          name: 'Fantasy'
        },
        ... all other genres for novel
      ]
    },
    ... all other novels by author
  ]
}
```

### Get Novel by Title (partial match)
**GET** http://localhost:1337/novels/peace

**Response**
```JSON
{
  id: 4,
  title: 'War and Peace',
  authorId: 4,
  author: {
    id: 4,
    nameFirst: 'Leo',
    nameLast: 'Tolstoy',
  },
  genres: [
    {
      id: 7,
      name: 'Fiction'
    },
    ... all other genres for novel
  ]
}
```
