'use client';

import { gql, useQuery } from '@apollo/client';
import React from 'react';

const GET_CUSTOMERS = gql`
  query customers($type: String, $ids: [String], $searchValue: String) {
    customersMain(type: $type, ids: $ids, searchValue: $searchValue) {
      list {
        _id
        firstName
        lastName
        primaryEmail
        primaryPhone
      }
      totalCount
    }
  }
`;

const TestPage = () => {
  const { loading, error, data } = useQuery(GET_CUSTOMERS, {
    variables: {
      type: 'customer',
      searchValue: '',
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Customers</h1>
      {data?.customersMain?.list?.map((customer: any) => (
        <div key={customer._id} style={{ marginBottom: '1rem', padding: '1rem', border: '1px solid #ddd' }}>
          <h3>{customer.firstName} {customer.lastName}</h3>
        </div>
      ))}
      {data?.customersMain?.totalCount && (
        <p>Total: {data.customersMain.totalCount} customers found</p>
      )}
    </div>
  );
};

export default TestPage;