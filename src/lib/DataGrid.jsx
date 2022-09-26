import React from 'react'

export default function DataTable({ data }) {

    const th = Object.keys(data[0])



    return (
        <table className='table_grid'>
            <thead>
                <tr>
                    {th.map((e, i) => (
                        <th key={i}>{e}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((e, i) => (
                    <tr key={i}>
                        {Object.values(e).map((value, indexValue) => (
                            <td key={indexValue}>{value}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
