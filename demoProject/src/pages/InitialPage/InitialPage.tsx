import React from 'react';
import {Text, View} from 'react-native';
import {useApiGetTagList} from '../../hooks/useApi';

const InitialPage = () => {
  const {data} = useApiGetTagList();

  console.log({data});

  return (
    <View>
      <Text>Something here on my root stack app</Text>
      <Text>{data && data[0].Rank}</Text>
    </View>
  );
};

export default InitialPage;
