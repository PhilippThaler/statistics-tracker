import React from 'react';
import InputContainer from './components/InputContainer'
import './App.css';

const App: React.FC = () => {
    return (
        <div className="App">
            <header className="App-header">
                <InputContainer />
            </header>
        </div>
    );
}

export default App;
