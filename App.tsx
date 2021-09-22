import React from 'react';
import Routes from './src/routes';
import {StyleSheet,View} from 'react-native';
			export default function App(){
				return(
					<View style={styles.container}>
						<Routes/>
					</View>
				);
			}
			const styles=StyleSheet.create({
				container:{
					flex:1
				}
			});