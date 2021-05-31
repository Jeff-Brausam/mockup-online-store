import React from "react";
import {render} from "@testing-library/react";
import StoreItems from "../StoreItems";

test("<StoreItems /> renders a component with storeItems nested inside of it", () => {
  const dummyItem = [
    {
      name: "testItem",
      imgURL: "testImgURL",
      itemID: "testId",
      price: 1234,
    },
    {
      name: "testItem2",
      imgURL: "testImgURL2",
      itemID: "testId2",
      price: 1234,
    },
  ];
  const stockedStatus = [true];

  const {container, getByTestId} = render(
    <StoreItems items={dummyItem} stockedStatus={stockedStatus} />,
  );

  const firstItem = getByTestId(dummyItem[0].name);
  const secondItem = getByTestId(dummyItem[1].name);

  expect(container.children).toHaveLength(1);
  expect(container.children[0].firstChild).toEqual(firstItem);
  expect(container.children[0].firstChild.nextSibling).toEqual(secondItem);
});
