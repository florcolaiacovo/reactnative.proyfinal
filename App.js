import React, {useState, useEffect} from "react";
import { NavigationContainer } from "@react-navigation/native"
import BottomTabNavigator from "./src/navigation/BottomTabNavigator"

import {Provider} from 'react-redux'
import store from "./src/store";

export default function App() {
  
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }


  return (
    <Provider store={store}>
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>

  </Provider>
  );
}


