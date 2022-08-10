import { Routes, Route, Navigate } from 'react-router-dom';
import FormLogin from '../components/formLogin'
import FormCadastro from '../components/formCadastro'; 
import Home from '../components/home';
import { useContext } from 'react';
import { LoginContext } from '../contexts/loginContext'

function Rotas () {
    const { user, loading } = useContext(LoginContext)
    return (
        <Routes>
            <Route path='/' element={<FormLogin/>} />               
            <Route path='/cadastro' element={<FormCadastro/>} />
            <Route path='/dashboard' element={<Home/>} />
            <Route path='*' element={<Navigate replace to='/'/>} /> 
        </Routes>
    )
}

export default Rotas