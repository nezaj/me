export const updateLocation = (key, value) => {
  const currentPath = new URLSearchParams(window.location.search);
  currentPath.set(key, value);
  const newUrl = window.location.pathname + "?" + currentPath.toString();
  window.history.pushState(null, "", newUrl);
};

export const clearLocation = () => {
  const newUrl = window.location.pathname;
  window.history.pushState(null, "", newUrl);
};

export const deleteLocation = (key) => {
  const currentPath = new URLSearchParams(window.location.search);
  const newUrl = window.location.pathname + "?" + currentPath.toString();
  window.history.pushState(null, "", newUrl);
};
