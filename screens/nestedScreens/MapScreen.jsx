import { View } from "react-native";
import MapView, { Marker } from 'react-native-maps';

const MapScreen = ({ route }) => {
  const { longitude, latitude } = route.params.location;
  return (
    <View style={{flex: 1}}>
      <MapView 
        style={{flex: 1}}
        initialRegion={{
          latitude,
          longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        >
          <Marker coordinate={{latitude,longitude}}
            title='my coordinate'
          />
        </MapView>
    </View>
  )
}

export default MapScreen;