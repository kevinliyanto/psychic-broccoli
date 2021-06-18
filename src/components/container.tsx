import { ReactElement } from 'react';
import { Item } from './item';
import { RandomItem } from './randomItem';

type ItemType = ReturnType<typeof RandomItem>;

type ChildrenType = ItemType | ItemType[];

interface Props {
  children: ChildrenType;
}

const Container = (props: Props): ReactElement<Props> => {
  const { children } = props;

  // This line acts as runtime type check
  const validChildren: ReactElement[] = [];
  if (Array.isArray(children)) {
    // Is ItemType
    children.forEach((value) => {
      if (value.type === Item) {
        validChildren.push(value);
      }
    });
  } else if (typeof children === `object`) {
    // Is ItemType
    if (children.type === Item) {
      validChildren.push(children);
    }
  }

  return <>{validChildren}</>;
};

const TestContainer = (): ReactElement => (
  <Container>
    {/* Appears */}
    <Item text="Test" />
    <Item text="something else" />
    {/* Don't show up even if there is no type check */}
    <RandomItem />
    <div>Testing purpose</div>

    {/* 
        The line below is an error on ESLint when uncommented,
        perhaps there is a way to do type checking with custom ESLint configuration (?)
        */}
    {/* eslint-disable-next-line react/void-dom-elements-no-children */}
    {/* <img
          alt="Google logo"
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
        >
          <p>Sample text</p>
        </img> */}
  </Container>
);

export { TestContainer };
