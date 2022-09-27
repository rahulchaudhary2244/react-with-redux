import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from './state/index';

function App() {
    const accountState = useSelector((state) => state.account);
    const dispatch = useDispatch();

    const { depositMoney, withdrawMoney } = bindActionCreators(
        actionCreators,
        dispatch
    );

    return (
        <div className="App">
            <h1>{accountState}</h1>
            <button
                onClick={() => depositMoney(100)}
            >{`Deposit (+100)`}</button>
            <button
                onClick={() => withdrawMoney(100)}
            >{`Withdraw (-100)`}</button>
            <h6>Redux Learning</h6>
        </div>
    );
}

export default App;
