import React, { useCallback, useMemo, useRef } from "react";
import { Button, FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useTranslation } from "react-i18next";
import {
    BottomSheetModal,
    BottomSheetView,
    BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';
import languages from '../../core/l18n/supported.language.list.json';

const Home = () => {
    const { t, i18n } = useTranslation();

    const bottomSheetModalRef = useRef<BottomSheetModal>(null);

    const snapPoints = useMemo(() => ['25%', '50%'], []);

    const handlePresentModalPress = useCallback(() => {
        bottomSheetModalRef.current?.present();
    }, []);

    const handleSheetChanges = useCallback((index: number) => {
        console.log('handleSheetChanges', index);
    }, []);

    function handleOnPress(code: string) {
        if (i18n.language != code) {
            i18n.changeLanguage(code)
        }
    }

    return (
        <BottomSheetModalProvider>
            <View style={styles.container}>
                <Text style={styles.title}>{t('hello-world')}</Text>
                <Button onPress={handlePresentModalPress} title={t('change-language')} />
                <BottomSheetModal
                    ref={bottomSheetModalRef}
                    index={1}
                    snapPoints={snapPoints}
                    onChange={handleSheetChanges}
                    containerStyle={styles.bottomSheetContainerBackground}
                    
                >
                    <BottomSheetView
                        style={styles.bottomSheetStyle}>
                        <FlatList
                            style={{ padding: 20, }}
                            keyExtractor={(item) => item.id.toString()}
                            data={languages}
                            renderItem={({ item }) => (
                                <TouchableOpacity
                                    onPress={() => { handleOnPress(item.code) }}
                                    style={styles.bottomSheetItemContainer}
                                >
                                    <Text style={styles.bottomSheetItemTitle}>{item.name}</Text>
                                </TouchableOpacity>
                            )}
                        />
                    </BottomSheetView>
                </BottomSheetModal>
            </View>
        </BottomSheetModalProvider>
    );
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontWeight: '500',
        fontSize: 24,
    },
    bottomSheetContainerBackground: {
        backgroundColor: 'rgba(0,0,0,0.50)',
    },
    bottomSheetStyle: {
        flex: 1,
        justifyContent: 'flex-start',
    },
    bottomSheetItemTitle: {
        fontWeight: '500',
        fontSize: 18,
    },
    bottomSheetItemContainer: {
        flex: 1,
        marginBottom: 12,
    }
})