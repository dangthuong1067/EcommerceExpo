import React, { useState } from 'react'
import { View, Text, Image, KeyboardAvoidingView, ScrollView, Alert, TouchableOpacity } from 'react-native'
import { useForm, Controller } from 'react-hook-form'

import styles from './register.styles'
import IMAGES from '../../images/images'
import TextInputField from '../../components/textinput-field/textinput-field.component'
import RadioButton from '../../components/radio-button/radio-button.component'
import PrimaryButton from '../../components/primary-button/primary-button.component'
import { useDispatch, useSelector } from 'react-redux'
import { signupThunk } from '../../redux/auth/auth.slice'

const Register = ({ navigation }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      role: "buyer"
    }
  });

  const dispatch = useDispatch();
  const onSubmit = async (data) => {
    try {
      await dispatch(signupThunk(data)).unwrap()
      navigation.navigate("Login");
      Alert.alert("Đăng ký thành công");
    } catch (error) {
      Alert.alert(error);
    }
  }

  return (
    <ScrollView style={styles.containerScrollView}>
      <KeyboardAvoidingView
        style={styles.flex1}
      >
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
                  autoCapitalize="none"
                />
              </View>
            )}
            name="email"
            rules={{
              required: 'Email không được bỏ trống',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: 'Email không hợp lệ',
              },
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
                  autoCapitalize="none"
                />
              </View>
            )}
            name="password"
            rules={{
              required: 'Mật khẩu không được bỏ trống',
              minLength: {
                value: 6,
                message: 'Mật khẩu phải có ít nhất 6 ký tự',
              },
              // pattern: {
              //   value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
              //   message:
              //     'Mật khẩu phải chứa ít nhất một chữ cái viết thường, một chữ cái viết hoa, một số và một ký tự đặc biệt',
              // },
            }}
          />
          {errors.password &&
            <View style={styles.containerError}>
              <Text style={styles.errorText}>{errors.password.message}</Text>
            </View>
          }

          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <View style={styles.containerTextInputField(errors.confirmPassword)}>
                <TextInputField
                  label="Xác nhận mật khẩu"
                  iconLeft="key-outline"
                  placeholder="Xác nhận mật khẩu"
                  secure
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              </View>
            )}
            name="confirmPassword"
            rules={{
              required: 'Xác nhận mật khẩu không được bỏ trống',
              validate: (value) =>
                value === getValues('password') || 'Mật khẩu xác nhận không khớp',
            }}
          />
          {errors.confirmPassword && (
            <View style={styles.containerError}>
              <Text style={styles.errorText}>{errors.confirmPassword.message}</Text>
            </View>
          )}

          <Text style={styles.text}>Bạn đăng ký tài khoản với vai trò là:</Text>

          <View style={styles.containerRadioButton}>
            <Controller
              control={control}
              render={(obj) => {
                const { field: { onChange, value } } = obj
                return (
                  <RadioButton
                    label="Người mua hàng"
                    isCheckRadio={value === "buyer"}
                    value="buyer"
                    onChange={onChange}
                  />
                )
              }}
              name='role'
            />

            <Controller
              control={control}
              render={(obj) => {
                const { field: { onChange, value } } = obj
                return (
                  <RadioButton
                    label="Chủ shop"
                    isCheckRadio={value === "owner"}
                    value="owner"
                    onChange={onChange}
                  />
                )
              }}
              name='role'
            />

          </View>
          <PrimaryButton
            style={styles.primaryButton}
            onPress={handleSubmit(onSubmit)}
          >
            Đăng ký
          </PrimaryButton>
          <View style={styles.alreadyHaveAnAcount}>
            <Text style={styles.text}>Bạn đã có tài khoản?</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text style={styles.textLogin}>Đăng nhập</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  )
}

export default Register;
