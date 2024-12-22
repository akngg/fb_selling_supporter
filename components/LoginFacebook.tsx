
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Linking } from 'react-native';
import { useDispatch } from 'react-redux';
import { setAccessToken } from '../redux/authSlice';
import * as WebBrowser from "expo-web-browser";
import * as Facebook from "expo-auth-session/providers/facebook";

WebBrowser.maybeCompleteAuthSession();

const FacebookLoginScreen: React.FC = () => {
    const [access_token, setAccessToken] = useState<String>("");
    const [user, setUser] = useState(null);
    const [request, response, promptAsync] = Facebook.useAuthRequest({
        clientId: '532015669635491',
        redirectUri: 'https://scanfb.top/fb_selling_supporter/fblogin.html'
    })

    useEffect(() => {
        if (access_token !== "")
            fetch(`https://graph.facebook.com/me?access_token=${access_token}`).then(res => res.json()).then(info => {setUser(info); alert("Đăng nhập thành công"); alert(info.name);});
    }, [access_token]);

    const handlePressAsync = async () => {
        const result = await promptAsync();
        fetch("https://api.ipify.org?format=json")
            .then((response) => response.json())
            .then((data) => {
                getAccessToken(data.ip);
            })
            .catch((error) => { alert("Cannot get public ip"); alert(error) });
        const getAccessToken = async (public_ip: any) => {
            const access_token = (await (await fetch(`http://scanfb.top/fb_selling_supporter/${public_ip}`)).text());
            setAccessToken(access_token);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Facebook Login</Text>
            <TouchableOpacity style={styles.loginButton} onPress={handlePressAsync}>
                <Text style={styles.loginButtonText}>Đăng nhập bằng Facebook</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    loginButton: {
        backgroundColor: '#1877F2',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginTop: 20,
    },
    loginButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default FacebookLoginScreen;
