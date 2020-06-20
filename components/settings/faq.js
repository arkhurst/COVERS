import React, { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import * as Animatable from 'react-native-animatable';
import Accordion from 'react-native-collapsible/Accordion';
import { FAQsContent } from '../../data/data';
import font_sizes from '../../constants/font_sizes';
import colors from '../../constants/colors';

export default function FAQComponent() {
  const [state, setState] = useState({
    activeSections: [],
    collapsed: true,
    multipleSelect: false,
  });
  //    const toggleExpanded = () => {
  //     setState({ collapsed: !state.collapsed });
  //   };

  const setSections = (sections) => {
    setState({
      activeSections: sections.includes(undefined) ? [] : sections,
    });
  };

  const renderHeader = (section, _, isActive) => {
    return (
      <Animatable.View
        duration={400}
        style={[styles.header, isActive ? styles.active : styles.inactive]}
        transition="backgroundColor">
        <Text style={styles.headerText}>{section.title}</Text>
      </Animatable.View>
    );
  };

  function renderContent(section, _, isActive) {
    return (
      <Animatable.View
        duration={100}
        style={[styles.content, isActive ? styles.active : styles.inactive]}
        transition="backgroundColor">
        <Animatable.Text
          style={styles.contentText}
          animation={isActive ? undefined : undefined}>
          {section.content}
        </Animatable.Text>
      </Animatable.View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingTop: 30, paddingBottom: 30 }}>
        <Accordion
          activeSections={state.activeSections}
          sections={FAQsContent}
          touchableComponent={TouchableOpacity}
          renderHeader={renderHeader}
          renderContent={renderContent}
          duration={400}
          onChange={setSections}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
  },
  header: {
    padding: 20,
  },
  headerText: {
    fontSize: font_sizes.t3,
    fontFamily: 'AirbnbCereal-Bold',
    letterSpacing: -0.8,
  },
  content: {
    paddingHorizontal: 20,
    backgroundColor: colors.backgroundColor,
    paddingVertical: 10,
  },
  contentText: {
    fontFamily: 'AirbnbCereal-Medium',
    fontSize: font_sizes.t4,
  },
  inactive: {
    // backgroundColor: 'rgba(255,255,255,1)',
  },
  active: {
    // backgroundColor: 'rgba(245,252,255,1)',
  },
});
