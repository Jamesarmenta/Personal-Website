export const DEFAULT_ANIMATE_DURATION_MS = 400;

export const fadeOutElementSelector = (selectorQuery, cb = () => {}) => {
  const element = document.querySelector(selectorQuery);
  element.classList.add('fade-out');
  setTimeout(cb, DEFAULT_ANIMATE_DURATION_MS);
};

export const fadeOutAllElementsSelector = (selectorQueryAll, cb = () => {}) => {
  const elements = document.querySelectorAll(selectorQueryAll);
  elements.forEach((element) => {
    element.classList.add('fade-out');
  });
  setTimeout(cb, DEFAULT_ANIMATE_DURATION_MS);
};
