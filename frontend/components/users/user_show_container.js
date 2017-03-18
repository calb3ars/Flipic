import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';
import UserShow from './user_show';

const mapStateToProps = (state, ownProps) => ({
  user: ownProps.params.userId
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchUser: id => dispatch(fetchUser(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserShow);
