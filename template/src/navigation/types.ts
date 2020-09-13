// Define screens. The key is a screen name. The value is a parameter passed to a navigation object.
export type Screens = {
  Home: {};
  Detail: {};
};

// Define your navigators.
export type Navigators = {};

type Navigatable<
  T extends keyof (Screens & Navigators)
> = T extends keyof Screens
  ? ScreenParams<T>
  : T extends keyof Navigators
  ? NavigatorParams<T>
  : never;

type ScreenParams<T extends keyof Screens> = {
  screen: T;
  params: Screens[T];
};

type NavigatorParams<T extends keyof Navigators> = {
  screen: T;
  params: Navigators[T];
};

export type NavigationParams = Screens & Navigators;

export type TypedNavigatorParams<T extends keyof Navigators> = Pick<
  NavigationParams,
  NavigationParams[T]['screen']
>;
