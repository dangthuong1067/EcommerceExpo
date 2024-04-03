import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { Controller, useForm } from 'react-hook-form';
import IMAGES from '../../images/images';
import styles from './login.styles';
import TextInputField from '../../components/textinput-field/textinput-field.component';
import PrimaryButton from '../../components/primary-button/primary-button.component';
import { loginThunk } from '../../redux/auth/auth.slice';
import { loadingSpashScreen } from '../../redux/staticData/staticData.slice';
import { setStack } from '../../redux/app/app.slice';


const Login = ({ navigation }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    }
  });

  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    try {
      await dispatch(loginThunk(data)).unwrap();
      Alert.alert("Đăng nhập thành công");
      dispatch(setStack("protected"))
      //dispatch(setStack("init"));
    } catch (error) {
      Alert.alert('Error:', error.message)
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerImage}>
        <Image source={IMAGES.logo}
          style={styles.image}
          resizeMode="cover" />
        <Text style={styles.appName}>Ecommerce App</Text>
      </View>

      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <View style={styles.containerTextInputField(errors.email)}>
            <TextInputField
              label="Email"
              iconLeft="mail-outline"
              placeholder="Email"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          </View>
        )}
        name="email"
        rules={{
          required: 'Email không được bỏ trống',
        }}
      />
      {errors.email &&
        <View style={styles.containerError}>
          <Text style={styles.errorText}>{errors.email.message}</Text>
        </View>
      }

      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <View style={styles.containerTextInputField(errors.password)}>
            <TextInputField
              label="Mật khẩu"
              iconLeft="key-outline"
              placeholder="Mật khẩu"
              secure
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          </View>
        )}
        name="password"
        rules={{
          required: 'Mật khẩu không được bỏ trống',
        }}
      />
      {errors.password &&
        <View style={styles.containerError}>
          <Text style={styles.errorText}>{errors.password.message}</Text>
        </View>
      }

      <TouchableOpacity
        onPress={() => navigation.navigate("ForgotPassword")}
        style={styles.forgotPassword}>
        <Text style={styles.textForgotPassword}>Quên mật khẩu</Text>
      </TouchableOpacity>

      <PrimaryButton
        onPress={handleSubmit(onSubmit)}
        style={styles.primaryButton}
      >
        Đăng nhập
      </PrimaryButton>

      <View style={styles.contentBottom}>
        <Text style={styles.textAlreadyHaveAnAccount}>Bạn chưa có tài khoản?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text style={styles.textRegister}>Đăng ký</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Login