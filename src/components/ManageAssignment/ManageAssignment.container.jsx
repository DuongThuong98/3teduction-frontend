/* eslint-disable import/named */
/* eslint-disable import/no-named-as-default */
import { connect } from 'react-redux'
import { getAllTag, createTag, editTag, deleteTag } from '../../redux/actions/assignment.action'
import { getAllMajor } from '../../redux/actions/course.action'
import ManagerTagSkill from './ManageAssignment.component'

const mapStateToProps = state => ({
  data: state.assignment.data,
  dataMajor: state.major.data,
  loadingData: state.major.loading,
  length: state.assignment.length,
})

const mapDispatchToProps = dispatch => ({
  getAllMajor: () => dispatch(getAllMajor()),
  getAllTag: data => dispatch(getAllTag(data)),
  createTag: data => dispatch(createTag(data)),
  editTag: data => dispatch(editTag(data)),
  deleteTag: data => dispatch(deleteTag(data)),
})

const ManagerTagSkillContainer = connect(mapStateToProps, mapDispatchToProps)(ManagerTagSkill)

export default ManagerTagSkillContainer
