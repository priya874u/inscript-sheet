

import React from 'react';
import { useTable } from 'react-table';
import { columns, data } from './data';
import './index.css';

function App() {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns: columns as any[],
    data,
  });

  return (
    <div className="p-4 font-sans">
      <h1 className="text-xl font-bold mb-4">Q3 Financial Overview</h1>

      <div className="mb-4 space-x-2">
        <button onClick={() => console.log('Import')} className="bg-blue-500 text-white px-3 py-1 rounded">Import</button>
        <button onClick={() => console.log('Export')} className="bg-blue-500 text-white px-3 py-1 rounded">Export</button>
        <button onClick={() => console.log('New Action')} className="bg-green-500 text-white px-3 py-1 rounded">New Action</button>
      </div>

      <table {...getTableProps()} className="w-full border text-sm">
        <thead className="bg-gray-100">
          {(headerGroups as any).map((headerGroup: any) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column: any) => (
                <th {...column.getHeaderProps()} className="border px-2 py-1 text-left">
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {(rows as any).map((row: any) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell: any) => (
                  <td {...cell.getCellProps()} className="border px-2 py-1">
                    {cell.column.id === 'status' ? (
                      <span className={`px-2 py-1 rounded-full text-white text-xs font-medium ${
                        cell.value === 'In Progress' ? 'bg-yellow-500' :
                        cell.value === 'Pending' ? 'bg-orange-500' :
                        cell.value === 'Complete' ? 'bg-green-500' :
                        cell.value === 'Blocked' ? 'bg-red-500' :
                        'bg-gray-400'
                      }`}>
                        {cell.value}
                      </span>
                    ) : cell.column.id === 'priority' ? (
                      <span className={`font-semibold ${
                        cell.value === 'High' ? 'text-red-600' :
                        cell.value === 'Medium' ? 'text-yellow-600' :
                        'text-blue-600'
                      }`}>
                        {cell.value}
                      </span>
                    ) : (
                      cell.render('Cell')
                    )}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="mt-4 space-x-2">
        <button onClick={() => console.log('All Orders')} className="bg-gray-200 px-3 py-1 rounded">All Orders</button>
        <button onClick={() => console.log('Pending')} className="bg-gray-200 px-3 py-1 rounded">Pending</button>
        <button onClick={() => console.log('Reviewed')} className="bg-gray-200 px-3 py-1 rounded">Reviewed</button>
      </div>
    </div>
  );
}

export default App;
