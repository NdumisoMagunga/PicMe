import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Content, Card, CardItem, 
    Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
export default class Home extends Component {
  render() {
    return (
    
        
          <Card>
            <CardItem>
              <Left>
                <Body>
                  <Text>Force Focus</Text>
                  <Text note>1994/Sep/19</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={require('../images/urus.jpg')} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
             
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
     
      
    );
  }
}