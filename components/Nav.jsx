import React from 'react'
import { View, Text, StyleSheet, Button, TouchableNativeFeedback } from 'react-native'
import { windowWidth } from '../style/style'

export default function Nav({ filtreTodo, filterSelected }) {

    const handlePress = (text) => {
        filtreTodo(text)
    }

    const buttonStyle = {
        width: windowWidth / 3,
        padding: 5,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
    }
    
    return (
        <View style={styles.nav} >
            <TouchableNativeFeedback
                onPress={(e) => handlePress('all')}>
                <View style={{
                    ...buttonStyle,
                    backgroundColor: filterSelected === 'all' ? '#54aeff' : '#fff'
                }}>
                    <Text>Tout</Text>
                </View>
            </TouchableNativeFeedback>

            <TouchableNativeFeedback
                onPress={() => handlePress('completed')}>
                <View style={{
                    ...buttonStyle,
                    backgroundColor: filterSelected === 'completed' ? '#54aeff' : '#fff'
                }}
                >
                    <Text>Effectuées</Text>
                </View>
            </TouchableNativeFeedback>


            <TouchableNativeFeedback
                onPress={() => handlePress('pendding')}>
                <View style={{
                    ...buttonStyle,
                    backgroundColor: filterSelected === 'pendding' ? '#54aeff' : '#fff'
                }}>

                    <Text> A effectuées</Text>
                </View>
            </TouchableNativeFeedback>

        </View>
    )
}


const styles = StyleSheet.create({
    nav: {
        width: windowWidth,
        display: 'flex',
        flexDirection: 'row',
        marginTop: 10
    },

})