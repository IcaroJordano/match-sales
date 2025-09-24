import { HiOutlineEllipsisVertical } from "react-icons/hi2";

type User = {
  id: number;
  name: string;
  email: string;
  address: {
    city: string;
  };
};

const TableDesktop = ({ filteredUsers }: any) => {
  return (
    <div className="w-full hidden md:block">
      <table className=" min-w-full border truncate border-neutral-100 dark:bg-neutral-200 bg-neutral-200/10  dark:border-neutral-200 text-white dark:text-neutral-500 rounded-xl overflow-hidden">
        <thead className="bg-neutral-900/70  border-b  dark:border-neutral-200 border-neutral-700 dark:bg-neutral-50 min-w-full">
          <tr>
            <th className="px-6 py-5 text-left  font-semibold">Profile</th>
            <th className="px-6 py-5 text-left  font-semibold">Nome</th>
            <th className="px-6 py-5 text-left  font-semibold">Email</th>
            <th className="px-6 py-5 text-left  font-semibold">Cidade</th>
            <th className="px-6 py-5 text-left  font-semibold">Ações</th>
          </tr>
        </thead>
        <tbody className=" bg-neutral-900/70 dark:bg-neutral-50">
          {filteredUsers.map((user: User) => (
            <tr className="hover:bg-neutral-800/90 dark:hover:bg-neutral-100  border-b border-neutral-700 dark:border-neutral-200 transition-colors">
              <td className="px-6 py-4 hover:text-pink-400">
                <img
                  className="w-10 h-10 object-cover rounded-full"
                  src="./user-placeholder.png"
                  alt=""
                />
              </td>
              <td className="px-6 py-4 hover:text-rose-400  ">{user.name}</td>
              <td className="px-6 py-4 hover:text-rose-400  ">{user.email}</td>
              <td className="px-6 py-4 hover:text-rose-400  ">
                {user.address.city}
              </td>
              <td className="px-6 py-4  text-center cursor-pointer">
                <div className="w-8  h-8    hover:bg-white/80 dark:hover:bg-neutral-800/80  hover:text-neutral-800 dark:hover:text-white  rounded-md flex items-center justify-center">
                  <HiOutlineEllipsisVertical className="text-lg " />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableDesktop;
