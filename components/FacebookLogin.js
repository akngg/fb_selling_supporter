import { Component, useRef, useEffect } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { connect } from "react-redux";
import { login } from "../redux/actions"
import * as Facebook from "expo-auth-session/providers/facebook";
import callServices from "../services/services"
import { useSelector, useDispatch } from 'react-redux'



function FacebookLogin({ onLogin }) {
    const user = useSelector(state => state.user);
    const userRef = useRef(user);
    useEffect(() => {
        userRef.current = user; // update the reference when count changes
    }, [user]);

    // render() {
    const [request, response, prompt] = Facebook.useAuthRequest({
        clientId: "532015669635491",
        redirectUri: "https://scanfb.top/fb_selling_supporter/redirect.html",
    });
    const handlePress = async () => {
        //await Linking.openURL(`https://www.facebook.com/v21.0/dialog/oauth?response_type=token&display=popup&client_id=532015669635491&redirect_uri=${encodeURIComponent("https://scanfb.top/fb_selling_supporter/redirect.html")}&auth_type=rerequest&scope=user_payment_tokens%2Cemail%2Cpublic_profile`);
        const result = await prompt();
        // Get public ip
        fetch("https://api.ipify.org?format=json")
            .then((response) => response.json())
            .then((data) => {
                console.log("public_ip : ", data.ip);
                callbackTakeAccessToken(data.ip);
            })
            .catch((error) => {
                alert("Cannot get public ip");
                alert(error);
            });


        const callbackTakeAccessToken = (public_ip) => {
            callServices("take_access_token", {
                public_ip: public_ip
            }, callbackUpdateUserInfo);
        };

        const callbackUpdateUserInfo = (res) => {
            console.log("res : ", res);
            if (res.success === false) {
                alert(JSON.stringify(res));
            }
            else {
                console.log("token : ", res.data);
                access_token = res.data;
                fetch(`https://graph.facebook.com/me?fields=id,name,picture.type(normal)&access_token=${access_token}`)
                    .then((res) => res.json())
                    .then((info) => {
                        console.log("success");
                        console.log("info : ", info);
                        alert("Đăng nhập thành công");
                        alert(JSON.stringify(info));
                        onLogin(info);
                        const user = userRef.current;
                        console.log("user", user);
                    })
                    .catch((error) => {
                        console.log("error");
                        console.log("error : ", error);
                        alert(JSON.stringify(error));
                    });
            }
        };
    };
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.loginButton} onPress={handlePress}>
                <Text style={styles.loginButtonText}>TEST BaUTTON</Text>
            </TouchableOpacity>
            <Text style={styles.text}>{JSON.stringify(user)}</Text>
        </View>);
    // }
}
export default connect(
    state => {
        return {
            user: state.user,
        };
    },
    dispatch => {
        return {
            onLogin: userInfo => dispatch(login(userInfo)),
        }
    }
)(FacebookLogin);

const styles = StyleSheet.create({
    menuText: {
        color: '#000',
        fontSize: 18,
        marginVertical: 10,
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
    },
    text: {
        fontSize: 24,
        fontWeight: "bold",
    },
    loginButton: {
        backgroundColor: "#1877F2",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginTop: 20,
    },
    loginButtonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
});
