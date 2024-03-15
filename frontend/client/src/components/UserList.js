import axios from "axios";
import React, { useState, useEffect } from "react";
import CautionIcon from "./icons/CautionIcon";

function UserList() {
  const [userList, setUserList] = useState([]);

  const getData = async () => {
    const response = await axios.get("/userlist");
    //console.log('response', response);
    setUserList(response.data);
    return response;
  };

  const deleteUser = async(id) => {//thank you thank you thank you Lord!!
    const response = await axios.delete(`/userlist/${id}` )
    getData()
   return console.log(response)

  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="bg-teal-400 min-h-screen text-center pt-[200px]">
        <div className="text-4xl font-black text-black pb-5">User Database</div>
        <div className=" text-2xl font-medium flex justify-center">
          Caution: Top Secret Information
          <CautionIcon />
        </div>
        <div className="flex flex-col p-20">
          <div className="-m-1.5 overflow-x-auto">
            <div className="p-1.5 min-w-full inline-block align-middle">
              <div className="border rounded-lg overflow-hidden">
                <table className="min-w-full divide-y divide-gray-500">
                  <thead className="bg-gray-300">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-center text-xs font-medium text-black uppercase"
                      >
                        User
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-center text-xs font-medium text-black uppercase"
                      >
                        Email
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-end text-xs font-medium text-black uppercase"
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    {userList.map((user) => {
                      return (
                        <tr key={user.id} className="bg-white">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                            {user.username}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                            {user.email}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                            <button
                            onClick={()=> deleteUser(user._id)}
                              type="button"
                              className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserList;
