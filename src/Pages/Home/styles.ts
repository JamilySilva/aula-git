import {StyleSheet} from 'react-native';
export const stylesLink=StyleSheet.create({
	text:{
		marginTop:10,
		color:'#4A4A4C',
		fontSize:13.71
	}
});
export const stylesLinkImportantes=StyleSheet.create({
	container:{
		paddingVertical:10,
		justifyContent:"space-between",
		paddingHorizontal:40,
		borderBottomColor:"blue",
		flexDirection:"row",
		borderBottomWidth:1
	}
});
export const styles=StyleSheet.create({
	container:{
		flex:1
	},
	header:{
		minHeight:94,
		justifyContent:"space-between",
		paddingTop:35,
		flexDirection:"row",
		backgroundColor:"#4369B0",
		paddingHorizontal:25
	},
	inputTextView:{
		paddingLeft:12,
		borderRadius:25,
		alignItems:"center",
		height:45,
		flex:1,
		marginHorizontal:12,
		backgroundColor:"#2C4877",
		flexDirection:"row"
	},
	textInput: {
		flex:1,
		color:"#F5FFFF",
		paddingRight:10
	},
	botao: {
		borderRadius: 25,
		height: 40,
		backgroundColor: "#4369B0",
		alignItems: "center",
		marginHorizontal: 40,
		justifyContent: "center",
	},
	conteudo: {
		paddingVertical: 40,
		justifyContent: "flex-end",
		flex: 1,
	}, 
	textBtn: {
		fontSize: 18,
		color: "#F5FFFF",
	},
});