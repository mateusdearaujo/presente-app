import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

interface SectionProps {
  title: string
}

const Section: React.FC<SectionProps> = ({ children, title }) => {
  return (
    <View style={styles.sectionContainer}>
      <Text style={[styles.sectionTitle]}>{title}</Text>
      <Text style={[styles.sectionDescription]}>{children}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 40,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 18,
    lineHeight: 26,
    fontWeight: '600',
    fontFamily: 'Poppins-SemiBold',
    color: '#000000',
    textAlign: 'center',
  },
  sectionDescription: {
    padding: 30,
    fontSize: 12,
    lineHeight: 18,
    fontWeight: '400',
    fontFamily: 'Poppins-Regular',
    color: '#000000',
    textAlign: 'center',
  },
})

export default Section
