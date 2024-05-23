document.addEventListener("DOMContentLoaded", function () {
  var activeTab = "table1"
  var img = document.getElementById("upload-image")
  img.onerror = function () {
    this.style.display = "none"
  }

  function openTab(evt, tabName) {
    var i, tabcontent, tablinks
    tabcontent = document.getElementsByClassName("tabcontent")
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none"
      tabcontent[i].classList.remove("active")
    }
    tablinks = document.getElementsByClassName("tablinks")
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "")
    }
    document.getElementById(tabName).style.display = "block"
    document.getElementById(tabName).classList.add("active")
    evt.currentTarget.className += " active"
    activeTab = tabName
  }

  document.querySelectorAll(".tablinks").forEach((button) => {
    button.addEventListener("click", function (e) {
      openTab(e, this.dataset.tab)
    })
  })

  // Initialize the first tab
  document.querySelector(".tablinks").click()
})
