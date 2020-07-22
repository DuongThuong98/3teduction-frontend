import apiUrl from './api-url'
import { authHeader } from "../utils/authHeader";
// const apiUrl = 'http://localhost:8080'

export default class AssignmentService {
  static getAll = data => {
    const { limit, offset } = data
    console.log('assign service')
    const api = `${apiUrl}/video/${limit}/${offset}`
    let status = 400

    // eslint-disable-next-line no-undef
    return fetch(api, {
      method: 'GET',
      headers: {
        'Authorization': authHeader().Authorization,
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

  static getAllDropdown = () => {
  
    console.log('video service')
    const api = `${apiUrl}/video/all`
    let status = 400

    // eslint-disable-next-line no-undef
    return fetch(api, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        'Authorization': authHeader().Authorization,
      },
    })
      .then(response => {
        status = response.status
        console.log(status)
        return response.json()
      })
      .then(result => {
        if (status === 200) {
          console.log("dropdown: ",result)
          return result
        }
        throw new Error(result.message)
      })
      .catch(err => {
        throw new Error(err.message)
      })
  }

  static createTag = tag => {
    const api = `${apiUrl}/video/upload`
    let status = 400
    console.log("service: ",tag.originFileObj)
    
    let data= new FormData()
    data.append('file', tag.originFileObj)
    
    // eslint-disable-next-line no-undef
    return fetch(api, {
      method: 'POST',
      body: data,
      headers: {
        'Authorization': authHeader().Authorization,
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
    const api = `${apiUrl}/responses/${tag._id}`
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
    const api = `${apiUrl}/video/${tag._id}`
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
