import Imgs from '@/assets/img/sprite_footer_02.png'
import styled from 'styled-components'

export const FooterWrapper = styled.div`
  position: relative;
  height: 172px;
  overflow: hidden;
  border-top: 1px solid #d3d3d3;
  background: #f2f2f2;
  font-size: 12px;
  color: #666;
  .content {
    display: flex;
    justify-content: space-between;
  }
`
export const FooterLeft = styled.div`
  width: 520px;
  padding-top: 15px;
  line-height: 24px;
  .Links {
    span {
      margin: 0 10px;
      color: #999;
      :last-child {
        display: none;
      }
    }
    a {
      color: #999;
    }
  }
  .Dimensions {
    span {
      display: inline-block;
      margin-right: 10px;
    }
  }
`
export const FooterRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 420px;
  margin-top: 33px;
  margin-right: 30px;
  .item {
    display: flex;
    margin-left: 30px;
    flex-direction: column;
    justify-content: center;
    .link {
      display: block;
      width: 50px;
      height: 45px;
      background-image: url(${Imgs});
      background-size: 110px 450px;
      text-indent:9999px;
    }
    :nth-child(1) .link {
      background-position: -60px -101px;
    }
    :nth-child(2) .link {
      background-position: 0 0;
    }
    :nth-child(3) .link {
      background-position: -60px -50px;
    }
    :nth-child(4) .link {
      background-position: 0 -101px;
    }
    span {
      margin-top: 5px;
      display: block;
      width: 52px;
      height: 10px;
      background-image: url(${require('@/assets/img/sprite_footer_01.png').default});
      background-size: 180px 100px;
    }
  }
`
