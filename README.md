A [mobx-state-tree tutorial](https://egghead.io/courses/manage-application-state-with-mobx-state-tree) rewritten with Hooks, Typescript, Styled Components and GraphQL.

# Todo

[![Greenkeeper badge](https://badges.greenkeeper.io/penumbra1/wishtank.svg)](https://greenkeeper.io/)

- [ ] packtracker
- [ ] Theming
- [ ] Import shortcuts
- [x] mst-gql
- [ ] https://v2.grommet.io/components

# Data
## Product search
FakeQL endpoint: https://fakeql.com/graphql/e281a5b24c113cbef01cfa195aaec475 

Playground: [fireql.dev](https://fireql.dev/?url=https://fakeql.com/graphql/e281a5b24c113cbef01cfa195aaec475)

## Users and wishlists
Hasura API: https://wishtank.herokuapp.com/v1/graphql

Until [remote joins](https://blog.hasura.io/ remote-joins-a-graphql-api-to-join-database-and-other-data-sources/) are released, product info from FakeQL is duplicated in Hasura Postgres.