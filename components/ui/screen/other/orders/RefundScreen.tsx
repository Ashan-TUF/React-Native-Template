import {View, Text, StyleSheet} from 'react-native';
export default function RefundScreen(){
    return(
        <View style={styles.container}>
            <Text>Order Refund Screen</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})