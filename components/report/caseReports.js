import React,{useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FAB from 'react-native-fab';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { useIsFocused } from '@react-navigation/native';
import { covertDateTime } from '../../constants/constants';
import ReportModal from '../../screens/report/reportModal';
import { height} from '../../constants/constants'

export default function CaseReports({reportFor, contact, description, date }) {

  const [visible, setVisible] = useState(false);
  const isFocused = useIsFocused();
  
  function close() { 
    setVisible(false); 
  }
  return (
   <View>
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginVertical: 10,
        }}>
        <Text style={styles.mainTitle}>{reportFor}</Text>
        <Text style={styles.mainText}>{covertDateTime(date)}</Text>
      </View>
      <Text style={styles.book}>{description}</Text>
      <Text style={styles.book}>{contact}</Text>
    </View>
              <FAB
                 onClickAction={() => setVisible(true)}
                 style={{position: 'absolute',width: 65,height: 65, top:height*0.58  }}
                 buttonColor="black"
                 iconTextColor="#FFFFFF"
                 visible={isFocused}
                 iconTextComponent={<Ionicons name="ios-add" />}  />
               <ReportModal visible={visible} close={close} />
     </View>
  );
}  

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
    marginHorizontal: 20,
  },
  mainText: {
    fontFamily: 'AirbnbCereal-Bold',
    letterSpacing: -0.6,
    color: 'grey',
  },
  mainTitle: {
    fontFamily: 'AirbnbCereal-Bold',
    letterSpacing: -0.6,
    fontSize: 15,
  },
  book: {
    fontFamily: 'AirbnbCereal-Book',
    letterSpacing: -0.3,
    fontSize: 14,
  },
});