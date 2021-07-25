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


export const ExpenseItemStyled = styled.li`

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

export const NewExpenseStyled = styled.div`

    & {
        background-color: ${props => props.theme.colors.warning};
        padding: 1rem;
        margin: 2rem auto;
        width: 50rem;
        max-width: 95%;
        text-align: center;
        ${Card}
    }
    
    & button {
        font: inherit;
        cursor: pointer;
        padding: 1rem 2rem;
        border: 1px solid ${props => props.theme.colors.primary};
        background-color: ${props => props.theme.colors.primary};
        color: white;
        margin-right: 1rem;
        ${Card}
    }
    
    & button:hover,
    & button:active {
        background-color: ${props => props.theme.colors.secondary};
    }
    
    & button.alternative {
        color: #220131;
        border-color: transparent;
        background-color: transparent;
    }
    
    & button.alternative:hover,
    & button.alternative:active {
        background-color: #ddb3f8;
    }

`

export const NewExpenseFormStyled = styled.div`

    & .controls {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        margin-bottom: 1rem;
        text-align: left;
    }
    
    & .control label {
        font-weight: bold;
        margin-bottom: 0.5rem;
        display: block;
    }
    
    & .control input {
        font: inherit;
        padding: 0.5rem;
        border: 1px solid #ccc;
        width: 20rem;
        max-width: 100%;
        outline: 0;
        ${Card}
    }
    
    & .actions {
        text-align: right;
    }

`

export const ExpensesFilterStyled = styled.section`

    & {
        color: black;
        padding: 0 1rem;
    }
    
    & .control {
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: space-between;
        margin: 1rem 0;
    }
    
    & label {
        font-weight: bold;
        margin-bottom: 0.5rem;
    }
    
    & select {
        font: inherit;
        padding: 0.5rem 3rem;
        font-weight: bold;
        border-radius: 6px;
        outline: 0;
    }

`

export const ChartStyled = styled.div`

    padding: 1rem;
    background-color: ${props => props.theme.colors.primary};
    text-align: center;
    display: flex;
    justify-content: space-around;
    height: 10rem;
    ${Card}

`

export const ChartBarStyled = styled.div`

& {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  & .inner {
    height: 100%;
    width: 100%;
    border: 1px solid white;
    border-radius: 12px;
    background-color: ${props => props.theme.colors.warning};
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
  
  & .fill {
    background-color: ${props => props.theme.colors.secondary};
    width: 100%;
    transition: all 0.3s ease-out;
  }
  
  & .label {
    font-weight: bold;
    font-size: 0.5rem;
    text-align: center;
  }

`