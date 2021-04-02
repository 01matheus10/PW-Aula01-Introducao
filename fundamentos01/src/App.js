import React, {Component} from 'react'
import './App.css'

import IndiretaPai from './components/basicos/IndiretaPai'
import Estado from './components/basicos/Estado'
import FamiliaClone from './components/basicos/FamiliaClone'
import FamiliaMembroClone from './components/basicos/MembroFamiliaClone'
import Familia from './components/basicos/Familia'
import Card from './components/layout/Card'
import Propriedades from './components/basicos/Propriedades'
import OlaMundo from './components/basicos/OlaMundo'

class App extends Component {
    render() {
        return(
            <div className='App'>
                <h1>Exemplos React</h1>

                <div className="Cards" >

                    <Card titulo="Comunicação Indireta (de filho para pai)" cor="#f7673b">
                        <IndiretaPai />
                    </Card>
                    <Card titulo="Estado" cor="ffb400">
                        <Estado />
                    </Card>

                    <Card titulo="Componentes aninhados (CloneElement)" cor="#82212e">
                        <FamiliaClone sobrenome="Simpson">
                            <FamiliaMembroClone nome="Homer Jay" />
                            <FamiliaMembroClone nome="Marjorie" />
                            <FamiliaMembroClone nome="Bartholomew JoJo" />
                            <FamiliaMembroClone nome="Lisa Marie" />
                            <FamiliaMembroClone nome="Margareth" />
                        </FamiliaClone>
                    </Card>

                    <Card titulo="Componentes aninhados (Comunicação direta)" cor="#d1495b">
                        <Familia sobrenome="Simpson"/>
                    </Card>

                    <Card titulo="Propriedades" cor="#91cb3e">
                        <Propriedades nome="Homer" sobrenome="Jay Simpson" idade={38}/>
                    </Card>

                    <Card titulo="Olá Mundo!" cor="#226ce0">
                        <OlaMundo />
                    </Card>

                </div>
            </div>
        )
    }
}
export default App;