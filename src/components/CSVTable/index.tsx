import Papa from 'papaparse';
import React, { useMemo } from 'react';
import { useTable } from 'react-table';

const CsvTable = ({ csvFile }) => {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(csvFile);
      const reader = response.body?.getReader();
      const result = await reader?.read();
      const text = new TextDecoder().decode(result?.value);
      const parsedData = Papa.parse(text, { header: true }).data;
      setData(parsedData);
    };

    fetchData();
  }, [csvFile]);

  const columns = useMemo(() => {
    if (data.length === 0) return [];
    if (data[0] === undefined || typeof data[0] !== 'object') {
      return [];
    }
    return Object.keys(data[0]).map((key) => ({
      Header: key,
      accessor: key,
    }));
  }, [data]);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <table {...getTableProps()} className="w-full border-2 border-gray-400">
      <thead>
        {headerGroups.map((headerGroup, idx) => (
          <tr
            key={idx}
            {...headerGroup.getHeaderGroupProps()}
            className="bg-blue-500 text-white"
          >
            {headerGroup.headers.map((column) => (
              <th
                key={column.id}
                {...column.getHeaderProps()}
                className="border-2 border-gray-400 p-2"
              >
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, idxrow) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()} key={idxrow}>
              {row.cells.map((cell, idxcell) => (
                <td
                  key={idxcell}
                  {...cell.getCellProps()}
                  className="border-2 border-gray-400 p-2"
                >
                  {cell.render('Cell')}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default CsvTable;
