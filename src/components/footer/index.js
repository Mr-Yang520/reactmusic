import { footerImages, footerLinks } from '@/common/local-data'
import React, { Fragment, memo } from 'react'
import { FooterLeft, FooterRight, FooterWrapper } from './style'

export default memo(function Footer() {
  return (
    <FooterWrapper>
      <div className="content wrap-v2">
        <FooterLeft>
          <div className="Links">
            {footerLinks.map((item) => {
              return (
                <Fragment key={item.title}>
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.title}
                  </a>
                  <span>|</span>
                </Fragment>
              )
            })}
          </div>
          <div className="Dimensions">
            <span>网易公司版权所有©1997-2021</span>
            <span>
              杭州乐读科技有限公司运营：
              <a
                href="https://p1.music.126.net/Mos9LTpl6kYt6YTutA6gjg==/109951164248627501.png"
                rel="noopener noreferrer"
                target="_blank"
              >
                浙网文[2018]3506-263号
              </a>
            </span>
          </div>
          <div className="Dimensions">
            <span>违法和不良信息举报电话：0571-89853516</span>
            <span>
              举报邮箱：
              <a
                href="https://p1.music.126.net/Mos9LTpl6kYt6YTutA6gjg==/109951164248627501.png"
                rel="noopener noreferrer"
                target="_blank"
              >
                ncm5990@163.com
              </a>
            </span>
          </div>
          <div className="Dimensions">
            <span>粤B2-20090191-18  工业和信息化部备案管理系统网站</span>
            <span>
              <a
                href="https://p1.music.126.net/Mos9LTpl6kYt6YTutA6gjg==/109951164248627501.png"
                rel="noopener noreferrer"
                target="_blank"
              >
                浙公网安备 33010902002564号
              </a>
            </span>
          </div>
        </FooterLeft>
        <FooterRight>
            {
                footerImages.map((item,index)=>{
                    return(
                        <li className="item" key={item.link}>
                            <a className="link" href={item.link} rel="noopener noreferrer" target="_blank">1</a>
                            <span className="title">{item.title}</span>
                        </li>
                    )
                })
            }
        </FooterRight>
      </div>
    </FooterWrapper>
  )
})
