export const isDesktopFunc = () => {
  // eslint-disable-next-line no-restricted-globals
  return typeof window === 'undefined' || window.innerWidth > 769;
};

export const isMobileFunc = () => {
  return !isDesktopFunc();
};
