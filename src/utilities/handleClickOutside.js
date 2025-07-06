export function handleClickOutside(elment, callBack) {
  let active = false;

  const handler = (e) => {
    if (!active) return;
    if (elment.value && !elment.value.contains(e.target)) {
      console.log(elment.value, `elment`);
      console.log(e.target, `val`);
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
