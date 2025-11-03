import React, {ReactNode} from "react";
import {View, Text} from 'react-native';
import styles from './header.styles';

type Props = {
    title: string;
};

export default function Header({title}: Props){
    return(
        <View style={styles.container}>
            <Text style ={styles.title}>{title}</Text>
        </View>
    );
}