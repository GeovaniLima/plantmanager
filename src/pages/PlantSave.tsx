import React, { useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Platform,
  TouchableOpacity
} from 'react-native';
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';

import { getBottomSpace } from "react-native-iphone-x-helper";
import { format, isBefore } from "date-fns";
import { SvgFromUri } from "react-native-svg";
import { useRoute } from "@react-navigation/core";

import { Button } from "../components/Button";

import waterdrop from '../assets/waterdrop.png';
import colors from "../styles/colors";
import fonts from "../styles/fonts";
import { PlantProps } from "../libs/storage";

interface Params {
  plant: PlantProps
}

export function PlantSave() {
  const [selectedDateTime, setSelectedDateTime] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(Platform.OS === 'ios');
  const route = useRoute();
  const { plant } = route.params as Params;

  function handleChangeTime(event: DateTimePickerEvent, dateTime: Date | undefined) {
    if(Platform.OS === 'android') {
      setShowDatePicker(oldState => !oldState);
    }

    if(dateTime && isBefore(dateTime, new Date())) {
      setSelectedDateTime(new Date());
      return Alert.alert('Escolha uma hora no futuro');
    }

    if(dateTime) {
      setSelectedDateTime(dateTime);
    }
  }

  function handleOpenDateTimePickerForAndroid() {
    setShowDatePicker(oldState => !oldState);
  }

  return(
    <View style={styles.container}>
      <View style={styles.plantInfo}>
        <SvgFromUri 
          uri={plant.photo}
          height={150}
          width={150}
        />

        <Text style={styles.plantName}>
          {plant.name}
        </Text>

        <Text style={styles.plantAbout}>
          {plant.about}
        </Text>
      </View>

      <View style={styles.controller}>
        <View style={styles.tipeContainer}>
          <Image 
            source={waterdrop}
            style={styles.tipeImage}
          />

          <Text style={styles.tipeText}>
            {plant.water_tips}
          </Text>
        </View>

        <Text style={styles.alertLabel}>
          Escolha o melhor horário para ser lembrado:
        </Text>

        {showDatePicker && (
          <DateTimePicker 
          value={selectedDateTime}
          mode="time"
          display="clock"
          onChange={handleChangeTime}
          />
        )}

        {
          Platform.OS === 'android' && (
            <TouchableOpacity
              onPress={handleOpenDateTimePickerForAndroid}
              style={styles.dateTimePickerButton}
            >
              <Text style={styles.dateTimePickerText}>
                {`Mudar ${format(selectedDateTime, 'HH:mm')}`}
              </Text>
            </TouchableOpacity>
          )
        }

        <Button 
          title="Cadastrar planta"
          onPress={() => {}}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: colors.shape
  },
  plantInfo: {
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.shape
  },
  plantName: {
    fontFamily: fonts.heading,
    fontSize: 24,
    color: colors.heading,
    marginTop: 15
  },
  plantAbout: {
    textAlign: 'center',
    fontFamily: fonts.text,
    color: colors.heading,
    fontSize: 17,
    marginTop: 10
  },
  controller: {
    backgroundColor: colors.white,
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: getBottomSpace() || 20
  },
  tipeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.blue_light,
    padding: 20,
    borderRadius: 20,
    position: 'relative',
    bottom: 60
  },
  tipeImage: {
    width: 56,
    height: 56
  },
  tipeText: {
    flex: 1,
    marginLeft: 20,
    fontFamily: fonts.text,
    color: colors.blue,
    fontSize: 17,
    textAlign: 'justify'

  },
  alertLabel: {
    textAlign: 'center',
    fontFamily: fonts.complement,
    color: colors.heading,
    fontSize: 12,
    marginBottom: 5
  },
  dateTimePickerButton: {
    width: '100%',
    alignItems: 'center',
    paddingVertical: 40
  },
  dateTimePickerText: {
    color: colors.heading,
    fontSize: 24,
    fontFamily: fonts.text
  }
})