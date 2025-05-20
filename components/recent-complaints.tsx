import React from "react";

type Props = {};

const RecentComplaint = (props: Props) => {
  return (
    <div className="flex flex-col mt-5">
      <div className="-m-1.5 overflow-x-auto">
        <div className="p-1.5 min-w-full inline-block align-middle">
          <div className="border border-gray-200 rounded-lg overflow-hidden dark:border-neutral-700">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
              <thead className="bg-gray-50 dark:bg-neutral-700">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-400"
                  >
                    Title
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-400"
                  >
                    Description
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-400"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase dark:text-neutral-400"
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
                    John Brown
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                    45
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                    New York No. 1 Lake Park
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                    <button
                      type="button"
                      className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 focus:outline-hidden focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:text-blue-400"
                    >
                      Delete
                    </button>
                  </td>
                </tr>

                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
                    Jim Green
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                    27
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                    London No. 1 Lake Park
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                    <button
                      type="button"
                      className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 focus:outline-hidden focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:text-blue-400"
                    >
                      Delete
                    </button>
                  </td>
                </tr>

                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
                    Joe Black
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                    31
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                    Sidney No. 1 Lake Park
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                    <button
                      type="button"
                      className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 focus:outline-hidden focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:text-blue-400"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentComplaint;
