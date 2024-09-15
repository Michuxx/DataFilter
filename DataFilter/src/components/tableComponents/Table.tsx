import { useEffect } from "react";
import "./Table.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../store/UserSlice";
import { AppDispatch } from "../../store/store";
import Input from "../inputs/Input.tsx";

const Table = () => {
  const useAppDispatch = () => useDispatch<AppDispatch>();
  const user = useSelector((state: any) => state.user);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const inputOptions = [
    {
      type: "text",
      placeholder: "Name Filter",
    },
    {
      type: "text",
      placeholder: "Username Filter",
    },
    {
      type: "text",
      placeholder: "Email Filter",
    },
    {
      type: "text",
      placeholder: "Phone Filter",
    },
  ];

  return (
    <div className="container">
      <div className="userTable">
        {user.loading && <div className="loading">Loading...</div>}
        {!user.loading && user.error ? <div>Error: {user.error}</div> : null}
        {!user.loading && user.users.length > 0 && (
          <table>
            <thead>
              <tr>
                <th>name</th>
                <th>username</th>
                <th>email</th>
                <th>phone</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                {inputOptions.map((option) => (
                  <td>
                    <Input
                      type={option.type}
                      placeholder={option.placeholder}
                    />
                  </td>
                ))}
              </tr>
              {user.users.map((user: any) => (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Table;
