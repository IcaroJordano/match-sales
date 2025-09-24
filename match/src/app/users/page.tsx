import UsersList from "./UsersList";

export default function UsersPage() {
  return (
    <main className="mx-auto max-w-6xl  dark:bg-neutral-100 p-5">
      {/* <h1 className="mb-6 text-2xl font-bold text-white">Usuários</h1> */}
      <UsersList />
    </main>
  );
}
