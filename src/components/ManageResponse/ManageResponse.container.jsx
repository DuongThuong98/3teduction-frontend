/* eslint-disable import/named */
/* eslint-disable import/no-named-as-default */
import { connect } from 'react-redux'
import { getAllTag, createTag, editTag, deleteTag } from '../../redux/actions/response.action'
import { getAllMajor } from '../../redux/actions/major.action'
import ManageResponse from './ManageResponse.component'

const mapStateToProps = state => ({
  data: state.response.data,
  dataMajor: state.major.data,
  loadingData: state.major.loading,
  length: state.response.length,
})

const mapDispatchToProps = dispatch => ({
  getAllMajor: () => dispatch(getAllMajor()),
  getAllTag: data => dispatch(getAllTag(data)),
  createTag: data => dispatch(createTag(data)),
  editTag: data => dispatch(editTag(data)),
  deleteTag: data => dispatch(deleteTag(data)),
})

const ManageResponseContainer = connect(mapStateToProps, mapDispatchToProps)(ManageResponse)

export default ManageResponseContainer
