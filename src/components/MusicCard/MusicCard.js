import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './MusicCard.style'

const MusicCard = ({ music }) => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={{ uri: music.imageUrl }}
            />
            <View style={styles.inner_container}>
                <Text style={styles.title}>{music.title}</Text>
                <View style={styles.content_container}>
                    <View style={styles.info_container}>
                        <Text style={styles.artist}>{music.artist}</Text>
                        <Text style={styles.year}>{music.year}</Text>
                    </View>
                    {music.isSoldOut &&
                        <View style={styles.isSoldout}>
                            <Text style={styles.soldOutTitle}>TÜKENDİ</Text>
                        </View>}
                </View>
            </View>
        </View>
    );
};

export default MusicCard;