import React, { useReducer } from 'react';

import TotalDisplay from './components/TotalDisplay.jsx';
import CalcButton from './components/CalcButton.jsx';
import reducer, { initialState } from './store/reducers.jsx';
import {
  APPLY_NUMBER,
  CHANGE_OPERATION,
  applyNumber,
  changeOperation,
  clearDisplay,
  hesaplayici,
  memoryAdd,
  memoryClear,
  memoryRecall,
  typeToScreen,
} from './store/actions.jsx';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleClick = (event) => {
    dispatch(typeToScreen(event.target.value));
  };

  const handleChange = (event) => {
    dispatch(changeOperation(event.target.value));
  };

  const reset = () => {
    dispatch(clearDisplay());
  };

  const hesap = (operation) => {
    dispatch(hesaplayici(operation));
  };

  const handleMemoryAdd = () => {
    dispatch(memoryAdd());
  };
  const handleMemoryClear = () => {
    dispatch(memoryClear());
  };
  const handleMemoryRecall = () => {
    dispatch(memoryRecall());
  };

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand"> Reducer Challenge</span>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            <TotalDisplay value={state.total} />
            <div className="row details">
              <span id="operation">
                <b>Operation:</b> {state.operation}
              </span>
              <span id="memory">
                <b>Memory:</b> {state.memory}
              </span>
            </div>
            <div className="row">
              <CalcButton value={'M+'} onClick={handleMemoryAdd} />
              <CalcButton value={'MR'} onClick={handleMemoryRecall} />
              <CalcButton value={'MC'} onClick={handleMemoryClear} />
            </div>
            <div className="row">
              <CalcButton value={1} onClick={handleClick} />
              <CalcButton value={2} onClick={handleClick} />
              <CalcButton value={3} onClick={handleClick} />
            </div>

            <div className="row">
              <CalcButton value={4} onClick={handleClick} />
              <CalcButton value={5} onClick={handleClick} />
              <CalcButton value={6} onClick={handleClick} />
            </div>

            <div className="row">
              <CalcButton value={7} onClick={handleClick} />
              <CalcButton value={8} onClick={handleClick} />
              <CalcButton value={9} onClick={handleClick} />
            </div>
            <div className="row">
              <CalcButton value={'+'} onClick={handleChange} />
              <CalcButton value={0} />
              <CalcButton value={'-'} onClick={handleChange} />
            </div>
            <div className="row">
              <CalcButton value={'*'} onClick={handleChange} />
              <CalcButton value={'/'} onClick={handleChange} />
              <CalcButton value={'CE'} onClick={() => reset('CE')} />
            </div>

            <div className="row eq_button">
              <CalcButton value={'='} onClick={() => hesap('=')} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
