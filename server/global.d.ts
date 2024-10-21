

declare module "graphql" {
  interface GraphQLFormattedError {
    fieldErrors?: Record<string, string[]>;
    formErrors?: Record<string, string[]>;
  }
}
