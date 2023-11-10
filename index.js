document.getElementById('my-form').addEventListener('submit', function (e) {
    e.preventDefault();
  
    let inputName = document.getElementById('name').value;
    let inputEmail = document.getElementById('email').value;
    let inputNumber = document.getElementById('phone').value;
  
    // Generate a unique key for the user data, for example, using a timestamp
    const userId = Date.now();
  
    let myObj = {
      name: inputName,
      email: inputEmail,
      phone: inputNumber
    };
  
    // let myObj_serialized = JSON.stringify(myObj);
  
    // // Store the user data with a unique key (user-specific identifier)
    // localStorage.setItem('user_' + userId, myObj_serialized);
    axios.post('https://crudcrud.com/api/feadf01677954c348b4c5051712b04a4/appointmentData', myObj)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      })
  });
  