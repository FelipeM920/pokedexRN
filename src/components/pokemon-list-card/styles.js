import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
    paddingVertical: 15,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#E3E3E3',
  },
  pokemonInfoContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  pokemonTypeContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  elementIcon: {
    marginLeft: 10,
  },
  imageContainer: {
    height: 50,
    width: 50,
  },
  image: {
    flex: 1,
  },
  nameIdContainer: {
    marginLeft: 15,
    justifyContent: 'space-evenly'
  },
  name: {
    textTransform: 'capitalize',
  },
  id: {
    fontWeight: '500',
    fontSize: 15,
    lineHeight: 18,
    color: '#A4A4A4'
  }
});