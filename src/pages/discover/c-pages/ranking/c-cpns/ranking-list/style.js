import styled from 'styled-components'

export const RankingListWrapper = styled.div`
  padding: 0 40px;
  .listTable {
    width: 100%;
    border: 1px solid #d9d9d9;
    table {
      width: 100%;
      thead {
        .header {
          height: 38px;
          th {
            background: url(${require('@/assets/img/sprite_table.png').default});
            background-position: 0 0;
            background-repeat: repeat-x;
            .wp {
              padding: 8px 10px;
              background: #f7f7f7;
              background: url(${require('@/assets/img/sprite_table.png').default})
                no-repeat;
              background-position: 0 -58px;
              color: #666;
              font-weight: normal;
              text-align: left;
            }
          }
          .ranking {
            width: 77px;
            background-position: 0 0;
          }
          .title {
          }
          .duration {
            width: 91px;
          }
          .singer {
            width: 26%;
          }
        }
      }
      tbody {
        tr {
          background: #fff;
          td {
            padding: 6px 10px;
            .rankNum {
              display: flex;
              .num {
                display: inline-block;
                width: 25px;
                text-align: center;
                color: #999;
              }
              .icon {
                display: inline-block;
                width: 35px;
                .uicon {
                  display: flex;
                  margin: 0 auto;
                  width: 16px;
                  height: 17px;
                  background: url(${require('@/assets/img/sprite_icon2.png').default})
                    no-repeat;
                  background-position: -67px -283px;
                }
              }
            }
            .songName {
              display: flex;
              align-items: center;
              width: 293px;
              .playIcon {
                width: 17px;
                height: 17px;
                margin-right: 8px;
                background: url(${require('@/assets/img/sprite_table.png').default})
                  no-repeat;
                background-position: 0 -103px;
                cursor: pointer;
                :hover{
                  background-position: 0 -128px;
                }
              }
              .songImg {
                img {
                  width: 50px;
                  height: 50px;
                  margin-right: 14px;
                }
              }
              .txt {
                position: relative;
                display: inline-block;
                align-items: center;
                max-width: 88%;
                height: 20px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                padding-right: 25px;
                a{
                  color: #333;
                }
                .other {
                  color: #aeaeae;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                }
                .mv{
                  position: absolute;
                  right:0px;
                  top: 0;
                  width: 23px;
                  height: 17px;
                  background: url(${require('@/assets/img/sprite_table.png').default})
                  no-repeat;
                  background-position: 0 -151px;
                  cursor: pointer;
                  :hover{
                    background-position: -30px -151px;
                  }
                }
              }
            }
            .songTime{
              width: 70px;
              .timer{
                color: #666;
              }
              .billof{
                display: none;
                margin-right: -10px;
                span{
                  display: flex;
                  width: 18px;
                  height: 16px;
                  cursor: pointer;
                  background: url(${require("@/assets/img/sprite_table.png").default})no-repeat;
                  margin-left: 4px;
                }
                .add{
                  width: 13px;
                  height: 13px;
                  background: url(${require("@/assets/img/sprite_icon2.png").default})no-repeat;
                  background-position: 0 -700px;
                  margin-left: 0;
                  :hover{
                    background-position: -22px -700px;
                  }
                }
                .collect{
                  background-position: 0 -174px;
                  :hover{
                    background-position: -20px -174px;
                  }
                }
                .share{
                  background-position: 0 -195px;
                  :hover{
                    background-position: -20px -195px;
                  }
                }
                .down{
                  background-position: -81px -174px;
                  :hover{
                    background-position: -104px -174px;
                  }
                }
              }
            }
            .singerName{
              width: 153px;
              white-space: nowrap;
              overflow: hidden;
              text-overflow:ellipsis;
            }
          }
          :hover .timer{
              display: none;
          }
          :hover .songTime .billof{
            display: flex;
          }
        }
        tr:nth-child(2n+1) {
          background-color: #f7f7f7;
        }
      }
    }
  }
`
