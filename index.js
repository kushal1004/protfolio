var tablinks = document.getElementsByClassName('tab-links')
var tabcontents = document.getElementsByClassName('tab-contents')
var currentActiveTab = null // at first it is null

function opentab (event, tabname) {
  if (currentActiveTab === tabname) {
    for (let tablink of tablinks) {
      tablink.classList.remove('active-link')
    }
    for (let tabcontent of tabcontents) {
      tabcontent.classList.remove('active-tab')
    }
    currentActiveTab = null // reset
    return
  }
  //else
  for (let tablink of tablinks) {
    tablink.classList.remove('active-link')
  }
  for (let tabcontent of tabcontents) {
    tabcontent.classList.remove('active-tab')
  }
  event.currentTarget.classList.add('active-link')
  document.getElementById(tabname).classList.add('active-tab')
  currentActiveTab = tabname
}
const scriptURL =
  'https://script.google.com/macros/s/AKfycbwtCwNRy8-JLHOtnbuHB_4QP8qsK81TWu_Lc63DSqaqT9BIk9OQlsP-4ShfM26wxb4Lbw/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById('msg')
form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
      msg.innerHTML = 'Message Sent Successfully'
      setTimeout(function () {
        msg.innerHTML = ''
      }, 5000)
      form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})
