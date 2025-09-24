const insert = document.querySelector('#key-table')

window.addEventListener("keydown",(e)=>{
      insert.innerHTML = `
      <table border=1>
  <tr>
    <th>Key</th>
    <th>KeyCode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key === " " ? "Space" : e.key }</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
  </tr>
</table>
</div>`
})