import React, { useEffect, useState } from "react";
import FormUpdateListUsers from "./components/FormUpdateListUsers";
import MyButton from "./components/MyButton";
import MyModal from "./components/MyModal/MyModal";
import PostFilter from "./components/PostFilter";
import TitleListUsers from "./components/TitleListUsers";
import { getPagesCount } from "./components/pages";
import { getPagesArray } from "./components/pages";
import { useUsers } from "./hooks/useUsers";
import { GetAll } from "./API/GetAll";
function App() {
  const [posts, setUsers] = useState([]);
  const [modal, setModal] = useState(false);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const sortedAndSearchUsers = useUsers(posts, filter.sort, filter.query);
  const pagesArray = getPagesArray(totalPages);

  const createUsers = (newUserInList) => {
    setUsers([...posts, newUserInList]);
    setModal(false);
  };
  async function fetchPosts() {
    const response = await GetAll(limit, page);
    setUsers(response.data);
    const totalCount = response.headers["x-total-count"];

    setTotalPages(getPagesCount(totalCount, limit));
  }
  useEffect(() => {
    fetchPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const removeUser = (user) => {
    setUsers(posts.filter((us) => us.id !== user.id));
  };
  const changePage = (page) => {
    setPage(page);
  };
  return (
    <div className="container-lg">
      <div className="row">
        <MyButton onClick={() => setModal(true)} btn={"Добавить человека"} />
        <MyModal visible={modal} setVisible={setModal}>
          <FormUpdateListUsers create={createUsers} />
        </MyModal>
        <hr className="mt-5" />

        <PostFilter filter={filter} setFilter={setFilter} />

        {sortedAndSearchUsers.length ? (
          <TitleListUsers
            removeUser={removeUser}
            posts={sortedAndSearchUsers}
            title="List Users"
          />
        ) : (
          <div>
            <h2>No Users</h2>
          </div>
        )}
      </div>
      <div className="d-flex m-2 ">
        {pagesArray.map((page) => (
          <MyButton onClick={() => changePage(page)} key={page} btn={page} />
        ))}
      </div>
    </div>
  );
}

export default App;
