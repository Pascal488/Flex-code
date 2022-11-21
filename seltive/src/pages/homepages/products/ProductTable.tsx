import React, { useMemo } from "react";
import { useTable } from "react-table";
import { COLUMNS } from "./ProductColumns";
import Dummy from "./Dummy.json";

const ProductTable = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => Dummy, []);
  const tableInstance = useTable({
    columns,
    data,
  });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <div>
      <table
        {...getTableProps()}
        className="text-gray-500 font-semiblod text-[15px] dark:text-gray-300"
      >
        <thead>
          {headerGroups.map((headerGroups) => (
            <tr {...headerGroups.getHeaderGroupProps()}>
              {headerGroups.headers.map((columns) => (
                <th
                  {...columns.getHeaderProps()}
                  className="py-[8px] px-[40px] text-left"
                >
                  {columns.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody
          {...getTableBodyProps()}
          className="[&>*:nth-child(even)]:bg-gray-100 dark:[&>*:nth-child(even)]:bg-slate-800"
        >
          {rows.map((rows) => {
            prepareRow(rows);
            return (
              <tr
                {...rows.getRowProps()}
                className="
                 [&>*:nth-child(6)]:flex 
                 [&>*:nth-child(6)]:flex-col 
                 [&>*:nth-child(6)]:bg-indigo-200 
                 [&>*:nth-child(6)]:text-xs 
                 [&>*:nth-child(6)]:text-indigo-600 
                 [&>*:nth-child(6)]:w-[70px] 
                 [&>*:nth-child(6)]:p-1 
                 [&>*:nth-child(6)]:ml-6 
                 [&>*:nth-child(6)]:mt-2 
                 [&>*:nth-child(6)]:hover:underline 
                 [&>*:nth-child(6)]:text-center 
                 [&>*:nth-child(6)]:h-[24px] 
                 [&>*:nth-child(6)]:gap-0 
                 [&>*:nth-child(6)]:border 
                 [&>*:nth-child(6)]:border-indigo-500  
                 [&>*:nth-child(6)]:rounded-[5px]   
                 [&>*:nth-child(7)]:text-2xl
                 [&>*:nth-child(7)]:text-black
                 dark:[&>*:nth-child(7)]:text-gray-300
                 hover:color-indigo-600 dark:hover:bg-slate-900 hover:font-bold"
              >
                {rows.cells.map((cell) => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      className="py-[3px] px-[45px] text-left"
                    >
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
