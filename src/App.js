import React from 'react';
import styles from './style.module.css'; 
import Header from './components/Header';
import Main from './components/Main';

function App() {

    return (
        <div className="App">
            <div className={styles.wrapper}>
                <Header />
                <Main />
            </div>
        </div>
    );
}

export default App;
