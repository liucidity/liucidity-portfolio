
export default function smoothScrollTo(e, target) {
  e.preventDefault();
  const element = document.getElementById(target);
  console.log(element)
  element.scrollIntoView({
    block: 'start',
    behavior: 'smooth'
  })
};