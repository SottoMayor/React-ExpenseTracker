import styled, { css } from 'styled-components';

// Reuseble styles 

export const Card = css`

        border-radius: 12px;
        box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);

`

export const BoxInformation = css`

    color: white;
    background-color: ${props => props.theme.colors.secondary};
    border: 1px solid white;
    border-radius: 12px;

`

// Components Styles


export const ExpenseItemStyled = styled.article`

    &{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.5rem;
        margin: 1rem 0;
        background-color: ${props => props.theme.colors.primary};
        ${Card}
    }

    &  .title{
        color: white;
        font-size: 1rem;
        flex: 1;
        margin: 0 1rem;
    }

    &  .price{
        ${BoxInformation}
        font-size: 1rem;
        font-weight: bold;
        padding: 0.5rem;
    }

    @media (min-width: 580px){
    
        & .title {
            font-size: 1.25rem;
        }
    
        & .price {
            font-size: 1.25rem;
            padding: 0.5rem 1.5rem;
        }
    }   

`
export const ExpenseDateStyled = styled.section`

    & {
        ${BoxInformation}
        display: flex;
        flex-direction: column;
        width: 5.5rem;
        height: 5.5rem;
        align-items: center;
        justify-content: center;
    }
    

    & .month {
        font-size: 0.75rem;
        font-weight: bold;
    }

    & .year {
        font-size: 0.75rem;
    }

    & .day {
        font-size: 1.5rem;
        font-weight: bold;
    }

`
    
export const ExpensesStyled = styled.section`

    & {
        padding: 1rem;
        background-color: ${ props => props.theme.colors.warning };
        margin: 2rem auto;
        width: 50rem;
        max-width: 95%;
        ${Card}
    }
    

`
