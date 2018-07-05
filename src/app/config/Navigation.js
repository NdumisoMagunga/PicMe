import { createStackNavigator,createTabNavigator } from 'react-navigation';
import { Container, Header, Tab, Tabs, TabHeading, Icon, Text } from 'native-base';

import HomeTab from '../components/TopBar';
import Chat from '../screens/Chat';
import Home from '../screens/Home';
import ImageDetails from '../screens/ImageDetails';
import Gallary from '../screens/Gallary';


export default createStackNavigator ({
    HomeTab :{
        screen:createTabNavigator({
            Recent: {
                screen: Home,
                navigationOptions:{
                    Icon:'camera'
                }
            },

            Trending: {
                screen: ImageDetails,
               
            },

            All_Images: {
                screen: Gallary,
               
            },
            

        }),
        navigationOptions:{
            title:'Home',
           
        }
       
    },
   
    Chat: {
        screen: Chat,
        navigationOptions:{
            title:'Chat'
        }
    },

},
    {
        headerMode:'none',
    }
);