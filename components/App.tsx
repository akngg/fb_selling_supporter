import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated, Dimensions } from 'react-native';
import Onboarding from './Onboarding';
import { Provider } from 'react-redux';
import { store } from '../redux/store'


const App = () => {
    const [isPassedOnboarding, setIsPassedOnboarding] = useState(false);
    const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
    const slideAnim = useState(new Animated.Value(Dimensions.get('window').width))[0]; // Vị trí menu
    const [selectedContent, setSelectedContent] = useState('chatgpt'); // Nội dung chính
    const props = {
        passOnboarding: () => { setIsPassedOnboarding(true); }
    }
    const toggleMenu = () => {
        Animated.timing(slideAnim, {
            toValue: isHamburgerOpen ? Dimensions.get('window').width : 0,
            duration: 300,
            useNativeDriver: true,
        }).start();
        setIsHamburgerOpen(!isHamburgerOpen);
    };

    return (
        <Provider store={store}>
            <View style={styles.container}>
                {!isPassedOnboarding ? <Onboarding {...props} /> :
                    <View style={styles.container}>
                        {/* Hamburger Icon */}
                        <TouchableOpacity style={styles.hamburger} onPress={toggleMenu}>
                            <View style={styles.line} />
                            <View style={styles.line} />
                            <View style={styles.line} />
                        </TouchableOpacity>

                        {/* Animated Menu */}
                        <Animated.View style={[styles.menu, { transform: [{ translateX: slideAnim }] }]}>
                            <TouchableOpacity>
                                <Text style={styles.menuText}>Theo dõi nhóm</Text>
                            </TouchableOpacity>
                        </Animated.View>

                        <View style={styles.content}>
                        </View>
                    </View>
                }
            </View>
        </Provider>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    hamburger: {
        position: 'absolute',
        top: 50,
        right: 20,
        zIndex: 10,
    },
    line: {
        width: 30,
        height: 3,
        backgroundColor: 'black',
        marginVertical: 5,
    },
    menu: {
        position: 'absolute',
        top: 0,
        right: 0,
        height: '100%',
        width: '70%',
        backgroundColor: '#333',
        padding: 20,
        justifyContent: 'center',
    },
    menuText: {
        color: '#fff',
        fontSize: 18,
        marginVertical: 10,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default App;
