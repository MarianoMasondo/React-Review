// Ejemplo de componente tipo clase que dispone de los métodos de ciclo de vida

import React, { Component } from 'react'
import PropTypes from 'prop-types'

class lifeCicleExample extends Component {
    constructor(props) {
        super(props)
        console.log('CONSTRUCTOR: Cuando se instancia el componente')

    }

    componentWillMount() {
        console.log('WILLMOUNT: Antes del montaje del componente')

    }

    componentDidMount() {
        console.log('DIDMOUNT: Justo al acabar el montaje del componente antes de renderizarlo')

    }

    componentWillReceiveProps(nextProps) {
        console.log('WillReciebeProps: Si va a recibir nuevas props')

    }

    shouldComponentUpdate(nextProps, nextState) {
        //Controla si el componente ebe o no actulizarse
        //return true /false

    }

    componentWillUpdate(nextProps, nextState) {
        console.log('WillUpdate: Justo antes de actualizarse')

    }

    componentDidUpdate(prevProps, prevState) {
        console.log('DidUpdate: Justo después de actualizarse')

    }

    componentWillUnmount() {
        console.log('WillUnmount: Justo antes de desaparecere')

    }

    render() {
        return (
            <div>

            </div>
        )
    }
}

lifeCicleExample.propTypes = {

}

export default lifeCicleExample