import { useMemo } from 'react';
export const useSortedPosts = (todoList, sort) => {
  const sortedTodoList = useMemo(() => {
    console.log('функция сортировки');
    if (sort) {
      return [...todoList].sort((a, b) => a[sort].localeCompare(b[sort]));
    }
    return todoList;
  }, [sort, todoList]);
  return sortedTodoList;
};
export const usePosts = (todoList, sort, query) => {
  const sortedTodoList = useSortedPosts(todoList, sort);
  const sortedAndSaerchTodo = useMemo(() => {
    return sortedTodoList.filter(todo =>
      todo.title.toLowerCase().includes(query),
    );
  }, [query, sortedTodoList]);
  return sortedAndSaerchTodo;
};
