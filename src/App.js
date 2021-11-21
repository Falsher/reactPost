import React, { useEffect, useState } from 'react';
import PostTodo from './components/postTodo';
import Counter from './components/counter';
import TodoList from './components/todoList';
import MyModal from './components/MyModal';
import PostFilter from './components/PostFilter';
import MyButton from './components/myButton';
import { usePosts } from './hooks/usePosts';
import PostService from './components/API/PostService';
import { getPageCount, getPagesArray } from './components/utils/pages';

function App() {
  const [todoList, setTodoList] = useState([]);

  const [filter, setFilter] = useState({ sort: '', query: '' });

  const [limit, setLimit] = useState(10);
  const [totalPage, setTotalPage] = useState(0);
  const [page, setPage] = useState(1);
  const [modal, setModal] = useState(false);
  const sortedAndSaerchTodo = usePosts(todoList, filter.sort, filter.query);
  const createTodo = newTodo => {
    setTodoList([...todoList, newTodo]);
  };
  const changePage = page => {
    setPage(page);
  };
  const removetodoPost = todo => {
    setTodoList(todoList.filter(todolis => todolis.id !== todo.id));
  };
  let pagesArray = getPagesArray(totalPage);
  useEffect(() => {
    fetchPosts();
  }, [page]);
  async function fetchPosts() {
    const response = await PostService.getAll(limit, page);
    setTodoList(response.data);
    const totalCount = response.headers['x-total-count'];
    setTotalPage(getPageCount(totalCount, limit));
  }
  return (
    <div>
      <MyModal visible={modal} setVisible={setModal}>
        <PostTodo create={createTodo} />
      </MyModal>
      <hr />
      <MyButton onClick={fetchPosts}>Добавить список API todo</MyButton>
      <hr />
      <Counter />
      <hr />
      <MyButton onClick={() => setModal(true)}>Добавить todo</MyButton>
      <hr />
      <PostFilter filter={filter} setFilter={setFilter} />

      <div>
        {sortedAndSaerchTodo.length !== 0 ? (
          <TodoList remove={removetodoPost} todoList={sortedAndSaerchTodo} />
        ) : (
          <p>not todo</p>
        )}
      </div>
      {pagesArray.map(p => (
        <MyButton key={p} onClick={() => changePage(p)}>
          {p}
        </MyButton>
      ))}
    </div>
  );
}

export default App;
