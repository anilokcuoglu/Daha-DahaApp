import {StackNavigationProp, StackScreenProps} from '@react-navigation/stack';
import {RootStackParamList} from '../../navigation/RootStackNavigator';
import {Image, Text, Touchable, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import MainButton from '../../components/MainButton/MainButton';
import styles from './DetailPage.styles';
import {ScrollView} from 'react-native-gesture-handler';
import {useApiGetPromotionWithId} from '../../hooks/useApi';
import {SvgIcons} from '../../components';

type Props = StackScreenProps<RootStackParamList, 'DetailPage'>;

const DetailPage = ({route, navigation}: Props) => {
  const {id} = route?.params;

  const {data: DetailData} = useApiGetPromotionWithId(id);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}>
            <SvgIcons.BackButton height={40} width={40} />
          </TouchableOpacity>
          <View style={styles.cardView}>
            <Image
              style={[styles.imageBackground]}
              source={{uri: DetailData?.ImageUrl}}
            />

            <View style={styles.imageView}>
              <Image
                style={styles.image}
                source={{uri: DetailData?.BrandIconUrl}}
              />
            </View>
            <View style={styles.titleView}>
              <Text style={styles.text}>
                {DetailData?.Title.replace(/(<([^>]+)>)/gi, '')}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.descriptionView}>
          <Text style={styles.description}>
            {DetailData?.Description.replace(/(<([^>]+)>)/gi, '')}
          </Text>
        </View>
      </ScrollView>
      <MainButton />
    </SafeAreaView>
  );
};

export default DetailPage;
