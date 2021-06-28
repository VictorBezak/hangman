const offlineOption = document.getElementById('offline-btn')
const onlineOption = document.getElementById('online-btn')


onlineOption.addEventListener("click", () => {
  let notice = document.createElement("aside");
  notice.id = "notice";
  notice.textContent = "still in development";


  onlineOption.appendChild(notice)
  setTimeout(() => notice.remove(), 2500)
})