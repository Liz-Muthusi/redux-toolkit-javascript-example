import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./UserSlice";

const UserView = () => {
  const { users, loading, error } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, [])
  return (
    <div>
      <h1>List of users</h1>
      {loading && <div>Loading...</div>}
      {!loading && users.length>0? users.map(user=><div key={user.id}>
        {user.name}
      </div>):null}
    </div>
  );
};

export default UserView;
