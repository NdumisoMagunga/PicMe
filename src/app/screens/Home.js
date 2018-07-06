import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity,Dimensions} from 'react-native';
import PicCard from '../components/Card';

class Home extends Component {

    render() {
        return (
            <ScrollView >
                <View>
                <TouchableOpacity  onPress={() => {this.props.navigation.navigate('Chat')}}>
                    <PicCard />
                    <PicCard />
                    <PicCard />
                    <PicCard />
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