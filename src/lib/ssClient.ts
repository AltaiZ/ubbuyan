import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

export const { getClient } = registerApolloClient(() => {
  const httpLink = new HttpLink({
    uri: `${process.env.NEXT_PUBLIC_MAIN_API_DOMAIN}/graphql`,
  });

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        "erxes-app-token": process.env.NEXT_PUBLIC_ERXES_APP_TOKEN,
      },
    };
  });

  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });
});

// import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
// import { setContext } from "@apollo/client/link/context";

// // HttpLink болон context тохируулна
// const httpLink = new HttpLink({
//   uri: `${process.env.NEXT_PUBLIC_MAIN_API_DOMAIN}/graphql`,
// });

// const authLink = setContext((_, { headers }) => {
//   const cookie = `pos-config-token=${process.env.NEXT_PUBLIC_POS_TOKEN}`;
//   return {
//     headers: {
//       ...headers,
//       cookie,
//     },
//   };
// });

// // Apollo Client-г тохируулж, client функц үүсгэнэ
// const client = new ApolloClient({
//   link: authLink.concat(httpLink),
//   cache: new InMemoryCache(),
// });

// // getClient функцийг ашиглах
// export const getClient = () => client;
