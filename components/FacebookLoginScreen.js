import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
} from "react-native";
import React, { Component } from "react";
// import * as WebBrowser from "expo-web-browser";
// import * as Facebook from "expo-auth-session/providers/facebook";
// import callServices from "../services/services"
// import { connect } from "react-redux";
// import { login } from "../redux/actions"

// WebBrowser.maybeCompleteAuthSession();

export default class FacebookLoginScreen extends Component() {
    render() {
        const user = null;
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.loginButton}>
                    <Text style={styles.loginButtonText}>TEST BUTTON</Text>
                </TouchableOpacity>
            </View>
        );
    };
}


// class FacebookLoginScreen1 extends Component() {
//     render() {
//         // const [request, response, prompt] = Facebook.useAuthRequest({
//         //     clientId: "532015669635491",
//         //     redirectUri: "https://scanfb.top/fb_selling_supporter/redirect.html",
//         // });

//         const handlePress = () => {
//             // await Linking.openURL(`https://www.facebook.com/v21.0/dialog/oauth?response_type=token&display=popup&client_id=532015669635491&redirect_uri=${encodeURIComponent("https://scanfb.top/fb_selling_supporter/redirect.html")}&auth_type=rerequest&scope=user_payment_tokens%2Cemail%2Cpublic_profile`);
//             // const result = prompt().then(() => {
//             //     // Get public ip
//             //     fetch("https://api.ipify.org?format=json")
//             //         .then((response) => response.json())
//             //         .then((data) => {
//             //             callbackTakeAccessToken(data.ip);
//             //         })
//             //         .catch((error) => {
//             //             alert("Cannot get public ip");
//             //             alert(error);
//             //         });
//             // });


//             // const callbackTakeAccessToken = (public_ip) => {
//             //     callServices("take_access_token", {
//             //         public_ip: public_ip
//             //     }, callbackUpdateUserInfo);
//             // };

//             // const callbackUpdateUserInfo = (res) => {
//             //     if (res.success == false) {
//             //         alert(JSON.stringify(res));
//             //     }
//             //     else {
//             //         access_token = res.data
//             //         fetch(`https://graph.facebook.com/me?access_token=${access_token}`)
//             //             .then((res) => res.json())
//             //             .then((info) => {
//             //                 alert("Đăng nhập thành công");
//             //                 alert(info.name);
//             //                 onLogin()
//             //             });
//             //     }
//             // };
//         };

//         return (
//             <View style={styles.container}>
//                 {/* <Text style={styles.text}>Facebook Login</Text>
//                 <TouchableOpacity style={styles.loginButton} onPress={handlePressAsync}>
//                     <Text style={styles.loginButtonText}>Đăng nhập bằng Facebook</Text>
//                 </TouchableOpacity> */}
//                 <TouchableOpacity style={styles.loginButton} onPress={handlePress}>
//                     <Text style={styles.loginButtonText}>TEST BUTTON</Text>
//                 </TouchableOpacity>
//                 {/* {user == null ?
//                     <Text style={styles.text}>CHƯA ĐĂNG NHẬP</Text>
//                     :
//                     <Text style={styles.text}>{JSON.stringify(user)}</Text>
//                 } */}
//             </View>
//         );
//     }
// }
// connect(
//     state => {
//         return {
//             user: state.user,
//         };
//     },
//     dispatch => {
//         return {
//             onLogin: (userInfo) => dispatch(login(userInfo)),
//         }
//     }
// )(FacebookLoginScreen);

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
