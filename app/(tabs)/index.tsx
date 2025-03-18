import {Text, StyleSheet, View} from 'react-native';
import {useState} from "react";
import SplashScreen from "@/components/ui/screen/SplashScreen";
import Dashboad from "@/components/ui/screen/Dashboad";
import StackNavigator from "@/app/navigation/stack-navigation/StackNavigator";

export default function HomeScreen() {
    const [isLoading, setIsLoading] = useState(true);
    return (
        <View style={styles.container}>
            {isLoading ? (
                <SplashScreen onFinish={()=>{setIsLoading(false)}}/>
            ) : (
                <StackNavigator/>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})