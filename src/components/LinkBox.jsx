import React from 'react'
import PropTypes from 'prop-types'
import Card from 'react-bootstrap/Card'

function LinkBox(props) {
  const { setting } = props
  const { title, titleEng, content } = setting
  return (
    <Card className="p-0">
      <Card.Body>
        <Card.Title className="mb-0">{title}</Card.Title>
        <Card.Text>{titleEng}</Card.Text>
        <hr />
        {content.map((c, i) => (
          <Card key={i} className="my-2">
            <Card.Img src={c.imgSrc} alt="Card image" />
            <Card.ImgOverlay className="d-flex App-blackPanel">
              {/* <Card.Title>{c.title}</Card.Title> */}
              <div className="d-flex align-items-end App-textLeft p-1">
                <Card.Link
                  href={c.link}
                  className="text-white App-textEllipsis App-notextDecoration"
                >
                  {c.content}
                </Card.Link>
              </div>
            </Card.ImgOverlay>
          </Card>
        ))}
      </Card.Body>
    </Card>
  )
}

LinkBox.propTypes = {
  setting: PropTypes.shape(),
}

LinkBox.defaultProps = {
  setting: {
    title: '潮 網 案 例',
    titleEng: 'Project Sharing',
    content: [
      {
        title: '潮網喬遷茶會',
        content: '潮網科技喬遷誌慶茶會 迎向 2022 New SaaS 數據驅動服務',
        imgSrc:
          'https://www.wavenet.com.tw/wp-content/uploads/2021/11/%E5%90%88%E7%85%A7-1024x683.jpeg',
        link: 'https://www.wavenet.com.tw/news/data-driven/',
      },
      {
        title: 'PUNWAVE ORCA',
        content: '在 PUNWAVE 的技術架構下，Nautilus 報表系統承襲跨媒體的優勢。',
        imgSrc:
          'https://www.wavenet.com.tw/wp-content/uploads/2021/10/%E5%88%8A%E9%A0%AD%E5%9C%96-min-1024x597.jpeg',
        link: 'https://www.wavenet.com.tw/news/punwave-orca/',
      },
      {
        title: '跨平台整合',
        content:
          '潮網董事合夥人張景翔專訪｜媒體新秩序來臨，台灣企業要為 2022年做好什麼準備？',
        imgSrc:
          'https://www.wavenet.com.tw/wp-content/uploads/2021/09/%E5%B0%88%E8%A8%AA%E6%96%B0%E8%81%9E%E7%A8%BF-min-1024x597.jpeg',
        link: 'https://www.wavenet.com.tw/news/digital-transformation2022/',
      },
    ],
  },
}

export default LinkBox
