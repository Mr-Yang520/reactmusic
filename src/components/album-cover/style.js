import styled from 'styled-components'

export const AlbumCoverWrapper = styled.div`
  width: auto;
  .CoverImg {
    width: ${props => props.width + 'px'};
    background: url(${require('@/assets/img/sprite_02.png').default}) no-repeat;
    background-position: -260px 100px;
    .Img {
      position: relative;
      width: ${props => props.width + 'px'};
      height: ${props => props.size + 'px'};

      .Playing {
        width: 22px;
        height: 22px;
        position: absolute;
        bottom: 6px;  
        right: 24px;
        background: url(${require('@/assets/img/sprite_icon.png').default})
          no-repeat;
        background-position: 0 -85px;
        text-indent: 9999px;
        overflow: hidden;
        opacity: 0;
        transition: opacity 0.2s linear;
        :hover {
          background-position: 0 -110px;
        }
      }

      :hover .Playing {
        opacity: 1;
      }
    }
    .Vinyl {
      width: ${props => props.width + 'px'};
      height: ${props => props.size + 'px'};
      position: absolute;
      top: 0;
      left: 0;
      background: url(${require('@/assets/img/sprite_cover.png').default})
        no-repeat;
      background-position: 0 ${props => props.bgp};
      text-indent: 9999px;
      overflow: hidden;
    }
    p {
      height: 20px;
      line-height: 20px;
      a {
        display: inline-block;
        width: 118px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
    .Better {
      margin-top: 7px;
      a {
        color: #000;
      }
    }
  }
`
