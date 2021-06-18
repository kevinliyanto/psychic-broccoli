import React, { ReactElement } from 'react';

export interface ItemProp {
  text: string;
}

const Item = (props: ItemProp): ReactElement => {
  const { text } = props;
  return <a>this is {text}</a>;
};
export { Item };
