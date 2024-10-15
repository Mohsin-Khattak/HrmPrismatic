import CustomFlatList from 'components/atoms/custom-flatlist';
import FormHeader from 'components/atoms/headers/header';
import {Loader} from 'components/atoms/loader';
import ComplainRequestCard from 'components/molecules/complain-request-card';
import {colors} from 'config/colors';
import {mvs} from 'config/metrices';
import {navigate} from 'navigation/navigation-ref';
import React, {useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import Bold from 'typography/bold-text';
import styles from './styles';
import Header1x2x from 'components/atoms/headers/header-1x-2x';

const ComplainRequestList = props => {
  const [loading, setLoading] = useState(false);
  const [select, setSelect] = useState('all');
  const [expandedCard, setExpandedCard] = useState(null); // Track the expanded card by its ID

  const data = [
    {id: 1, status: 'Approved'},
    {id: 2, status: 'Pending'},
    {id: 3, status: 'Approved'},
  ];

  const handlePress = id => {
    // Toggle expansion for the selected card
    setExpandedCard(prevState => (prevState === id ? null : id));
  };

  const renderItem = ({item}) => (
    <ComplainRequestCard
      isExpanded={expandedCard === item.id} // Check if this card is expanded
      item={item}
      onPress={() => handlePress(item.id)} // Toggle expansion on press
    />
  );

  return (
    <View style={styles.container}>
      <Header1x2x back={true} title={'Complain'} />

      <View style={{flex: 1}}>
        {loading ? (
          <Loader />
        ) : (
          <CustomFlatList
            showsVerticalScrollIndicator={false}
            data={data}
            renderItem={renderItem}
            contentContainerStyle={{
              paddingBottom: mvs(20),
              paddingHorizontal: mvs(20),
            }}
          />
        )}
        <TouchableOpacity
          onPress={() => navigate('AdvanceRequest')}
          style={styles.taskBtn}>
          <Bold color={colors.primary} fontSize={mvs(28)} label={'+'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ComplainRequestList;
