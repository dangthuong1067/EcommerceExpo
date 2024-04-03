import { View, Text, Image } from 'react-native'
import React, { useEffect } from 'react'
import IMAGES from '../../images/images'
import styles from './splashScreen.styles'
import { useDispatch } from 'react-redux'
import { getTokenThunk } from '../../redux/auth/auth.slice'
import { setStack } from '../../redux/app/app.slice'
import { getStaticDataThunk } from '../../redux/staticData/staticData.slice'

const SplashScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    handleInitialLogic()
  }, [])

  const handleInitialLogic = async () => {
    const token = await dispatch(getTokenThunk()).unwrap();
    if (token) {
      await dispatch(getStaticDataThunk());
      dispatch(setStack("protected"));
    }
    else {
      dispatch(setStack("auth"));
    }
  }

  return (
    <View style={styles.containerImage}>
      <Image source={IMAGES.logo}
        style={styles.image}
        resizeMode="cover" />
      <Text style={styles.appName}>Ecommerce App</Text>
    </View>
  )
}

export default SplashScreen