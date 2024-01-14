import React, {useState} from 'react';
import {Dimensions, Image, Text, View} from 'react-native';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import Carousel from 'react-native-reanimated-carousel';
import styles from './CarouselCard.styles';
import {useApiGetPromotionsList} from '../../hooks/useApi';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../navigation/RootStackNavigator';

const CarouselCard = () => {
  const PAGE_WIDTH = Dimensions.get('window').width;
  const progressValue = useSharedValue<number>(0);
  const {data: PromotionListData} = useApiGetPromotionsList();

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const baseOptions = {
    vertical: false,
    width: PAGE_WIDTH,
    height: PAGE_WIDTH * 1.3,
  } as const;

  const colors = [
    '#26292E',
    '#899F9C',
    '#B3C680',
    '#5C6265',
    '#F5D399',
    '#F1F1F1',
  ];

  return (
    <View>
      <Carousel
        {...baseOptions}
        style={{
          width: PAGE_WIDTH,
          marginBottom: 100,
        }}
        autoPlay={false}
        autoPlayInterval={1500}
        onProgressChange={(_, absoluteProgress) =>
          (progressValue.value = absoluteProgress)
        }
        mode="parallax"
        modeConfig={{
          parallaxScrollingScale: 0.89,
          parallaxScrollingOffset: 50,
        }}
        data={PromotionListData || []}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.cardView}
            onPress={() =>
              navigation.navigate('DetailPage', {
                id: item.Id,
              })
            }>
            <Image
              style={[
                styles.imageBackground,
                item.ListButtonTextBackGroudColor
                  ? {backgroundColor: item.ListButtonTextBackGroudColor}
                  : null,
              ]}
              source={{uri: item.ImageUrl}}
            />

            <View style={styles.imageView}>
              <Image style={styles.image} source={{uri: item.BrandIconUrl}} />
            </View>

            <View style={styles.bottomCardView}>
              <Text
                style={[
                  {
                    color: item.ListButtonTextBackGroudColor,
                  },
                  styles.tagText,
                ]}>
                Daha Daha
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />

      {!!progressValue && (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: 100,
            bottom: 100,
            alignSelf: 'center',
            marginVertical: 10,
          }}>
          {colors.map((backgroundColor, index) => {
            return (
              <PaginationItem
                backgroundColor={backgroundColor}
                animValue={progressValue}
                index={index}
                key={index}
                length={colors.length}
              />
            );
          })}
        </View>
      )}
    </View>
  );
};

const PaginationItem: React.FC<{
  index: number;
  backgroundColor: string;
  length: number;
  animValue: Animated.SharedValue<number>;
  isRotate?: boolean;
}> = props => {
  const {animValue, index, length, backgroundColor, isRotate} = props;
  const width = 10;

  const animStyle = useAnimatedStyle(() => {
    let inputRange = [index - 1, index, index + 1];
    let outputRange = [-width, 0, width];

    if (index === 0 && animValue?.value > length - 1) {
      inputRange = [length - 1, length, length + 1];
      outputRange = [-width, 0, width];
    }

    return {
      transform: [
        {
          translateX: interpolate(
            animValue?.value,
            inputRange,
            outputRange,
            Extrapolate.CLAMP,
          ),
        },
      ],
    };
  }, [animValue, index, length]);
  return (
    <View
      style={{
        backgroundColor: 'white',
        width,
        height: width,
        borderRadius: 50,
        overflow: 'hidden',
        transform: [
          {
            rotateZ: isRotate ? '90deg' : '0deg',
          },
        ],
      }}>
      <Animated.View
        style={[
          {
            borderRadius: 50,
            backgroundColor,
            flex: 1,
          },
          animStyle,
        ]}
      />
    </View>
  );
};

export default CarouselCard;
