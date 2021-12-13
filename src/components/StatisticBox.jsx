import React from 'react'
import PropTypes from 'prop-types'
import Card from 'react-bootstrap/Card'

function StatisticBox(props) {
  const { setting } = props
  const { title, titleEng, data1, data2, data3, data4, data5, link, method } =
    setting
  return (
    <Card className="statistic-card p-3 fs-lg-3 fs-5 lh-md">
      <Card.Body>
        {title && <Card.Title className="mb-0">{title}</Card.Title>}
        {titleEng && <Card.Text className="fs-6">{titleEng}</Card.Text>}
        <hr />
        {data1 && <Card.Text className="mt-5">{data1}</Card.Text>}
        {data2 && <Card.Text>{data2}</Card.Text>}
        {data3 && <Card.Text>{data3}</Card.Text>}
        {data4 && <Card.Text>{data4}</Card.Text>}
        {data5 && <Card.Text>{data5}</Card.Text>}
      </Card.Body>
      {link && (
        <Card.Footer>
          <Card.Link href={link}>Link</Card.Link>
        </Card.Footer>
      )}
      {method && (
        <Card.Footer>
          <Card.Link onClick={method}>method</Card.Link>
        </Card.Footer>
      )}
    </Card>
  )
}

StatisticBox.propTypes = {
  setting: PropTypes.shape(),
}

StatisticBox.defaultProps = {
  setting: {
    title: '帳 戶 總 覽',
    titleEng: 'Account Overview',
    data1: '您 有 1 則 未 讀 系 統 通 知',
    data2: '目 前 預 算 總 金 額 為 $ 12,000 元',
    data3: '廣 告 帳 戶 總 數 量 為 2 個',
    data4: '執 行 中 的 廣 告 數 量 為 6 則',
    data5: '已 完 成 的 廣 告 數 量 為 0 則',
  },
}

export default StatisticBox
