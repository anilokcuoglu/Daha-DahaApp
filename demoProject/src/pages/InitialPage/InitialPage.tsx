import React from 'react';
import {Text, View} from 'react-native';
import {useApiGetTagList} from '../../hooks/useApi';
import styles from './InitialPage.styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import {SvgIcons} from '../../components';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import TagList from '../../components/TagList/TagList';
import CarouselCard from '../../components/Carousel/CarouselCard';

const InitialPage = () => {
  return (
    <SafeAreaView edges={['top']} style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.topBar}>
          <SvgIcons.DahaDaha width={81} height={40} />
          <View style={styles.rightTopBar}>
            <TouchableOpacity style={styles.loginButton}>
              <Text style={styles.loginText}>Giriş Yap</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.userProfile}>
              <SvgIcons.Profile width={16} height={17} />
            </TouchableOpacity>
          </View>
        </View>

        <TagList />
        <CarouselCard />
      </ScrollView>
    </SafeAreaView>
  );
};

export default InitialPage;
