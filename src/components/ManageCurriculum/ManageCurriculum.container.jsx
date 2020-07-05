/* eslint-disable import/named */
/* eslint-disable import/no-named-as-default */
import { connect } from 'react-redux'
import { getAllTag, createTag, editTag, deleteTag } from '../../redux/actions/response.action'
import { getAllMajor } from '../../redux/actions/course.action'
import { getAllTestDropdown } from '../../redux/actions/mockingTest.action'
import {  } from '../../redux/actions/video.action'
import ManageResponse from './ManageCurriculum.component'

const mapStateToProps = state => ({
  data: state.response.data,
  dataMajor: state.major.data,
  loadingData: state.major.loading,
  length: state.response.length,
  dataTest: state.mockingTest.dropdown
})

const mapDispatchToProps = dispatch => ({
  getAllMajor: () => dispatch(getAllMajor()),
  getAllTest: () => dispatch(getAllTestDropdown()),
  getAllTag: data => dispatch(getAllTag(data)),
  createTag: data => dispatch(createTag(data)),
  editTag: data => dispatch(editTag(data)),
  deleteTag: data => dispatch(deleteTag(data)),
})

const ManageResponseContainer = connect(mapStateToProps, mapDispatchToProps)(ManageResponse)

export default ManageResponseContainer
