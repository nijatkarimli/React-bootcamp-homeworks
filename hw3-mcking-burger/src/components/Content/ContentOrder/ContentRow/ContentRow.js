import React from "react";
import { Wrapper, InlineItem, DecBtn, IncBtn } from "./ContentRow.styles";

const ContentRow = ({ id, name, price, qty, handleClick }) => {
  return (
    <Wrapper>
      <InlineItem>{name}</InlineItem>
      <InlineItem>(${Number(price).toFixed(2)}):</InlineItem>
      <InlineItem>
        <DecBtn id={`${id}-`} onClick={handleClick(id)}>
          -
        </DecBtn>
      </InlineItem>
      <InlineItem>{qty}</InlineItem>
      <InlineItem>
        <IncBtn id={`${id}+`} onClick={handleClick(id)}>
          +
        </IncBtn>
      </InlineItem>
      <InlineItem>Total Price: ${Number(qty * price).toFixed(2)}</InlineItem>
    </Wrapper>
  );
};

export default ContentRow;
