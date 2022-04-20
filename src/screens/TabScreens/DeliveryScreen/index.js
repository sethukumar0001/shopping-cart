import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  TextInput,
  Text,
  Dimensions,
  View,
  SectionList,
  Image,
  StyleSheet,
  FlatList,
} from 'react-native';
import CircleSlider from '../../../components/CircleSlider';
import FlatListSlider from '../../../components/FlatlistSlider/FlatListSlider';
import Preview from '../../../components/FlatlistSlider/Preview';
import HorizontalSlider from '../../../components/HorizontalSlider';
import OffersSlider from '../../../components/OffersSlider';
import VerticalSlider from '../../../components/VerticalSlider';
import {hp, wp} from '../../../dimensions';
import {styles} from './styles';
// https://unsplash.com/s/photos/dish

function DeliveryScreen(props) {
  /* -------------------------------------------------------------------------- */
  /*                               UseState Section                             */
  /* -------------------------------------------------------------------------- */
  const [isLoading, setIsLoading] = useState(false);
  const [allCategoriesList, setAllCategoriesList] = useState([]);
  const [data] = useState([
    {
      image:
        'https://images.unsplash.com/photo-1631515242808-497c3fbd3972?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2132&q=80',
      desc: 'Silent Waters in the mountains in midst of Himilayas',
    },
    {
      image:
        'https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2088&q=80',
      desc: 'Red fort in India New Delhi is a magnificient masterpeiece of humans',
    },
    {
      image:
        'https://images.unsplash.com/photo-1633945274417-ab205ae69d10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      desc: 'Sample Description below the image for representation purpose only',
    },
    {
      image:
        'https://images.unsplash.com/photo-1599043513900-ed6fe01d3833?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      desc: 'Sample Description below the image for representation purpose only',
    },
    {
      image:
        'https://images.unsplash.com/photo-1512152272829-e3139592d56f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      desc: 'Sample Description below the image for representation purpose only',
    },
  ]);

  const [data1] = useState([
    {
      image:
        'https://images.unsplash.com/photo-1610057099443-64836ddec508?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
      desc: 'Sample Description below the image for representation purpose only',
    },
    {
      image:
        'https://images.unsplash.com/photo-1598514983318-2f64f8f4796c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      desc: 'Silent Waters in the mountains in midst of Himilayas',
    },
    {
      image:
        'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      desc: 'Red fort in India New Delhi is a magnificient masterpeiece of humans',
    },
    {
      image:
        'https://images.unsplash.com/photo-1622768505337-ed0f06f22b54?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80',
      desc: 'Sample Description below the image for representation purpose only',
    },
    {
      image:
        'https://images.unsplash.com/photo-1512152272829-e3139592d56f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      desc: 'Sample Description below the image for representation purpose only',
    },
  ]);
  const SECTIONS = [
    {
      // title: 'Made for you',
      horizontal: true,
      data: [
        {
          key: '1',
          text: 'Item text 1',
          uri: 'https://images.unsplash.com/photo-1610057099443-64836ddec508?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
        },
        {
          key: '2',
          text: 'Item text 2',
          uri: 'https://images.unsplash.com/photo-1598514983318-2f64f8f4796c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
        },

        {
          key: '3',
          text: 'Item text 3',
          uri: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
        },
        {
          key: '4',
          text: 'Item text 4',
          uri: 'https://images.unsplash.com/photo-1622768505337-ed0f06f22b54?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80',
        },
        {
          key: '5',
          text: 'Item text 5',
          uri: 'https://images.unsplash.com/photo-1512152272829-e3139592d56f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
        },
      ],
    },
  ];
  const SECTIONS1 = [
    {
      // title: 'Made for you',
      horizontal: false,
      data: [
        {
          key: '1',
          text: 'Item text 1',
          uri: 'https://images.unsplash.com/photo-1610057099443-64836ddec508?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
        },
        {
          key: '2',
          text: 'Item text 2',
          uri: 'https://images.unsplash.com/photo-1598514983318-2f64f8f4796c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
        },

        {
          key: '3',
          text: 'Item text 3',
          uri: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
        },
        {
          key: '4',
          text: 'Item text 4',
          uri: 'https://images.unsplash.com/photo-1622768505337-ed0f06f22b54?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80',
        },
        {
          key: '5',
          text: 'Item text 5',
          uri: 'https://images.unsplash.com/photo-1512152272829-e3139592d56f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
        },
      ],
    },
  ];
  const OFFERS = [
    {
      // title: 'Made for you',
      horizontal: true,
      data: [
        {
          key: '1',
          text: 'Item text 1',
          uri: 
          'https://s3-ap-southeast-1.amazonaws.com/bsy/iportal/images/zomato-banner-change_74B641A1E3AE1100D7015078982A3409.jpg'
        },
        {
          key: '2',
          text: 'Item text 2',
          uri:
          'https://1.bp.blogspot.com/-WNaYoUomcWk/YFttaeIyqgI/AAAAAAAAFyM/8QsgI01mWU0Zb3XFj-3cQerCZRBAysglQCLcBGAsYHQ/s800/Zomato%2Bsbi.png'
        }
      ],
    },
  ];
  /* -------------------------------------------------------------------------- */
  /*                               UseEffect Section                            */
  /* -------------------------------------------------------------------------- */
  useEffect(() => {
    getAllCategoriesList();
  }, []);

  /* -------------------------------------------------------------------------- */
  /*                               API Section                                  */
  /* -------------------------------------------------------------------------- */
  const getAllCategoriesList = async () => {};
  /* -------------------------------------------------------------------------- */
  /*                               Onchange section                             */
  /* -------------------------------------------------------------------------- */
  const screenWidth = Math.round(Dimensions.get('window').width);

  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView style={styles.scroll}>
        <FlatListSlider
          data={data}
          height={hp(200)}
          timer={4000}
          imageKey={'image'}
          local={false}
          width={screenWidth}
          separator={0}
          loop={true}
          autoscroll={false}
          // currentIndexCallback={index => console.log('Index', index)}
          onPress={item => alert(JSON.stringify(item))}
          indicator={true}
          animation
        />
        <View style={styles.separator} />
        <FlatListSlider
          data={data1}
          width={wp(255)}
          timer={4000}
          component={<Preview />}
          separator={0}
          onPress={item => alert(JSON.stringify(item))}
          indicatorActiveWidth={10}
          autoscroll={false}
          indicator={false}
          contentContainerStyle={styles.contentStyle}
        />
        <View style={styles.separator} />
        <Text style={styles.textHeader}>Categories</Text>
        <CircleSlider data={SECTIONS} />
        <Text style={styles.textHeader}>Offers</Text>
        <OffersSlider data={OFFERS} />
        <Text style={styles.textHeader}>Eat what makes you happy</Text>
        <HorizontalSlider data={SECTIONS} />
        <Text style={styles.textHeader}>Recommended for you</Text>
        <HorizontalSlider data={SECTIONS} />

        <Text style={styles.textHeader}>Featured restaurants</Text>
        <HorizontalSlider data={SECTIONS} />

        <Text style={styles.textHeader}>Amazing biryani</Text>
        <HorizontalSlider data={SECTIONS} />

        <Text style={styles.textHeader}>Lunch bestsellers</Text>
        <HorizontalSlider data={SECTIONS} />

        <Text style={styles.textHeader}>Pizza for lunch</Text>
        <HorizontalSlider data={SECTIONS} />

        <Text style={styles.textHeader}>Value for money</Text>
        <HorizontalSlider data={SECTIONS} />

        <Text style={styles.textHeader}>Must try shawarma</Text>
        <HorizontalSlider data={SECTIONS} />

        <Text style={styles.textHeader}>222 restaurants around you</Text>
        <VerticalSlider data={SECTIONS1} />
        <View style={{marginTop:10}}></View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default DeliveryScreen;