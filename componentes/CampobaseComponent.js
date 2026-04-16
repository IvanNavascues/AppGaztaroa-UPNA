import React, { Component } from 'react';
import Calendario from './CalendarioComponent';
import { EXCURSIONES } from '../comun/excursiones';
import { View } from 'react-native';
import DetalleExcursion from './DetalleExcursionComponent';
class Campobase extends Component {
    constructor(props) {
        super(props);
        this.state = {
            excursiones: EXCURSIONES,
            seleccionExcursion: null
        };
    }
    onSeleccionExcursion(excursionId) {
        this.setState({ seleccionExcursion: excursionId })
    }
    render() {

        return (
            <View style={{ flex: 1 }}>
                <DetalleExcursion excursion={this.state.excursiones.find((excursion) => excursion.id === this.state.seleccionExcursion)} />
                <Calendario excursiones={this.state.excursiones} onPress={(
                    excursionId) => this.onSeleccionExcursion(excursionId)} />
            </View>
        );
    }
}
export default Campobase; 