import {Button, StyleSheet, TextInput, View, Text} from 'react-native';
import React, {FC, useState} from 'react';
import {useAppDispatch, useAppSelector} from '@redux/hooks';
import {noteSelector} from '@redux/notesSlice';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import CustomSafeAreaView from '@components/global/CustomSafeAreaView';
import ProductSlider from '@components/login/ProductSlider';

const CustomerLogin: FC = () => {
 

  // const dispatch = useAppDispatch();
  // const notes = useAppSelector(noteSelector);
  // console.log(notes);

  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.container} >
      <CustomSafeAreaView>
      <ProductSlider/>
      </CustomSafeAreaView>
      </View>
    </GestureHandlerRootView>
  );
};

export default CustomerLogin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
