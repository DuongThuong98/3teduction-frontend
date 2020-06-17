/* eslint-disable import/named */
/* eslint-disable import/no-named-as-default */
import { connect } from 'react-redux'
import { getAllTag, createTag, editTag, deleteTag } from '../../redux/actions/mockingTest.action'
import { getAllMajor } from '../../redux/actions/major.action'
import ManageMockingTest from './ManageMockingTestcomponent'

const mapStateToProps = state => ({
  data: state.mockingTest.data,
  dataMajor: state.major.data,
  loadingData: state.major.loading,
  length: state.mockingTest.length,
})

const mapDispatchToProps = dispatch => ({
  getAllMajor: () => dispatch(getAllMajor()),
  getAllTag: data => dispatch(getAllTag(data)),
  createTag: data => dispatch(createTag(data)),
  editTag: data => dispatch(editTag(data)),
  deleteTag: data => dispatch(deleteTag(data)),
})

const ManageMockingTestContainer = connect(mapStateToProps, mapDispatchToProps)(ManageMockingTest)

export default ManageMockingTestContainer
