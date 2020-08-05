document.querySelector("#add-time").addEventListener('click', clonefield);

//execute a action
function clonefield() {
 
    // duplicate fields
 const newFieldContainer =  document.querySelector(".schedule-item").cloneNode(true)

      // take the fields

      const fields =  newFieldContainer.querySelectorAll('input')

      // for every field, clean 
      fields.forEach(function(field) {
          field.value = ""
      })
     
      //add new element to page
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}

