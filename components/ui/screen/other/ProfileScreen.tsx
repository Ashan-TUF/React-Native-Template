import {StyleSheet, View, Text} from "react-native";

export default function DailyDealsScreen(){
    return(
        <View  style={styles.container}>
            <Text>Daily deals Screen</Text>
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