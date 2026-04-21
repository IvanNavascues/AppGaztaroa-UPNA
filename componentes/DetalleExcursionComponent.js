import { Component } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { COMENTARIOS } from '../comun/comentarios';
import { Card, Text, Divider, IconButton } from 'react-native-paper';
import { EXCURSIONES } from '../comun/excursiones';
import { FlatList } from 'react-native-gesture-handler';
import { baseUrl } from '../comun/comun';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        comentarios: state.comentarios,
        excursiones: state.excursiones
    }
}

function RenderComentario(props) {
    const comentarios = props.comentarios;
    if (comentarios != null) {
        return (
            <Card style={styles.card}>
                <Card.Title
                    title="Comentarios"
                    titleStyle={styles.titulo}
                    style={styles.cardTitle}
                />
                <Card.Content>
                    <FlatList
                        data={comentarios}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => (
                            <Text style={styles.descripcion}>
                                {item.comentario} - {item.autor} - {item.dia}
                            </Text>
                        )}
                    />
                </Card.Content>
            </Card>
        );
    }

    return <View />
}

function RenderExcursion(props) {
    const excursion = props.excursion;

    if (excursion == null) {
        return <View />;
    }
    return (
        <Card style={styles.card}>
            <Card.Title
                title={excursion.nombre}
                titleStyle={styles.titulo}
                style={styles.cardTitle}
            />
            <Card.Cover
                source={{ uri: baseUrl + excursion.imagen }}
                style={styles.image}
            />
            <Card.Content>
                <Text style={styles.descripcion}>
                    {excursion.descripcion}
                </Text>

                <View style={styles.iconoContainer}>
                    <IconButton
                        icon={props.favorita ? 'heart' : 'heart-outline'}
                        size={28}
                        onPress={() =>
                            props.favorita
                                ? console.log('La excursión ya se encuentra entre las favoritas')
                                : props.onPress()
                        }
                    />
                </View>
            </Card.Content>
        </Card>
    );
}

class DetalleExcursion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            favoritos: []
        };
    }
    marcarFavorito(excursionId) {
        this.setState({
            favoritos: this.state.favoritos?.concat(excursionId)
        });
    }

    render() {
        const { excursionId } = this.props.route.params;
        // Validar que los datos estén disponibles
        if (!this.props.excursiones || !this.props.comentarios) {
            return <View style={styles.container}><Text>Cargando...</Text></View>;
        }
        return (
            <ScrollView>
                <RenderExcursion
                    excursion={this.props.excursiones.excursiones[+excursionId]}
                    favorita={this.state.favoritos.some(el => el === excursionId)}
                    onPress={() => this.marcarFavorito(excursionId)}
                />
                <RenderComentario
                    comentarios={this.props.comentarios.comentarios.filter((comentario) => comentario.excursionId === excursionId)}
                />
            </ScrollView>

        );
    }
}

const styles = StyleSheet.create({
    card: {
        margin: 8,
    },
        container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconoContainer: {
        alignItems: 'center',
        marginBottom: 8,
    },
    image: {
        marginHorizontal: 0,
    },
    descripcion: {
        marginTop: 20,
        marginBottom: 20,
    },
    titulo: {
        textAlign: 'center',
    },
    cardTitle: {
        alignItems: 'center',
    },
});

export default connect(mapStateToProps)(DetalleExcursion);