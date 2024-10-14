import CustomFlatList from 'components/atoms/custom-flatlist';
import FormHeader from 'components/atoms/headers/header';
import {Loader} from 'components/atoms/loader';
import {Row} from 'components/atoms/row';
import LeaveRequestCard from 'components/molecules/leave-request-card';
import {colors} from 'config/colors';
import {mvs} from 'config/metrices';
import React, {useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import Regular from 'typography/regular-text';
import styles from './styles';
import Bold from 'typography/bold-text';
import {navigate} from 'navigation/navigation-ref';

const LeaveRequestList = props => {
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
    <LeaveRequestCard
      isExpanded={expandedCard === item.id} // Check if this card is expanded
      item={item}
      onPress={() => handlePress(item.id)} // Toggle expansion on press
    />
  );

  return (
    <View style={styles.container}>
      <FormHeader
        back={true}
        title={'Leave Request'}
        countTitle={'15'}
        countTitleOne={'05'}
        countTitleTwo={'02'}
        titleOne={'Total Leave'}
        titleTwo={'Approve'}
        titleThree={'Pending'}
      />
      <View style={{marginTop: mvs(70), flex: 1}}>
        <Row style={{paddingHorizontal: mvs(20)}}>
          <TouchableOpacity
            onPress={() => setSelect('all')}
            style={{
              borderBottomWidth: mvs(1),
              borderBottomColor:
                select === 'all' ? colors.primary : colors.white,
            }}>
            <Regular
              label={'All'}
              color={select === 'all' ? colors.primary : colors.halfWhite}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setSelect('annual')}
            style={{
              borderBottomWidth: mvs(1),
              borderBottomColor:
                select === 'annual' ? colors.primary : colors.white,
            }}>
            <Regular
              label={'Annual'}
              color={select === 'annual' ? colors.primary : colors.halfWhite}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setSelect('personal')}
            style={{
              borderBottomWidth: mvs(1),
              borderBottomColor:
                select === 'personal' ? colors.primary : colors.white,
            }}>
            <Regular
              label={'Personal'}
              color={select === 'personal' ? colors.primary : colors.halfWhite}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setSelect('sick')}
            style={{
              borderBottomWidth: mvs(1),
              borderBottomColor:
                select === 'sick' ? colors.primary : colors.white,
            }}>
            <Regular
              label={'Sick'}
              color={select === 'sick' ? colors.primary : colors.halfWhite}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setSelect('vacation')}
            style={{
              borderBottomWidth: mvs(1),
              borderBottomColor:
                select === 'vacation' ? colors.primary : colors.white,
            }}>
            <Regular
              label={'Vacation'}
              color={select === 'vacation' ? colors.primary : colors.halfWhite}
            />
          </TouchableOpacity>
        </Row>
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
          onPress={() => navigate('LeaveRequest')}
          style={styles.taskBtn}>
          <Bold color={colors.primary} fontSize={mvs(28)} label={'+'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LeaveRequestList;
