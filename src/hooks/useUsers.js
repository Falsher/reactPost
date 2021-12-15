import { useMemo } from "react";
export const useSortedUsers = (posts, sort) => {
  const sortedUsers = useMemo(() => {
    if (sort) {
      return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]));
    }
    return posts;
  }, [sort, posts]);
  return sortedUsers;
};

export const useUsers = (posts, query, sort) => {
  const sortedUsers = useSortedUsers(posts, sort);
  const sortedAndSearchUsers = useMemo(() => {
    return sortedUsers.filter((sortedUser) =>
      sortedUser.title.toLowerCase().includes(query.toLowerCase())
    );
  }, [query, sortedUsers]);
  return sortedAndSearchUsers;
};
