import { StyleSheet, Dimensions } from 'react-native';
const deviceWidth = Dimensions.get('window').width

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomContainer: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 48,
    borderTopRightRadius: 48,
    top: 150,
    paddingBottom: 150,
  },
  imageContainer: {
    height: 170,
    width: 170,
    alignSelf: 'center',
    position: 'absolute',
    top: -95,
  },
  image: {
    flex: 1,
  },
  pokeballInfos: {
    width: deviceWidth,
    marginTop: 80,
    alignSelf: 'center',
    paddingHorizontal: 20,
  },
  pokeballName: {
    fontWeight: '500',
    fontSize: 40,
    lineHeight: 47,
    textTransform: 'capitalize',
    textAlign: 'center',
  },
  costContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 30,
  },
  pokeballCost: {
    fontWeight: '500',
    fontSize: 19,
    lineHeight: 22,
    color: '#A4A4A4',
  },
  pokeballDescriptin: {
    fontWeight: '500',
    fontSize: 15,
    lineHeight: 18,
    textAlign: 'center'
  }
})