import {Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {COLORS} from "@/constants/ColorPallet";
import {Icon, TextInput} from "react-native-paper";
import {useState} from "react";

const logo = require('@/assets/logo/Wattpad_logo.png');

export default function SignUpScreen({navigation}: any) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [displayName, setDisplayName] = useState('');
    return (
        <ScrollView style={styles.container}>
            <View style={styles.logoWrapper}>
                <Image source={logo} style={styles.logo} resizeMode={'contain'}/>
            </View>
            <View style={styles.inputOuter}>
                <View style={styles.formGroup}>
                    <TextInput
                        label={'Root Email'}
                        value={email}
                        mode={'outlined'}
                        onChangeText={text => setEmail(text)}
                    />
                </View>
                <View style={styles.formGroup}>
                    <TextInput
                        label={'Password'}
                        value={password}
                        secureTextEntry={true}
                        mode={'outlined'}
                        onChangeText={text => setPassword(text)}
                    />
                </View>
                <View style={styles.formGroup}>
                    <TextInput
                        label={'Display name'}
                        value={displayName}
                        mode={'outlined'}
                        onChangeText={text => setDisplayName(text)}
                    />
                </View>
                <TouchableOpacity style={styles.button} onPress={() => {
                    navigation.navigate('VerifyEmail')
                }}>
                    <Text style={styles.buttonText}>Register</Text>
                </TouchableOpacity>
                <Text style={styles.separateText}>OR</Text>
                <View style={styles.socialLoginWrapper}>
                    <TouchableOpacity style={styles.iconOuter} onPress={() => {
                    }}>
                        <Icon size={20} source={'google'} color={COLORS.light}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconOuter} onPress={() => {
                    }}>
                        <Icon size={20} source={'facebook'} color={COLORS.light}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconOuter} onPress={() => {
                    }}>
                        <Icon size={20} source={'github'} color={COLORS.light}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconOuter} onPress={() => {
                    }}>
                        <Icon size={20} source={'twitter'} color={COLORS.light}/>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={{...styles.button, backgroundColor: COLORS.primary}} onPress={() => {
                }}>
                    <Text style={styles.buttonText}>Already have an account</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create(
    {
        iconOuter: {
            backgroundColor: COLORS.darkGray,
            width: 50,
            height: 50,
            borderRadius: 50,
            alignItems: 'center',
            justifyContent: 'center'
        },
        socialLoginWrapper: {
            flexDirection: 'row',
            marginTop: 20,
            justifyContent: 'space-around'
        },
        separateText: {
            textAlign: 'center',
            marginTop: 50
        },
        buttonText: {
            color: COLORS.light
        },
        button: {
            backgroundColor: COLORS.blue,
            height: 50,
            marginTop: 30,
            borderRadius: 3,
            alignItems: 'center',
            justifyContent: 'center'
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
    }
)