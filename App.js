import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createAppcontainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import BookTransactionScreen from './Screens/BookTransactionScreen'
import SearchScreen from './Screens/SearchScreen'

export default class App extends React.Component {
  render(){
  return (
    <View style={styles.container}>
      <AppContainer/>
    </View>
  );
  }
}
const TabNavigator = createBottomTabNavigator({
  Transaction : {Screens:BookTransactionScreen},
  Search : {Screens:SearchScreen}
})
const AppContainer = createAppcontainer(TabNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
