import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    paddingVertical: 15,
    marginHorizontal: 10,
    borderBottomWidth: 1,
    borderColor: '#E3E3E3',
  },
  innerContainer: {
    flex: 1,
    marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageContainer: {
    height: 50,
    width: 50,
  },
  image: {
    flex: 1,
  },
  pokeballsInfo: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pokeballsCost: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  costValue: {
    fontWeight: '500',
    fontSize: 15,
    lineHeight: 18,
    color: '#A4A4A4',
  },
});