import { useState } from 'react';
import Header from './Components/Header';
import TableComp from './Components/TableComp';
import './styles/App.css';


const SmsApp = () => {
    const [data, setData] = useState([
        {name: "Muhammadumar", classNum: 3, phone: "998 97 006 96 56", birthDate: "27.04.2008"},
        {name: "Muhammadumar", classNum: 3, phone: "998 97 006 96 56", birthDate: "27.04.2008"},
        {name: "Muhammadumar", classNum: 3, phone: "998 97 006 96 56", birthDate: "27.04.2008"}
    ]);

    function addUser (user) {
        setData(user)
    }
    return (
        <div>
            <h1 className='brand'>Student Management App</h1>
            <div className='box'>
                <Header add={addUser} />
                <TableComp students={data}/>
            </div>
        </div>
    );
}

export default SmsApp;