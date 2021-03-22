import styled from "styled-components";

export const CollectionItemContainer = styled.div`
    width: 22%;
    min-width: 170px;
    display: flex;
    flex-direction: column;
    height: 350px;
    align-items: center;
    position: relative;
    margin: 10px 0 10px 10px;

    &:hover {
        .image {
            opacity: 0.8;
        }

        .custom-button {
            opacity: 0.85;
            display: flex;
        }
    }
`;

export const Image = styled.div`
    width: 100%;
    height: 95%;
    background-size: cover;
    background-position: center;
    margin-bottom: 5px;
    transition: opacity 0.2s ease-in;
`;

export const CollectionFooter = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: space-between;
    font-size: 18px;
`;

export const Name = styled.span`
    width: 90%;
    margin-bottom: 15px;
`;

export const Price = styled.span`
    width: 10%;
`;
