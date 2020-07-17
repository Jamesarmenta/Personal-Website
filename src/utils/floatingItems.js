function _shuffle(a) {
  // eslint-disable-next-line no-plusplus
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    // eslint-disable-next-line no-param-reassign
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export const shuffleFloatingItems = () => {
  const floatingItems = [...document.querySelectorAll('.floating-item')];

  // 16 options
  const gridOptionsLg = [
    [0, 0],
    [0, 25],
    [0, 50],
    [0, 75],
    [25, 0],
    [25, 25],
    [25, 50],
    [25, 75],
    [50, 0],
    [50, 25],
    [50, 50],
    [50, 75],
    [75, 0],
    [75, 25],
    [75, 50],
    [75, 75],
  ];

  // 10 options total
  const gridOptionsSm = [
    [0, 0],
    [0, 20],
    [33, 40], // inject funkiness
    [0, 60],
    [0, 80],
    [50, 0],
    [50, 20],
    [50, 60],
    [50, 80],
  ];

  const gridToUse = (window.innerHeight > window.innerWidth) ? gridOptionsSm : gridOptionsLg;

  const shuffledOptions = _shuffle(gridToUse);

  floatingItems.forEach((item) => {
    const [x, y] = shuffledOptions.pop();
    const jitter = Math.floor(Math.random() * 4) - 2;
    // eslint-disable-next-line no-param-reassign
    item.style.left = `${x + jitter}%`;
    // eslint-disable-next-line no-param-reassign
    item.style.top = `${y + jitter}%`;
  });
};
