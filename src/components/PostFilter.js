import React from "react";
import MyInput from "./MyInput";
import Select from "./Select";
const PostFilter = ({ filter, setFilter }) => {
  return (
    <div>
      <MyInput
        value={filter.query}
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
        className="form-control mt-3"
        placeholder="поиск"
      />

      <Select
        value={filter.sort}
        onChange={(selectedSort) =>
          setFilter({ ...filter, sort: selectedSort })
        }
        options={[
          { value: "spesials", name: "по специальности" },
          { value: "name", name: "по имени" },
        ]}
      />
    </div>
  );
};
export default PostFilter;
