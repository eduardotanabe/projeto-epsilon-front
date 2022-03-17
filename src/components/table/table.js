import React, { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useTable, usePagination } from "react-table";
import { COLUMNS } from "./columns"


export const Table = (props) => {

    const navigate = useNavigate()
    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => props.data, [])
    const tableInstance = useTable({
        columns,
        data
    }, 
    usePagination)

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        pageOptions,
        state,
        prepareRow,
    } = tableInstance

    const { pageIndex } = state

    return (
        <div>
            <table className="table table-hover table-striped" {...getTableProps()}>
                <thead className="table-primary">
                    {headerGroups.map(headerGroups => (
                        <tr {...headerGroups.getHeaderGroupProps()}>
                            {headerGroups.headers.map(column => (
                                <th {...column.getHeaderProps()}>
                                    {column.render('Header')}
                                </th>
                            ))
                            }
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {page.map((row, i) => {
                        prepareRow(row)
                        return (
                            <tr key={i} {...row.getRowProps} onClick={() => {
                                console.log(row.original)
                                navigate('/fotos', { state: {
                                    id: row.original.id 
                                }})
                            }} >
                                {row.cells.map(cell => {
                                    return <td {...cell.getCellProps()}> {cell.render('Cell')} </td>
                                })}
                            </tr>
                        )
                    })
                    }
                </tbody>
            </table>


            <div>
                <p className="text-primary">
                    Página(s){' '}
                    <strong>
                        {pageIndex + 1} de {pageOptions.length}
                    </strong>
                    {' '}
                </p>
                <div className="pagination">
                    <button className="btn btn-outline-primary" onClick={() => previousPage()} disabled={!canPreviousPage}>Anterior</button>
                    <button className="btn btn-outline-primary" onClick={() => nextPage()} disabled={!canNextPage}>Próxima</button>
                </div>
            </div>

        </div>
    )
}