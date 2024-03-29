import styled, { css } from "styled-components";

const SpanStyle = css`
    width: 23%;
`;

export const CheckoutItemContainer = styled.div`
    width: 100%;
    display: flex;
    min-height: 100px;
    border-bottom: 1px solid darkgray;
    padding: 15px 0;
    font-size: 20px;
    align-items: center;
`;

export const ImageContainer = styled.div`
    width: 23%;
    padding-right: 15px;
`;

export const Img = styled.img`
    width: 100%;
    height: 100%;
`;

export const Name = styled.span`
    ${SpanStyle}
`;

export const Quantity = styled.span`
    ${SpanStyle}
    display: flex;
`;

export const Price = styled.span`
    ${SpanStyle}
`;

export const Arrow = styled.div`
    cursor: pointer;
`;

export const Value = styled.div`
    margin: 0 10px;
`;

export const RemoveButton = styled.div`
    padding-left: 12px;
    cursor: pointer;
`;
