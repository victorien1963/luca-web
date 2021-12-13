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
      <Pagination className="justify-content-center pagination-card">
        <Pagination.Prev onClick={() => setpage(page - 1)} />
        {Array.from(
          {
            length: setting.content.length / setting.pageSize + 1,
          },
          (v, i) => i + 1
        ).map((number) => (
          <Pagination.Item
            className="pagination-card-bg"
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
    headers: ['帳 戶 名 稱', '花 費 金 額'],
    content: [
      { name: '泛科知識(業二)', amount: '$ 1,330' },
      { name: '泛科知識(業一)', amount: '$ 1,440' },
      { name: 'PanMedia', amount: '$ 1,920' },
      { name: 'PanMedia', amount: '$ 440' },
      { name: 'PanMedia', amount: '$ 440' },
      { name: 'PanMedia', amount: '$ 740' },
      { name: 'PanMedia', amount: '$ 125' },
      { name: 'PanMedia', amount: '$ 440' },
      { name: 'PanMedia', amount: '$ 688' },
      { name: 'PanMedia', amount: '$ 440' },
      { name: 'PanMedia', amount: '$ 5,000' },
      { name: 'PanMedia', amount: '$ 440' },
      { name: 'PanMedia', amount: '$ 1,711' },
      { name: 'PanMedia', amount: '$ 440' },
    ],
  },
}

export default Datatable
