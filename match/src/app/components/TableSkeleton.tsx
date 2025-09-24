const TableSkeleton = () => {
  return (
    <div className="w-full hidden lg:block">
      <table className="min-w-full border border-neutral-100 dark:border-neutral-200 bg-neutral-200/10 dark:bg-neutral-200 text-white dark:text-neutral-500 rounded-xl overflow-hidden">
        <thead className="bg-neutral-900/70 border-b dark:border-neutral-200 border-neutral-700 dark:bg-neutral-50 min-w-full">
          <tr>
            <th className="px-6 py-5 text-left font-semibold">Profile</th>
            <th className="px-6 py-5 text-left font-semibold">Nome</th>
            <th className="px-6 py-5 text-left font-semibold">Email</th>
            <th className="px-6 py-5 text-left font-semibold">Cidade</th>
            <th className="px-6 py-5 text-left font-semibold">Ações</th>
          </tr>
        </thead>
        <tbody className="bg-neutral-900/70 dark:bg-neutral-50">
          {Array.from({ length: 6 }).map((_, i) => (
            <tr
              key={i}
              className="border-b border-neutral-700 dark:border-neutral-200"
            >
              {/* Profile */}
              <td className="px-6 py-4">
                <div className="w-10 h-10 rounded-full bg-neutral-700 dark:bg-neutral-300 animate-pulse" />
              </td>

              {/* Nome */}
              <td className="px-6 py-4">
                <div className="h-4 w-32 rounded bg-neutral-700 dark:bg-neutral-300 animate-pulse" />
              </td>

              {/* Email */}
              <td className="px-6 py-4">
                <div className="h-4 w-40 rounded bg-neutral-700 dark:bg-neutral-300 animate-pulse" />
              </td>

              {/* Cidade */}
              <td className="px-6 py-4">
                <div className="h-4 w-24 rounded bg-neutral-700 dark:bg-neutral-300 animate-pulse" />
              </td>

              {/* Ações */}
              <td className="px-6 py-4 text-center">
                <div className="w-8 h-8 rounded-md bg-neutral-700 dark:bg-neutral-300 animate-pulse mx-auto" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableSkeleton;
