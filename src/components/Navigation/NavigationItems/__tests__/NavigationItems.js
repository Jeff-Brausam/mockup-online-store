import React from "react";
import {Provider} from "react-redux";
import {renderWithRouter} from "../../../../shared/testingutils";
import configureStore from "redux-mock-store";

import NavigationItems from "../NavigationItems";

describe("<NavigationItems /> unit test", () => {
  const mockStore = configureStore();
  const initState = {};

  beforeEach(() => mockStore(initState));

  it("Navigation when not authenticated should display the links 'Store', 'Cart', 'SignUp'", () => {
    const testState = {
      onlineStore: {
        cart: [],
      },
      auth: {
        token: null,
      },
    };
    const store = mockStore(testState);
    const {container} = renderWithRouter(
      <Provider store={store}>
        <NavigationItems />
      </Provider>,
    );
    expect(container.textContent).toContain("Store");
    expect(container.textContent).toContain("Cart");
    expect(container.textContent).toContain("SignUp");
  });

  it("Navigation when authenticated should display the links 'Store', 'Orders', 'Cart', 'Logout'", () => {
    const testState = {
      onlineStore: {
        cart: [],
      },
      auth: {
        token: true,
      },
    };
    const store = mockStore(testState);
    const {container} = renderWithRouter(
      <Provider store={store}>
        <NavigationItems />
      </Provider>,
    );
    expect(container.textContent).toContain("Store");
    expect(container.textContent).toContain("Orders");
    expect(container.textContent).toContain("Cart");
    expect(container.textContent).toContain("Logout");
  });
});
