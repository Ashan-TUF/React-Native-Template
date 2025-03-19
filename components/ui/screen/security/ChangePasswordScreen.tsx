import {Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {COLORS} from "@/constants/ColorPallet";
import {TextInput} from "react-native-paper";
import {useState} from "react";

const logo = require('@/assets/logo/Wattpad_logo.png');

export default function ChangePasswordScreen() {
    const [otp, setOtp] = useState('');
    return (
        <ScrollView style={styles.container}>
            <View style={styles.logoWrapper}>
                <Image source={logo} style={styles.logo} resizeMode={'contain'}/>
            </View>
            <View style={styles.inputOuter}>
                <View style={styles.formGroup}>
                    <Text>New Password</Text>
                    <TextInput
                        label={'New Password'}
                        value={otp}
                        mode={'outlined'}
                        onChangeText={text => setOtp(text)}
                    />
                </View>
                <View style={styles.formGroup}>
                    <Text>Confirm Password</Text>
                    <TextInput
                        label={'Confirm Password'}
                        value={otp}
                        mode={'outlined'}
                        onChangeText={text => setOtp(text)}
                    />
                </View>
                <TouchableOpacity style={styles.button}>
                    <Text style={{color: COLORS.light}}>Change Password</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    button: {
        backgroundColor: COLORS.blue,
        height: 50,
        borderRadius: 3,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30
    },
    formGroup: {
        marginBottom: 10
    },
    inputOuter: {
        marginTop: 50
    },
    logo: {
        width: 200,
        height: 60
    },
    logoWrapper: {
        alignItems: 'center',
        marginTop: 20
    },
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: COLORS.light,
    }
})