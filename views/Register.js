import React, {Component} from 'react';
import {StyleSheet, View, ToastAndroid} from 'react-native';
import {Container, Button, Content, Form, Item, Input, Text} from 'native-base';
import axios from 'axios';
export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      payload: {
        email: '',
        password: '',
      },
      respons: '',
      showToast: false,
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  static navigationOptions = {
    title: 'Register',
    headerStyle: {
      backgroundColor: '#0080FF',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  handleInput(name, value) {
    this.setState(prevState => ({
      payload: {
        ...prevState.payload,
        [name]: value,
      },
    }));
  }
  handleSubmit() {
    let payload = {
      ...this.state.payload,
    };
    axios
      .post('http://reqres.in/api/register', payload)
      .then(response => {
        if (response.status === 200) {
          return ToastAndroid.show(
            'Register Success',
            ToastAndroid.LONG,
            ToastAndroid.TOP,
            25,
            50,
          );
        }
      })
      .catch(err => console.log(err));
  }
  render() {
    return (
      <Container>
        <Content padder>
          <Form>
            <Item last>
              <Input
                placeholder="Email"
                onChangeText={value => {
                  this.handleInput('email', value);
                }}
                value={this.state.payload.username}
              />
            </Item>
            <Item last>
              <Input
                placeholder="Password"
                secureTextEntry={true}
                onChangeText={value => {
                  this.handleInput('password', value);
                }}
                value={this.state.payload.password}
              />
            </Item>
            <Button block style={styles.mt} onPress={this.handleSubmit}>
              <Text>Sign Up</Text>
            </Button>
          </Form>
          <View style={[styles.right, styles.mt]}>
            <Text style={styles.font_14}>Already have account ?</Text>
            <Text
              style={[styles.font_14, styles.blue, styles.ml]}
              onPress={() => this.props.navigation.navigate('Login')}>
              Sign In
            </Text>
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  mt: {
    marginTop: 20,
  },
  right: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
  font_14: {
    fontSize: 14,
  },
  blue: {
    color: '#0080FF',
  },
  ml: {
    marginLeft: 10,
  },
});
