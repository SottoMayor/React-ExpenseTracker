import styled from 'styled-components';

export const ExpenseItemStyled = styled.article`

    &{
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
        padding: 0.5rem;
        margin: 1rem 0;
        border-radius: 12px;
        background-color: ${props => props.theme.colors.primary};
    }

    &  .title{
        color: white;
        font-size: 1rem;
        flex: 1;
        margin: 0 1rem;
        color: white;
    }

    &  .price{
        font-size: 1rem;
        font-weight: bold;
        color: white;
        background-color: ${props => props.theme.colors.secondary};
        border: 1px solid white;
        padding: 0.5rem;
        border-radius: 12px;
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
        color: white;
        display: flex;
        flex-direction: column;
        width: 5.5rem;
        height: 5.5rem;
        border: 1px solid #ececec;
        background-color: ${props => props.theme.colors.secondary};
        border-radius: 12px;
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
    
    
