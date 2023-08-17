module.exports = {
  overwrite: true,
  generates: {
    "./src/generated/graphql.tsx": {
      schema: [
        {
          "http://localhost:8080/v1/graphql": {},
        },
      ],
      documents: ["./src/gql/*.graphql"],
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
      config: {
        preResolveTypes: true,
        skipTypename: false,
        withHooks: true,
        withHOC: false,
        withComponent: false,
        enumsAsTypes: true,
        constEnums: true,
        reactApolloVersion: 3,
      },
    },
  },
};

// commmented out lines should be used when there are queries/mutations defined from the client