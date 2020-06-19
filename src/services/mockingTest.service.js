import apiUrl from './api-url'

// const apiUrl = 'http://localhost:8080'

export default class AssignmentService {
  static getAll = data => {
    const { limit, offset } = data
    console.log('assign service')
    const api = `${apiUrl}/mocking-tests/${limit}/${offset}`
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
        console.log(status)
        return response.json()
      })
      .then(result => {
        if (status === 200) {
          console.log(result)
          return result
        }
        throw new Error(result.message)
      })
      .catch(err => {
        throw new Error(err.message)
      })
  }

  static createTag = tag => {
    const api = `${apiUrl}/mocking-tests/`
    let status = 400

    // eslint-disable-next-line no-undef
    return fetch(api, {
      method: 'POST',
      body: JSON.stringify(tag),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then(response => {
        status = response.status
        return response.json()
      })
      .then(result => {
        if (status === 200) {
          console.log(result)
          return result
        }

        throw new Error(result.message)
      })
      .catch(err => {
        throw new Error(err.message)
      })
  }

  static editTag = tag => {
    const api = `${apiUrl}/mocking-tests/${tag._id}`
    let status = 400

    // eslint-disable-next-line no-undef
    return fetch(api, {
      method: 'PUT',
      body: JSON.stringify(tag),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then(response => {
        status = response.status
        return response.json()
      })
      .then(result => {
        if (status === 200) {
          return result
        }

        throw new Error(result.message)
      })
      .catch(err => {
        throw new Error(err.message)
      })
  }

  static deleteTag = tag => {
    const api = `${apiUrl}/mocking-tests/${tag._id}`
    let status = 400

    // eslint-disable-next-line no-undef
    return fetch(api, {
      method: 'DELETE',
      body: JSON.stringify(tag),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then(response => {
        status = response.status
        return response.json()
      })
      .then(result => {
        if (status === 200) {
          return result
        }

        throw new Error(result.message)
      })
      .catch(err => {
        throw new Error(err.message)
      })
  }
}
