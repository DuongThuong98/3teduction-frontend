import TagType from '../constant/video.types'

export const getAllTag = data => 
  {console.log('assign action' + {data}); return {
  type: TagType.GET_ALL_VIDEO,
  payload: { data },
}}

export const getAllSuccess = ({ data, length }) => ({
  type: TagType.GET_ALL_SUCCESS_VIDEO,
  payload: { data, length },
})

export const getAllFailure = message => ({
  type: TagType.GET_ALL_FAILURE_VIDEO,
  payload: { message },
})

export const getAllVideoDropdown = () => ({
  type: TagType.GET_ALL_VIDEO_DROPDOWN
})

export const getAllVideoDropdownSuccess = ( data ) => {
  console.log("video action: ",data)
  return {
  type: TagType.GET_ALL_SUCCESS_VIDEO_DROPDOWN,
  payload:  data ,
}}

export const createTag = data => ({
  type: TagType.CREATE_VIDEO,
  payload: { data },
})

export const createTagSuccess = ({ data }) => ({
  type: TagType.CREATE_SUCCESS_VIDEO,
  payload: { data },
})

export const createTagFailure = message => ({
  type: TagType.CREATE_FAILURE_VIDEO,
  payload: { message },
})

export const editTag = data => ({
  type: TagType.EDIT_VIDEO,
  payload: { data },
})

export const editTagSuccess = ({ data }) => ({
  type: TagType.EDIT_SUCCESS_VIDEO,
  payload: { data },
})

export const editTagFailure = message => ({
  type: TagType.EDIT_FAILURE_VIDEO,
  payload: { message },
})

export const deleteTag = data => ({
  type: TagType.DELETE_VIDEO,
  payload: { data },
})

export const deleteTagSuccess = ({ data }) => ({
  type: TagType.DELETE_SUCCESS_VIDEO,
  payload: { data },
})

export const deleteTagFailure = message => ({
  type: TagType.DELETE_FAILURE_VIDEO,
  payload: { message },
})
