import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux'
import { logoutThunk } from '../../redux/auth/auth.slice';
import { setStack } from '../../redux/app/app.slice';

const Profile = () => {
  const dispatch = useDispatch();
  return (
    <TouchableOpacity
      onPress={() => {
        dispatch(logoutThunk());
        dispatch(setStack("auth"));
      }}
    >
      <Text>Profile</Text>
    </TouchableOpacity>
  )
}

export default Profile