import TagType from '../constant/response.types'

export const getAllTag = data => 
  {console.log('assign action' + {data}); return {
  type: TagType.GET_ALL_RESPONSE,
  payload: { data },
}}

export const getAllSuccess = ({ data, length }) => ({
  type: TagType.GET_ALL_SUCCESS_RESPONSE,
  payload: { data, length },
})

export const getAllFailure = message => ({
  type: TagType.GET_ALL_FAILURE_RESPONSE,
  payload: { message },
})

export const createTag = data => ({
  type: TagType.CREATE_RESPONSE,
  payload: { data },
})

export const createTagSuccess = ({ data }) => ({
  type: TagType.CREATE_SUCCESS_RESPONSE,
  payload: { data },
})

export const createTagFailure = message => ({
  type: TagType.CREATE_FAILURE_RESPONSE,
  payload: { message },
})

export const editTag = data => ({
  type: TagType.EDIT_RESPONSE,
  payload: { data },
})

export const editTagSuccess = ({ data }) => ({
  type: TagType.EDIT_SUCCESS_RESPONSE,
  payload: { data },
})

export const editTagFailure = message => ({
  type: TagType.EDIT_FAILURE_RESPONSE,
  payload: { message },
})

export const deleteTag = data => ({
  type: TagType.DELETE_RESPONSE,
  payload: { data },
})

export const deleteTagSuccess = ({ data }) => ({
  type: TagType.DELETE_SUCCESS_RESPONSE,
  payload: { data },
})

export const deleteTagFailure = message => ({
  type: TagType.DELETE_FAILURE_RESPONSE,
  payload: { message },
})
