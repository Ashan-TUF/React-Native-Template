import {StyleSheet, View, Text} from "react-native";

export default function Customercare(){
    return(
        <View  style={styles.container}>
            <Text>Customer care Screen</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems:'center',
        justifyContent: 'center'
    }
})