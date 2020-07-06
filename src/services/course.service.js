import apiUrl from './api-url'
// const apiUrl = 'https://tutor-back-end-admin.herokuapp.com'
export default class MajorService {
  static getAll = () => {
    const api = `${apiUrl}/courses/all`
    let status = 400

    // eslint-disable-next-line no-undef
    return fetch(api, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then(response => {
        status = response.status
        return response.json()
      })
      .then(result => {
        
        if (status === 200 || status === 304) {
          console.log("major: ", result)
          return result
        }
        throw new Error(result.message)
      })
      .catch(err => {
        throw new Error(err.message)
      })
  }
}
