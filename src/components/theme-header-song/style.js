import styled from 'styled-components'

export const HeaderSongWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 35px;
    color: #666;
    border-bottom: 2px solid #c20c0c;
    .songTilte{
        display: flex;
        align-items: flex-end;
        h3{
            font-size: 20px;
            color: #333;
        }
        span{
            padding-left: 20px;
            padding-bottom: 3px;
        }
    }
    .PlayNum{
        i{
            color: #c20c0c;
        }
    }
`