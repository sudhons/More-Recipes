const form = document.getElementById('signup');

// sign up user
const createUser  = (e) => {
  e.preventDefault();
  const userData = Object.create(null);
 
  userData.firstName = form.firstName.value;
  userData.lastName = form.lastName.value;
  userData.username = form.username.value;
  userData.email = form.email.value;
  userData.userImage = form.userImage.value;
  userData.password = form.password.value;
 
  fetch('https://more-recipes-25.herokuapp.com/api/v1/users/signup', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData)
  }).then((res) => {
    sessionStorage.setItem('more-recipe-token', res.data.user.token);
    window.location.href = '/';
    })
    .catch((err) => console.log(err))
};

form.addEventListener('submit', createUser, false);
