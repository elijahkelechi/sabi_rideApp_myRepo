import React, { useState } from 'react';
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import {
    LayoutAnimation,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    UIManager,
    View
} from 'react-native';

if (Platform.OS === 'android') {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
}

export default function FAQ() {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            {[1, 2, 3,].map((x, i) => (
                <Item key={x} i={i} />
            ))}
        </ScrollView>
    );
}

function Item({ i }) {
    const [open, setopen] = useState(false);
    const onPress = () => {
        LayoutAnimation.easeInEaseOut();
        setopen(!open);
    };
    return (
        <TouchableOpacity style={styles.item} onPress={onPress} activeOpacity={1}>
            <View style={styles.row}>
                <View style={{flexDirection: 'row', gap: 10}}>
            <MaterialCommunityIcons name='help-circle-outline' size={20} color={'#000'}/>
                <Text style={styles.text}>
                {i === 0 ? 'I can not see new orders' : 
                i === 1 ? 'How do i go offline?' : 
                'My requests keep getting canceled'}
                </Text>
                </View>
                <Text>{open ?
                <View style={styles.dir}>
                 <Entypo name='triangle-up' size={12} color={'#0088cd'}/>
                </View>
                 : 
                 <View style={styles.dir}>
                   <Entypo name='triangle-down' size={12} color={'#0088cd'}/>
                 </View>
                }
                 </Text>
            </View>
            {open &&
                [1].map(x => (
                    <Text key={x} style={styles.subItem}>
                        {i === 0 ? '50million super mpower our recruit roasted tia-tia down-payment from from youths umbreleda. Generated cassava 50million bala corn garri bala townhall from bala.' : 
                        i === 1 ? 'Bala blu agbado townhall bala blu bala eba recruit garri different different bala. Roasted broooom highway garri army super townhall from.' : 
                        'Bala blu pdapc roasted transmission highway transmission eba down-payment bala tia-tia mpower.'}
                    </Text>
                ))
                }
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 30,
        paddingTop: 25,
        backgroundColor: '#fff',
        flex: 1
    },
    item: {
        width: '100%',
        // overflow: 'hidden',
        paddingVertical: 10,
        marginBottom: 5,
    },
    subItem: {
        padding: 5,
        fontFamily: 'Baloo-2-400',
        fontSize: 12,
        marginTop: 15

    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    text: {
      fontFamily: 'Baloo-2-500',
      fontSize: 14,
    },
    dir: {
      backgroundColor: '#0089cd37',
      // width: 22,
      // height: 22
      padding: 8,
      borderRadius: 20,
      alignItems: 'center',
      justifyContent: 'center'
    }
});