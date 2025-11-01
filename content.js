function removeDonationDiv() {
  const el = document.querySelector("div.bottomdiv#footer");
  if (el) {
    el.remove();
    console.log("[Extension] Donation popup removed.");
  }
}

removeDonationDiv();

const observer = new MutationObserver(removeDonationDiv);
observer.observe(document.body, { childList: true, subtree: true });
