import { useState } from 'react'
import '../App.css'
import { FaSearch } from "react-icons/fa";
import API from '../assets/API';
function Formulario() {
    const [num, setNum] = useState(``)
    const [cep, setCep] = useState({})
    async function handleSerach(e) {
        e.preventDefault();
        try {
            const response = await API.get(`${num}/json`)
            setCep(response.data)

        } catch {
            alert("Erro")
        }
        setNum(``)
    }

    return (
        <div className="formulario">
            <form className='forms' onSubmit={handleSerach}>
                <input value={num} onChange={(e) => setNum(e.target.value)} type="text" placeholder="Digite seu CEP" />
                <button type='submit'><FaSearch /></button>
            </form>
            {Object.keys(cep).length > 0 && (
                <div className="inf">
                    <span>{cep.cep}</span>
                    <span>{cep.bairro}</span>
                    <span>{cep.logradouro}</span>
                    <span>{cep.localidade}</span>
                </div>
            )}

        </div>
    )
}

export default Formulario