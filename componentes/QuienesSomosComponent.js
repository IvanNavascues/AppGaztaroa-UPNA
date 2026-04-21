
import { Component } from 'react';
import { FlatList, Image, StyleSheet, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Card, Text } from 'react-native-paper';
import { baseUrl } from '../comun/comun';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        actividades: state.actividades
    }
}

function RenderHistoria() {
    return (
        <Card style={styles.card}>
            <Card.Title
                title="Un poquito de historia"
                titleStyle={styles.titulo}
                style={styles.cardTitle}
            />
            <Card.Content>
                <Text style={styles.descripcion}>
                    "El nacimiento del club de montaña Gaztaroa se remonta a la
                    primavera de 1976 cuando jóvenes aficionados a la montaña y
                    pertenecientes a un club juvenil decidieron crear la sección
                    montañera de dicho club. Fueron unos comienzos duros debido sobre
                    todo a la situación política de entonces. Gracias al esfuerzo
                    económico de sus socios y socias se logró alquilar una bajera.
                    Gaztaroa ya tenía su sede social.
                    Desde aquí queremos hacer llegar nuestro agradecimiento a todos
                    los montañeros y montañeras que alguna vez habéis pasado por el
                    club aportando vuestro granito de arena.
                    Gracias!"
                </Text>
            </Card.Content>
        </Card>
    );
}

class QuienesSomos extends Component {
    render() {
        const renderItem = ({ item }) => {
            return (
                <Card style={styles.card}>
                    <Card.Title
                        title={item.nombre}
                        titleStyle={styles.titulo}
                        style={styles.cardTitle}
                    />
                    <Card.Content>
                        <View style={styles.row}>
                            <Image
                                source={{ uri: baseUrl + item.imagen }}
                                style={styles.leftImage}
                            />
                            <Text style={styles.descripcion}>
                                {item.descripcion}
                            </Text>
                        </View>
                    </Card.Content>
                </Card>
            );
        };
        return (
            <SafeAreaView style={styles.container}>
                <FlatList
                    data={this.props.actividades.actividades}
                    ListHeaderComponent={RenderHistoria}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id.toString()}
                />
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    card: {
        margin: 8,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    leftImage: {
        width: 64,
        height: 64,
        marginRight: 12,
        borderRadius: 8,
    },
    image: {
        marginHorizontal: 0,
    },
    descripcion: {
        flex: 1,
        marginBottom: 20,
    },
    titulo: {
        textAlign: 'center',
    },
    cardTitle: {
        alignItems: 'center',
    },
});

export default connect(mapStateToProps)(QuienesSomos);