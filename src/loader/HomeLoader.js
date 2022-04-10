import {View, StyleSheet, Animated, Platform} from 'react-native';
import React, { Component } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '../common/colors';

class CustomLinearGradient extends Component {
  render() {
    const {locationStart, colorShimmer, widthShimmer} = this.props;
    return (
      <LinearGradient
        colors={colorShimmer}
        style={{flex: 1}}
        start={{x: -1, y: 0.5}}
        end={{x: 2, y: 0.5}}
        locations={[
          locationStart + widthShimmer,
          locationStart + 0.5 + widthShimmer / 2,
          locationStart + 1,
        ]}
      />
    );
  }
}
Animated.LinearGradient =
  Animated.createAnimatedComponent(CustomLinearGradient);

class Shimmer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
      beginShimmerPosition: new Animated.Value(-1),
    };
  }
  componentDidMount() {
    const {autoRun} = this.props;
    if (autoRun) {
      this.loopAnimated();
    }
  }
  loopAnimated() {
    const shimmerAnimated = this.getAnimated();
    const {visible} = this.props;
    shimmerAnimated.start(() => {
      if (!visible) {
        this.loopAnimated();
      }
    });
  }
  getAnimated = () => {
    this.state.beginShimmerPosition.setValue(-1);
    return Animated.timing(this.state.beginShimmerPosition, {
      toValue: 0.5,
      duration: this.props.duration,
      useNativeDriver: false, // Add This line
    });
  };
  render() {
    const {
      width,
      reverse,
      height,
      colorShimmer,
      style,
      widthShimmer,
      children,
      visible,
      backgroundColorBehindBorder,
      hasBorder,
    } = this.props;
    let beginPostioner = -0.7;
    let endPosition = 0.7;
    if (reverse) {
      beginPostioner = 0.7;
      endPosition = -0.7;
    }
    const newValue = this.state.beginShimmerPosition.interpolate({
      inputRange: [-1, 1],
      outputRange: [beginPostioner, endPosition],
    });
    return (
      <View style={!visible ? [{height, width}, styles.container, style] : []}>
        {!visible ? (
          <View style={{flex: 1}}>
            <Animated.LinearGradient
              locationStart={newValue}
              colorShimmer={colorShimmer}
              widthShimmer={widthShimmer}
            />
            <View style={{width: 0, height: 0}}>{this.props.children}</View>
            {((style && style.borderRadius) || hasBorder) &&
            Platform.OS === 'android' ? (
              <View
                style={{
                  position: 'absolute',
                  top: -40,
                  bottom: -40,
                  right: -40,
                  left: -40,
                  borderRadius: width / 2 + 40 / 2,
                  borderWidth: 40,
                  borderColor: backgroundColorBehindBorder,
                }}
              />
            ) : null}
          </View>
        ) : (
          children
        )}
      </View>
    );
  }
}
Shimmer.defaultProps = {
  width: 200,
  height: 15,
  widthShimmer: 0.7,
  duration: 2000,
  colorShimmer: ['#ebebeb','#c5c5c5', '#ebebeb'],
  //colorShimmer={['#242069', '#28236fd6', '#242069']
  reverse: false,
  autoRun: true,
  visible: false,
  backgroundColorBehindBorder: 'white',
  hasBorder: false,
  backgroundColor: 'white',
};

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
  },
});

export default Shimmer;
