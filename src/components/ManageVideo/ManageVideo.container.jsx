/* eslint-disable import/named */
/* eslint-disable import/no-named-as-default */
import { connect } from 'react-redux'
import { getAllTag, createTag, editTag, deleteTag } from '../../redux/actions/video.action'
import { getAllMajor } from '../../redux/actions/course.action'
import ManageVideo from './ManageVideo.component'

const mapStateToProps = state => ({
  data: state.video.data,
  dataMajor: state.major.data,
  loadingData: state.major.loading,
  length: state.video.length,
})

const mapDispatchToProps = dispatch => ({
  getAllMajor: () => dispatch(getAllMajor()),
  getAllTag: data => dispatch(getAllTag(data)),
  createTag: data => dispatch(createTag(data)),
  editTag: data => dispatch(editTag(data)),
  deleteTag: data => dispatch(deleteTag(data)),
})

const ManageVideoContainer = connect(mapStateToProps, mapDispatchToProps)(ManageVideo)

export default ManageVideoContainer
