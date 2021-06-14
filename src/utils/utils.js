export const isDesktopFunc = () => {
  // eslint-disable-next-line no-restricted-globals
  return innerWidth > 769;
};

export const isMobileFunc = () => {
  return !isDesktopFunc();
};
