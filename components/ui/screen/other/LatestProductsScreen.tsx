import {StyleSheet, View, Text} from "react-native";

export default function LatestProductsScreen(){
    return(
        <View  style={styles.container}>
            <Text>Latest products Screen</Text>
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