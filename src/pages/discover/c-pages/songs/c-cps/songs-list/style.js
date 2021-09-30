import styled from 'styled-components'

export const SongListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-right: -30px;
  .SongsCategroyCover {
    margin: 20px 30px 20px 0;
    .TilteLInk {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`
export const PageWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`
