// App component와 connect
// redux 연결
// Container component로 상태 관리 역할

import { connect } from 'react-redux';
import App from '../components/App';

const mapStateToProps = state => {

    return {
    };
}

const mapDispatchToProps = dispatch => ({

});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);