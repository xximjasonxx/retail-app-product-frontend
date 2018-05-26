
import React from 'react';
import AppBar from 'material-ui/AppBar';
import Snackbar from 'material-ui/Snackbar';
import Divider from 'material-ui/Divider';
import { ConnectedRouter } from 'react-router-redux';
import { Route, Switch } from 'react-router';

import './HomeComponent.css';
import history from '../../configureHistory';
import AnonymousViewComponent from '../AnonymousView/AnonymousViewComponent';
import TitleView from '../TitleView/TitleView';
import ProductList from '../ProductList/ProductList';
import ProductDetail from '../ProductDetail/ProductDetail';

class HomeComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            snackMessageOpen: false,
            snackMessage: ''
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.showSnackMessage !== this.state.snackMessageOpen) {
            this.setState({
                snackMessageOpen: nextProps.showSnackMessage,
                snackMessage: nextProps.snackMessage
            });
        }
    }

    closeSnackbar = () => {
        this.setState({
            snackMessageOpen: false
        });
        this.props.hideSnackbar();
    }

    render() {
        const { isLoggedIn, performLogin, currentUser } = this.props;

        return (
            <div className="app-container">
                <AppBar
                    title="Retail Product Admin"
                />

                <div className="home-container">
                    {!isLoggedIn && <AnonymousViewComponent performLogin={performLogin} />}
                    {isLoggedIn &&
                    <div className="main-content-container">
                        <TitleView firstName={currentUser.firstname} role={currentUser.role} />
                        <Divider />
                        <ConnectedRouter history={history}>
                            <div className="routed-content-container">
                                <Switch>
                                    <Route exact path="/edit/:product_id" component={ProductDetail} />
                                    <Route exact path="/add" component={ProductDetail} />
                                    <Route path="/" component={ProductList} />
                                </Switch>
                            </div>
                        </ConnectedRouter>
                    </div>
                    }
                </div>

                

                <Snackbar
                    open={this.state.snackMessageOpen}
                    message={this.state.snackMessage}
                    autoHideDuration={4000}
                    onRequestClose={this.closeSnackbar}
                />
            </div>
        );
    }
    
}

export default HomeComponent;