export class UserServiceClient {


  // https://backendassignment5.herokuapp.com/


  findUserById(userId) {
    // return fetch('https://backendassignment5.herokuapp.com/api/user/' + userId)
    return fetch('https://backendassignment5.herokuapp.com/api/user/' + userId)
      .then(response => response.json());
  }


  findUsers() {
    return fetch('https://backendassignment5.herokuapp.com/api/user').then(response => response.json());
    // return fetch('https://backendassignment5.herokuapp.com/api/user').then(response => response.json());
  }


  login(username, password) {
    const credentials = {
      username: username,
      password: password
    };
    // return fetch('https://backendassignment5.herokuapp.com/api/login', {
    return fetch('https://backendassignment5.herokuapp.com/api/login', {
      method: 'post',
      body: JSON.stringify(credentials),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    });
  }

  logout() {
    // return fetch('https://backendassignment5.herokuapp.com/api/logout', {
    return fetch('https://backendassignment5.herokuapp.com/api/logout', {
      method: 'post',
      credentials: 'include'
    });

  }

  profile() {
    // return fetch('https://backendassignment5.herokuapp.com/api/profile',
    return fetch('https://backendassignment5.herokuapp.com/api/profile',
      {
        credentials: 'include', // include, same-origin, *omit
      })
      .then(response => response.json());
  }

  createUser(username, password) {
    const user = {
      username: username,
      password: password,
    };
    // return fetch('https://backendassignment5.herokuapp.com/api/user', {
    return fetch('https://backendassignment5.herokuapp.com/api/user', {
      body: JSON.stringify(user),
      credentials: 'include', // include, same-origin, *omit
      method: 'post',
      headers: {
        'content-type': 'application/json'
      }
    });
  }

  updateUser(user) {
    // return fetch('https://backendassignment5.herokuapp.com/api/update', {
    return fetch('https://backendassignment5.herokuapp.com/api/update', {
      body: JSON.stringify(user),
      method: 'put',
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json());
  }



}
