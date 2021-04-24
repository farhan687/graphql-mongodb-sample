# Graphql-Mongodb-Sample

Use Graphql query language to connect mongodb or sqllite


## How to Use
- Install and run mongodb on local machine
- Run `npm install` to install dependencies.
- Run `npm start` to start express server.
- use http://localhost:9999/graphql graphql query editor to run following graphql queries


## Graphql Queries

### Mutations
#### create friend
```
mutation {
  createFriend(input: {
    firstName: "foo",
    lastName: "bar"
  }) {
    id
  }
}
```

#### delete friend
```
mutation {
  deleteFriend(id: "6082f0962387512b3546e144") 
}
```

#### update friend
```
mutation {
  updateFriend(input: {
    id: "6082f0962387512b3546e144"
    firstName: "Farhan",
    lastName: "Chauhan",
    email: "farhan@gmail.com",
    age: 29
  }) {
    id
    firstName
    email
    age
  }
}
```

### Query

```
query {
  getFriend(id: "d8ac297c51c2a195027b"){
    firstName
    lastName
    age
  }
}
```

#### Alias query
```
query {
  friend:getFriend(id: "6082f65614e2b62eaddbc5fc") {
    firstName
    lastName
    age
  }
  aliens: getAliens {
    firstName
    planet
  }
}
```

#### Fragment
```
query {
  friend:getFriend(id: "6082f65614e2b62eaddbc5fc") {
    ...friendFormat
  }
  aliens: getAliens {
    ...alienFormat
  }
}

fragment friendFormat on Friend {
  firstName
  lastName
}

fragment alienFormat on Alien {
  firstName
  lastName
}
```
