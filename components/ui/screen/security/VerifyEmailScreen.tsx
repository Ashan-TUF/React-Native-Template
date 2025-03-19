import {Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {COLORS} from "@/constants/ColorPallet";
import {TextInput} from "react-native-paper";
import {useState} from "react";

const logo = require('@/assets/logo/Wattpad_logo.png');

export default function VerifyEmailScreen() {
    const [otp, setOtp] = useState('');
    return (
        <ScrollView style={styles.container}>
            <View style={styles.logoWrapper}>
                <Image source={logo} style={styles.logo} resizeMode={'contain'}/>
            </View>
            <View style={styles.inputOuter}>
                <View style={styles.formGroup}>
                    <Text>Verify your email</Text>
                    <TextInput
                        label={'OTP'}
                        value={otp}
                        mode={'outlined'}
                        onChangeText={text => setOtp(text)}
                    />
                </View>
                <View style={styles.textGroup}>
                    <TouchableOpacity>
                        <Text>Change email</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text>(30) Resend email</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.button}>
                    <Text style={{color: COLORS.light}}>Verify</Text>
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
        justifyContent: 'center'
    },
    textGroup: {
        marginTop: 20,
        marginBottom: 20,
        alignItems: 'flex-end'
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