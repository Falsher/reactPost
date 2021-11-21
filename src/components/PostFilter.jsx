import React from 'react';
import MySelect from './MySelect';
import Input from './input';

const PostFilter = function ({ filter, setFilter }) {
  return (
    <div>
      <MySelect
        value={filter.sort}
        onChange={selectedSort => setFilter({ ...filter, sort: selectedSort })}
        defaultValue="сортировка"
        options={[
          { value: 'title', name: 'по названию' },
          { value: 'body', name: 'по описанию' },
        ]}
      />
      <Input
        value={filter.query}
        onChange={event => setFilter({ ...filter, query: event.target.value })}
        placeholder="search"
      />
    </div>
  );
};

export default PostFilter;
