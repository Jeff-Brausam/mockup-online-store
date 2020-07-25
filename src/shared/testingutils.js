import React from "react";
import {Router} from "react-router-dom";
import {render} from "@testing-library/react";
import {createMemoryHistory} from "history";
import {combineReducers} from "redux";

function renderWithRouter(ui, {route = "/", ...renderOptions} = {}) {
  const history = createMemoryHistory({initialEntries: [route]});
  const utils = render(<Router history={history}>{ui}</Router>, renderOptions);
  return {
    ...utils,
    history,
  };
}

export {renderWithRouter};
