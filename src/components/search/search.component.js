// Cách 1
// import { View, Text, TextInput, TouchableOpacity } from 'react-native'
// import React, { useState } from 'react'
// import styles from './search.styles'
// import Icon from 'react-native-vector-icons/Ionicons'
// const Search = () => {
//   const [isIconRight, setIsIconRight] = useState(false)

//   const onChangeText = (value) => {
//     if (value) {
//       setIsIconRight(true)
//     } else {
//       setIsIconRight(false)
//     }
//   }
//   return (
//     <View style={styles.container}>
//       <Icon
//         name={'search-outline'}
//         size={22}
//         color='#a2a1a7'
//       />
//       <TextInput
//         placeholder='Search'
//         style={{ flex: 1 }}
//         onChangeText={onChangeText}
//       />
//       {isIconRight &&
//         <TouchableOpacity>
//           <Icon
//             name={'close-circle-outline'}
//             size={22}
//             color='#737373'
//           />
//         </TouchableOpacity>}

//     </View>
//   )
// }

// export default Search


//Cách 2: Sử dụng react-hook-form
import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './search.styles';

const Search = () => {
  const { control, handleSubmit, setValue, watch } = useForm();
  const searchInput = watch('searchInput');

  const onSubmit = () => {

  };

  const onChangeText = (value) => {
    setValue('searchInput', value);
  };

  return (
    <View style={styles.container}>
      <Icon
        name={'search-outline'}
        size={22}
        color='#a2a1a7' />

      <Controller
        control={control}
        render={({ field }) => (
          <TextInput
            placeholder='Search'
            style={styles.search}
            onChangeText={(value) => {
              field.onChange(value);
              onChangeText(value);
            }}
            value={searchInput}
          />
        )}
        name="searchInput"
      />

      {searchInput &&
        <TouchableOpacity onPress={handleSubmit(onSubmit)}>
          <Icon name={'close-circle-outline'} size={22} color='#737373' />
        </TouchableOpacity>}
    </View>
  );
};

export default Search;
