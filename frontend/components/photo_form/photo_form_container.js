import { connect } from 'react-redux';
import { createPhoto } from '../../actions/photo_actions';
import PhotoForm from './photo_form';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  createPhoto: (photo) => dispatch(createPhoto(photo))
});

export default connect(mapStateToProps, mapDispatchToProps)(PhotoForm);
