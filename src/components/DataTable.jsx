import React, { useState } from 'react'
import PropTypes from 'prop-types'
// import { Container, Row } from 'react-bootstrap'
import Table from 'react-bootstrap/Table'
import Pagination from 'react-bootstrap/Pagination'

function Datatable(props) {
  const { setting } = props
  const [page, setpage] = useState(1)
  return (
    <>
      <Table bordered responsive className="App-textLeft">
        <thead>
          <tr>
            {setting.hasCheckBox && <th />}
            {setting.headers.map((header) => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {setting.content
            .slice(setting.pageSize * (page - 1), setting.pageSize * page)
            .map((c, i) => (
              // eslint-disable-next-line react/no-array-index-key
              <tr key={i}>
                {setting.hasCheckBox && <td />}
                {Object.keys(c).map((key) => (
                  <td key={key}>{c[key]}</td>
                ))}
              </tr>
            ))}
        </tbody>
      </Table>
      <Pagination className="justify-content-center">
        <Pagination.Prev onClick={() => setpage(page - 1)} />
        {Array.from(
          {
            length: setting.content.length / setting.pageSize + 1,
          },
          (v, i) => i + 1
        ).map((number) => (
          <Pagination.Item
            key={number}
            active={number === page}
            onClick={() => setpage(number)}
          >
            {number}
          </Pagination.Item>
        ))}
        <Pagination.Next onClick={() => setpage(page + 1)} />
      </Pagination>
    </>
  )
}

Datatable.propTypes = {
  setting: PropTypes.shape(),
}

Datatable.defaultProps = {
  setting: {
    hasCheckBox: false,
    pageSize: 5,
    headers: ['帳戶名稱', '花費金額'],
    content: [
      { name: '泛科知識(業二)', amount: '$330' },
      { name: 'PanMedia', amount: '$440' },
      { name: 'PanMedia', amount: '$440' },
      { name: 'PanMedia', amount: '$440' },
      { name: 'PanMedia', amount: '$440' },
      { name: 'PanMedia', amount: '$440' },
      { name: 'PanMedia', amount: '$440' },
      { name: 'PanMedia', amount: '$440' },
      { name: 'PanMedia', amount: '$440' },
      { name: 'PanMedia', amount: '$440' },
      { name: 'PanMedia', amount: '$440' },
      { name: 'PanMedia', amount: '$440' },
      { name: 'PanMedia', amount: '$440' },
      { name: 'PanMedia', amount: '$440' },
    ],
  },
}

export default Datatable
