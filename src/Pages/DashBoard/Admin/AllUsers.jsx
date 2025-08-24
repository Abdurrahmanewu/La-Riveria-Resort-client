/* eslint-disable no-unused-vars */
import { useState } from "react";
import useUsers from "../../../Hooks/useUsers";
import DashBoardHeader from "../../Elements/DashBoardHeader/DashBoardHeader";
import Swal from "sweetalert2";
import { Edit, Trash2, Search } from "lucide-react";
import { User as UserIcon } from "lucide-react";

const AllUsers = () => {
  const [users, refetch] = useUsers();
  // console.log(users);

  const [search, setSearch] = useState("");

  const filteredUsers = users.filter((u) => {
    const matchSearch =
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase());
    return matchSearch;
  });

  return (
    <div>
      <DashBoardHeader
        heading={"Guest list of La Riveria Resort & Park"}
        subHeading={"All users are listed here"}
      ></DashBoardHeader>

      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6">All Users Details</h1>
        {/* Searchbar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
          <div className="relative w-full md:w-1/2">
            <Search
              className="absolute left-3 top-2.5 text-gray-400"
              size={18}
            />
            <input
              type="text"
              placeholder="Search by name or email..."
              className="w-full pl-10 pr-4 py-2 border rounded-xl focus:ring focus:ring-blue-200"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto shadow-md rounded-xl border">
          <table className="w-full text-left border-collapse">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-4">User</th>
                <th className="p-4">Email</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user) => (
                <tr
                  key={user.id}
                  className="border-t hover:bg-gray-50 transition"
                >
                  <td className="p-4 flex items-center gap-3">
                    {user.avatar ? (
                      <img
                        src={user.avatar}
                        alt={user.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                    ) : (
                      <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                        <UserIcon className="text-gray-500" size={20} />
                      </div>
                    )}
                    <span className="font-medium">{user.name}</span>
                  </td>

                  <td className="p-4">{user.email}</td>
                </tr>
              ))}
              {filteredUsers.length === 0 && (
                <tr>
                  <td colSpan="5" className="p-6 text-center text-gray-500">
                    No users found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
