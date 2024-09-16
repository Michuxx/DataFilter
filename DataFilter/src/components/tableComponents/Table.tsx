import { useEffect } from "react";
import "./Table.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../store/UserSlice";
import { AppDispatch } from "../../store/store";
import Input from "../inputs/Input.tsx";
import {
  setFilteredEmail,
  setFilteredName,
  setFilteredPhone,
  setFilteredUsername,
} from "../../store/FilterSlice.ts";
import { RootState } from "../../store/store.ts";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
}

const Table = () => {
  const useAppDispatch = () => useDispatch<AppDispatch>();
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useAppDispatch();

  const filteredName = useSelector(
    (state: RootState) => state.filteredData.searchedName
  );
  const filteredUsername = useSelector(
    (state: RootState) => state.filteredData.searchedUsername
  );
  const filteredEmail = useSelector(
    (state: RootState) => state.filteredData.searchedEmail
  );
  const filteredPhone = useSelector(
    (state: RootState) => state.filteredData.searchedPhone
  );

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className="container">
      <div className="userTable">
        {user.loading && <div className="loading">Loading...</div>}
        {!user.loading && user.error ? <div>Error: {user.error}</div> : null}
        {!user.loading && user.users.length > 0 && (
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>Phone</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="td-input">
                  <Input
                    type="text"
                    placeholder="Name Filter"
                    handleChange={(e) =>
                      dispatch(setFilteredName(e.target.value))
                    }
                  />
                </td>
                <td className="td-input">
                  <Input
                    type="text"
                    placeholder="Username Filter"
                    handleChange={(e) =>
                      dispatch(setFilteredUsername(e.target.value))
                    }
                  />
                </td>
                <td className="td-input">
                  <Input
                    type="text"
                    placeholder="Email Filter"
                    handleChange={(e) =>
                      dispatch(setFilteredEmail(e.target.value))
                    }
                  />
                </td>
                <td className="td-input">
                  <Input
                    type="text"
                    placeholder="Phone Filter"
                    handleChange={(e) =>
                      dispatch(setFilteredPhone(e.target.value))
                    }
                  />
                </td>
              </tr>
              {user.users
                .filter((value: User) =>
                  filteredName
                    ? value.name
                        .toLowerCase()
                        .includes(filteredName.toLowerCase())
                    : true
                )
                .filter((value: User) =>
                  filteredUsername
                    ? value.username
                        .toLowerCase()
                        .includes(filteredUsername.toLowerCase())
                    : true
                )
                .filter((value: User) =>
                  filteredEmail
                    ? value.email
                        .toLowerCase()
                        .includes(filteredEmail.toLowerCase())
                    : true
                )
                .filter((value: User) =>
                  filteredPhone
                    ? value.phone
                        .toLowerCase()
                        .includes(filteredPhone.toLowerCase())
                    : true
                )
                .map((user: User) => (
                  <tr key={user.id}>
                    <td>
                      <p>{user.name}</p>
                    </td>
                    <td>
                      <p>{user.username}</p>
                    </td>
                    <td>
                      <p>{user.email}</p>
                    </td>
                    <td>
                      <p>{user.phone}</p>
                    </td>
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
