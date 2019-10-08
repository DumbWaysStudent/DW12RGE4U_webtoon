import React, { Component } from 'react';
import {
  SafeAreaView,
  View, StyleSheet,
  Image,
  KeyboardAvoidingView,
  TouchableOpacity
} from 'react-native';
import { Item, Input, Text } from 'native-base';
import { StackActions, NavigationActions } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

import Button from './../components/Button';

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      icon: 'eye',
      eyePassword: true,
      isMailValid: false,
      isPassValid: false
    };
  }

  handleEye() {
    this.setState(prevState => ({
      icon: prevState.icon === 'eye' ? 'eye-slash' : 'eye',
      eyePassword: !prevState.eyePassword
    }));
  }

  passlValidation(pass) {
    if (pass === '') {
      this.setState({ isPassValid: false });
    } else {
      this.setState({ isPassValid: true });
    }
    this.setState({ password: pass });
  }

  emailValidation(mail) {
    const passCheck = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (passCheck.test(mail)) {
      this.setState({ isMailValid: true });
    } else {
      this.setState({ isMailValid: false });
    }
    this.setState({ email: mail });
  }

  buttonValidation(email, pass) {
    if (email === true && pass === true) {
      return false;
    }
    return true;
  }

  handleLogin() {
    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'Home' })],
    });
    this.props.navigation.dispatch(resetAction);
  }

  render() {
    //console.log('emailvalid: ' + this.state.isMailValid);
    return (
      <SafeAreaView>
        <KeyboardAvoidingView behavior='position' style={styles.container}>
          <View style={[styles.textInfo, styles.textInfoTop]}>
            <Image source={require('./../assets/webtoon.png')} style={styles.title} />
            <Text style={styles.subTitle}>Login with your account WEBTOON</Text>
          </View>

          <View>
            <Item rounded style={styles.formItem}>
              <Input
                value={this.state.email}
                onChangeText={(text) => this.emailValidation(text)}
                autoCapitalize='none'
                keyboardType='email-address'
                placeholder='Input your email'
              />
            </Item>
            <Item rounded style={styles.formItem}>
              <Input
                value={this.state.password}
                onChangeText={(text) => this.passlValidation(text)}
                autoCapitalize='none'
                keyboardType='default'
                secureTextEntry={this.state.eyePassword}
                placeholder='Input your password'
              />
              <TouchableOpacity onPress={() => this.handleEye()}>
                <Icon name={this.state.icon} size={25} color='#000' />
              </TouchableOpacity>

            </Item>
            <Button
              disabled={this.buttonValidation(this.state.isMailValid, this.state.isPassValid)}
              onPress={() => this.handleLogin()}
            >Log In</Button>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
  },
  textInfo: {
    alignItems: 'center',
    padding: 20,
  },
  textInfoTop: {
    marginTop: '14%',
    marginBottom: 40
  },
  title: {
    height: 200,
    width: 200
  },
  subTitle: {
    fontSize: 25,
    marginTop: 10,
    textAlign: 'center'
  },
  formItem: {
    marginBottom: 20,
    paddingHorizontal: 15,
    height: 50
  }
});
