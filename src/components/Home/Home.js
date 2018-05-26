
import { connect } from 'react-redux';
import HomeComponent from './HomeComponent';
import * as userActions from '../../redux/actions/userActions';
import * as generalActions from '../../redux/actions/generalActions';

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.userReducer.currentUser !== null,
        currentUser: state.userReducer.currentUser,
        showSnackMessage: state.generalReducer.snackMessageVisible,
        snackMessage: state.generalReducer.snackMessage || ''
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        performLogin: (username, password) => {
            dispatch(userActions.loginStartAction(username, password));
        },
        hideSnackbar: () => {
            dispatch(generalActions.hideSnackbarAction());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent);