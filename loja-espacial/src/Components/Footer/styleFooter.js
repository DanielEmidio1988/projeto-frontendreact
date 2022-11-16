import styled from 'styled-components'

export const MainFooter = styled.div`
    background-color: #EAEAEA;  

    .footer-dados{
        display: flex;
        justify-content: space-between;
        height: 40vh;
        width: 96%;
        padding-top: 12px;
    }

    .footer-daniel{
        border-top: 1px solid #D4D4D4;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        height: 8vh;

        img{
            height: 30px;
            margin-left: 8px;
        }
    }
`

export const Imagem = styled.img` 
    min-height: 120px;
    height: 40vh; 
`