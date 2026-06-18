import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Alert,
} from 'react-native';

import vehiculos from './data/vehiculos.json';

export default function App() {
  const calcularValor = (vehiculo) => {
    let valor = vehiculo.precio;

    // Descuento por kilometraje
    valor -= vehiculo.precio * (0.0005 * (vehiculo.kilometraje / 1000));

    // Descuento por llantas
    if (vehiculo.llantas === 'Cambio') {
      valor -= 500000;
    }

    let mensaje = `Valor estimado: $${Math.round(
      valor
    ).toLocaleString('es-CO')}`;

    if (vehiculo.kilometraje > 50000) {
      mensaje += '\n\n⚠️ Posible mantenimiento requerido.';
    }

    Alert.alert(
      `${vehiculo.marca} ${vehiculo.modelo}`,
      mensaje
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Concesionario</Text>

      <FlatList
        data={vehiculos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.nombre}>
              {item.marca} {item.modelo}
            </Text>

            <Text style={styles.info}>Año: {item.año}</Text>
            <Text style={styles.info}>Color: {item.color}</Text>

            <Text style={styles.numero}>
              Precio: ${item.precio.toLocaleString('es-CO')}
            </Text>

            <Text style={styles.numero}>
              Km: {item.kilometraje.toLocaleString('es-CO')}
            </Text>

            <Text style={styles.info}>
              Llantas: {item.llantas}
            </Text>

            <TouchableOpacity
              style={styles.boton}
              onPress={() => calcularValor(item)}
            >
              <Text style={styles.textoBoton}>
                Ver valoración
              </Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#555',
    padding: 20,
    paddingTop: 60,
  },

  titulo: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },

  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
  },

  nombre: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  info: {
    fontSize: 16,
    marginBottom: 4,
  },

  numero: {
    fontSize: 16,
    marginBottom: 4,
  },

  boton: {
    backgroundColor: '#FFD700',
    padding: 12,
    borderRadius: 8,
    marginTop: 10,
  },

  textoBoton: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
});