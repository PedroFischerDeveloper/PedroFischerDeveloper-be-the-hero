import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import {Feather} from '@expo/vector-icons'

import logoImg from '../../assets/logo.png';

import styles from './styles';

export default function Details() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
            </View>  

            <TouchableOpacity onPress={() => {}}>
                <Feather name="arrow-left" size={28} color="#e82041"/>
            </TouchableOpacity>

            <View style={styles.incident}>
                <Text style={[styles.incidentProperty, { marginTop: 0}]}>ONG: </Text> 
                <Text style={styles.incidentValue}>APAD: </Text>
                
                <Text style={styles.incidentProperty}>CASO: </Text> 
                <Text style={styles.incidentValue}>Cadelinha atropelada: </Text>
                
                <Text style={styles.incidentProperty}>Valor: </Text> 
                <Text style={styles.incidentValue}>R$: 120,00</Text>            
            </View>

            <View style={styles.contactBox} >
                <Text style={styles.heroTitle}>
                    Salve o dia!
                </Text>
                <Text style={styles.heroTitle}>
                    Seja o heroi desse caso.
                </Text>
                <Text style={styles.heroDescription}>Entre em contato: </Text>
                <View style={styles.action}>
                    <TouchableOpacity style={styles.action} onPress={() => {}}>
                        <Text style={styles.actionText}>Whatssap</Text>
                        <Text style={styles.actionText}>E-mail</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}