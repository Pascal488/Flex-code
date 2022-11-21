import React, { useMemo } from "react";
import { useTable } from "react-table";
import { COLUMNS } from "./OrderColumns";
import Dummy from "./Dummy.json";

const Ordertable = () => {
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
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroups) => (
            <tr {...headerGroups.getHeaderGroupProps()}>
              {headerGroups.headers.map((columns) => (
                <th
                  {...columns.getHeaderProps()}
                  className="py-[8px] px-[30px] text-left"
                >
                  {columns.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((rows) => {
            prepareRow(rows);
            return (
              <tr
                {...rows.getRowProps()}
                className="hover:color-indigo-600 dark:hover:bg-slate-900 hover:font-bold"
              >
                {rows.cells.map((cell) => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      className="py-[8px] px-[30px] text-left"
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

export default Ordertable;
