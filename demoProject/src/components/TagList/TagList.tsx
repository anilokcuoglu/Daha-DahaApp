import React, {useEffect, useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import styles from './TagList.styles';
import {useApiGetTagList} from '../../hooks/useApi';
import {Image} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {SvgIcons} from '..';

type ItemProps = {
  IconUrl: string;
  Name: string;
  Id?: number;
  Rank?: number;
};

const Item = ({IconUrl, Name}: ItemProps) => (
  <View style={styles.item}>
    <Image style={styles.tinyIcon} source={{uri: IconUrl}} />
    <Text style={styles.title}>{Name}</Text>
  </View>
);

const TagList = () => {
  const {data: tagListData} = useApiGetTagList();

  const [searchText, setSearchText] = useState<string>('');
  const [searchTextTemp, setSearchTextTemp] = useState<string>('');

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSearchText(searchTextTemp);
    }, 300);

    return () => {
      clearTimeout(timeout);
    };
  }, [searchTextTemp]);

  const filteredPromotions = searchText
    ? tagListData?.filter(x =>
        `${x.Name}`.toLowerCase().includes(searchText.toLowerCase()),
      )
    : tagListData;

  return (
    <View style={styles.tagList}>
      <View style={styles.item}>
        <SvgIcons.Search height={24} width={24} />
        <TextInput
          style={styles.input}
          onChangeText={text => setSearchTextTemp(text)}
          value={searchTextTemp}
          placeholder="Fırsat Bul"
        />
      </View>

      <FlatList
        data={filteredPromotions}
        renderItem={({item}) => (
          <Item IconUrl={item.IconUrl} Name={item.Name} />
        )}
        keyExtractor={item => item.Name}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default TagList;
