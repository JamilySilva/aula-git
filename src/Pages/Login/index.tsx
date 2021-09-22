import React from 'react';
import {View,Text,Image,TextInput,TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackNavigatorParamList } from '../../../types';
import {styles} from './styles';
type LoginProps = NativeStackNavigationProp<StackNavigatorParamList>;

const Login=()=>{
	const navigation = useNavigation<LoginProps>();
	function irParaTelaDeHome() {
		navigation.navigate('Home');
	}
	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Image style={styles.logo} source={require("../../assets/facebook.png")}></Image>
				<Text style={styles.textoDaLogo}>Facebook</Text>
			</View>
			<View style={styles.form}>
				<TextInput placeholder="Email" placeholderTextColor="#A19FA1"style={styles.Input}></TextInput>
				<TextInput placeholder="Senha"placeholderTextColor="#A19FA1"style={styles.Input}></TextInput>
				<View style={styles.button}>
					<TouchableOpacity style={styles.button} onPress={irParaTelaDeHome}>
						<Text style={styles.textButton}>Log-In</Text>
					</TouchableOpacity>
				</View>
			</View>
				<Text 
				style={styles.criar}>Inscreva-se no Facebook
				</Text>
			</View>
	
	);
}
export default Login;