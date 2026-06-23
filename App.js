import React from 'react';
import { View, Button } from 'react-native';
import { syncData } from './src/utils/cloudEngine';

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Button
        title="SYNC DATA"
        onPress={() => syncData()}
      />
    </View>
  );
}