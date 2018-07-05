import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity,Dimensions} from 'react-native';

class Home extends Component {

    render() {
        return (
            <ScrollView >
            <View style={styles.container}>
                <TouchableOpacity  onPress={() => {this.props.navigation.navigate('Chat')}}>
                <Text>focus</Text>
                </TouchableOpacity>
                </View>
            </ScrollView>
            
        )
    }
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
      }
})

export default Home;