import React from 'react'
import { Button, TextInput, View, Text } from 'react-native'
import { Formik } from 'formik'

const Test = () => {
  return (
    <Formik
      initialValues={{ password: '' }}
      onSubmit={(values) => console.log(values)}
    >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Text>Lable This</Text>
          <TextInput
            placeholder="PlaceHolder"
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            value={values.password}
          />
          <Button onPress={() => handleSubmit} title="Submit" />
        </View>
      )}
    </Formik>
  )
}

export default Test

// <MyTextInput
//              label="Username"
//            icon="person"
//          placeholder="greendog21"
//        placeholderTextColor={darkLight}
//      onChangetext={handleChange("username")}
//    onBlur={handleBlur("username")}
//  value={values.username}
/// >
