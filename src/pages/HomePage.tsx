import React from 'react';
import { Link } from "react-router-dom";

const HomePage = () =>{
        return (
            <div>
                <h1>Página Inicial</h1>
                <nav>
                    <ul>
                        <li>
                            <Link to="/CountPage">Conta</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }

export default HomePage
