import styled from 'styled-components';

export const ContainerCheckoutStyled = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 2rem 5rem;
    max-width: 1400px;
    margin:auto;
    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        width:100%;
        padding:2rem;
    }
`;