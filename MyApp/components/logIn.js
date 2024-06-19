import React from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image } from 'react-native';

const LogIn = () => {
  return (
    <View style={styles.BigFrame}>
      <View>
        <Text style={styles.Username}>ColeWorld</Text>
      </View>
      <View>
        <Text style={styles.WelcomeNote}>Welcome Back 👋</Text>
        <Text style={styles.LogNote}>Let's log in. Apply to jobs!</Text>
      </View>
      <View>
        <TextInput style={styles.Name} placeholder="Name" />
        <TextInput style={styles.Email} placeholder="Email" />
        <TouchableOpacity style={styles.Login}>
          <Text style={styles.LOGIN}>Log in</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.Row}>
        <View style={styles.Line} />
        <Text style={styles.or}>Or continue with</Text>
        <View style={styles.Line} />
      </View>
      <View style={styles.socialIcons}>
        <Image source={require('../assets/Apple.png')} style={styles.Apple} />
        <Image source={require('../assets/Google.png')} style={styles.Google} />
        <Image source={require('../assets/Facebook.png')} style={styles.Facebook} />
        </View>
      <View style={styles.BottomContainer}>
        <Text style={styles.Get}>Haven’t an account? <Text style={styles.Register}>Register</Text></Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  BigFrame: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'left',
    padding: 20,
    backgroundColor: '#F9F9F9',
  
  },
  Username: {
    color: "#356899",
    fontSize: 24,
    fontWeight: 'bold',
    alignItems:"centre"
  },
  WelcomeNote: {
    color: "#0D0D26",
    fontSize: 22,
    marginTop: 10,
  },
  LogNote: {
    color: "gray",
    fontSize: 14,
    fontWeight: "400",
    marginVertical: 10,
  },
  Name: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    width: 300,
  },
  Email: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
    width: 300,
  },
  Login: {
    backgroundColor: '#356899',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  LOGIN: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  Row: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'center',
    marginVertical: 10,
  },
  Line: {
    height: 1,
    backgroundColor: '#AFB0B6',
    flex: 1,
  },
  or: {
    color: '#AFB0B6',
    marginBottom: 20,
    fontSize: 13,
    fontWeight: '400',
    alignSelf:"center"
  },
  socialIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 200,
    marginBottom:5,
    alignSelf:"center",
    
    
  },
  Apple: {
    width: 26,
    height: 26,
  },
  Google: {
    width: 28,
    height: 28,
  },
  Facebook: {
    width: 24.5,
    height: 24.35,
  },
  BottomContainer: {
    marginTop: 40, 
    alignSelf:"center"
  },
  Get: {
    fontSize: 14,
    fontWeight: '400',
    alignSelf:"center",
    
  },
  Register: {
    color: '#356899',
    fontWeight: 'bold',
  },
});

export default LogIn;
