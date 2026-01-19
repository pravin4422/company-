export const trackLinkClick = (linkId, storageKey) => {
  const clicksKey = `${storageKey}_clicks`;
  const clicks = JSON.parse(localStorage.getItem(clicksKey) || '{}');
  clicks[linkId] = (clicks[linkId] || 0) + 1;
  localStorage.setItem(clicksKey, JSON.stringify(clicks));
};

export const sortLinksByClicks = (links, storageKey) => {
  const clicksKey = `${storageKey}_clicks`;
  const clicks = JSON.parse(localStorage.getItem(clicksKey) || '{}');
  return [...links].sort((a, b) => (clicks[b.id] || 0) - (clicks[a.id] || 0));
};
