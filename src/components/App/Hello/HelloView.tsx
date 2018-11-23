import React from 'react';
import { QueryResult } from 'react-apollo';
import { HelloData } from '../Hello';

const HelloView = ({ error, loading, data: { hello } }: QueryResult<HelloData>) => {
  if (loading) { return <div>fetching</div>; }
  if (error) { return <div>errored</div>; }
  return (
    <div>hello {hello}</div>
  );
};

export default HelloView;
