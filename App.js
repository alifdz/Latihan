/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = props => {
  const {navigation} = props;
  return (
    <>
      <SafeAreaView>
        <View>
          <View style={{marginTop: '3%', paddingLeft: '5%', height: 'auto', fontSize: 16}}>
            <Text>
              Nama : Abdul Arifin
            </Text>
              <Text>Subjek : Test Logical</Text>
          </View>
          <View style={{backgroundColor: '#fff', height: 'auto', }}>
            <View style={styles.parentNvgt}>
             <Text style={{marginTop: '5%'}}>Soal Nomor 1 :   </Text>
              <TouchableOpacity
                style={styles.btnNvgt}
                onPress={() => navigation.navigate('OddNumber')}>
                <Text style={styles.textNvgt}>Klik Disini...</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.parentNvgt}>
              <TouchableOpacity
                style={styles.btnNvgt}
                onPress={() => navigation.navigate('SortChar')}>
                <Text style={styles.textNvgt}>Soal Nomor 2</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.parentNvgt}>
              <TouchableOpacity
                style={styles.btnNvgt}
                onPress={() => navigation.navigate('MatchNumber')}>
                <Text style={styles.textNvgt}>Soal Nomor 3</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.parentNvgt}>
              <TouchableOpacity
                style={styles.btnNvgt}
                onPress={() => navigation.navigate('NumberOne')}>
                <Text style={styles.textNvgt}>
                  Soal Nomor 4
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: Colors.white,
  },
  parentNvgt: {
    marginTop: '10%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btnNvgt: {
    alignSelf: 'center',
    width: '40%',
    backgroundColor: 'blue',
    height: 50,
    justifyContent: 'center',
  },
  textNvgt: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
  },
});

export default App;
