import { Card, Text } from 'react-native-paper';
import { Component } from 'react';
import { StyleSheet } from 'react-native';

class Contacto extends Component {
    render() {
        return (
            <Card style={styles.card}>
                <Card.Title
                    title="Información de contacto"
                    titleStyle={styles.titulo}
                    style={styles.cardTitle}
                />
                <Card.Content>
                    <Text style={styles.descripcion}>
                        "Kaixo Mendizale!
                        Si quieres participar en las salidas de montaña que organizamos o
                        quieres hacerte soci@ de Gaztaroa, puedes contactar con nosotros a
                        través de diferentes medios. Puedes llamarnos por teléfono los jueves
                        de las semanas que hay salida (de 20:00 a 21:00). También puedes
                        ponerte en contacto con nosotros escribiendo un correo electrónico, o
                        utilizando la aplicación de esta página web. Y además puedes
                        seguirnos en Facebook.
                        Para lo que quieras, estamos a tu disposición!
                        Tel: +34 948 277151
                        Email: gaztaroa@gaztaroa.com"
                    </Text>
                </Card.Content>
            </Card>
        );
    }
}

const styles = StyleSheet.create({
    card: {
        margin: 8,
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

export default Contacto;