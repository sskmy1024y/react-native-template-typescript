// Define screens. The key is a screen name. The value is a parameter passed to a navigation object.
export type Screens = {
  home: {};
  detail: {};
  profile: {};
};

// Define your navigators.
export type Navigators = {
  Root: Navigatable<'MainTab' | 'detail'>;
  MainTab: Navigatable<'home' | 'profile'>;
};

export type NavigationParams = Screens & Navigators;

type Navigatable<T extends keyof NavigationParams> = T extends keyof Screens
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

export type TypedNavigatorParams<T extends keyof Navigators> = Pick<
  NavigationParams,
  NavigationParams[T]['screen']
>;
