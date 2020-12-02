import React from 'react';
import { SafeAreaView, View, Pressable } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';

import styles from './styles';
import BackButton from '../BackButton';
import CustomText from '../CustomText';
import { TextInput } from 'react-native-gesture-handler';

const CustomHeader = ({
  title,
  headerLeft = 'back',
  headerTitleAlign = 'left',
  headerRightContents = [],
  searchBar,
  searchBarProps,
}) => {
  const iconsColor = searchBar ? 'black' : 'white';
  const menuButton = () => {
    return (
      <Pressable style={styles.homeButton}>
        <Ionicons name="md-menu" style={styles.homeButtonIcon} />
      </Pressable>
    );
  };

  const icons = {
    back: () => (
      <BackButton
        iconStyle={searchBar ? { color: iconsColor } : undefined}
        containerStyle={styles.backButton}
      />
    ),
    menu: menuButton,
    more: (
      <Ionicons name="md-more" style={[styles.icon, { color: iconsColor }]} />
    ),
  };

  const renderLeftContent = icons[headerLeft];
  const renderRightContent = () =>
    headerRightContents.map(({ type, onPress }) => (
      <Pressable onPress={onPress} style={styles.rightButton}>
        {icons[type]}
      </Pressable>
    ));

  return (
    <View>
      <StatusBar translucent={false} style="light" backgroundColor="#000" />
      <SafeAreaView style={styles.safeArea} />
      <View style={styles.container}>
        {searchBar ? (
          <View style={styles.searchContainer}>
            {renderLeftContent()}
            <TextInput
              style={styles.searchInput}
              placeholder={searchBarProps.placeholder}
              onChangeText={searchBarProps.onChangeText}
            />
            {renderRightContent()}
          </View>
        ) : (
          <>
            {renderLeftContent()}
            <CustomText style={styles.title}>{title}</CustomText>
            {renderRightContent()}
          </>
        )}
      </View>
    </View>
  );
};

export default CustomHeader;
