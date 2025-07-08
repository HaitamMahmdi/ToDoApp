export function handleClickOutside(elment, callBack) {
  let active = false;

  const handler = (e) => {
    if (!active) return;
    if (elment.value && !elment.value.contains(e.target)) {
      callBack();
    }
  };
  setTimeout(() => {
    active = true;
  }, 0);
  document.addEventListener("click", handler);

  return () => {
    document.removeEventListener("click", handler);
  };
}
