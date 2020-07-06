import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomContainer: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 48,
    borderTopRightRadius: 48,
    top: 180,
    paddingBottom: 180
  },
  imageContainer: {
    height: 170,
    width: 170,
    alignSelf: 'center',
    position: 'absolute',
    top: -130,
  },
  image: {
    flex: 1,
  },
  infoContainer: {
    flex: 1,
    marginVertical: 50,
    paddingHorizontal: 15,
  },
  basicInfo: {
    flex: 1,
    alignItems: 'center',
    marginBottom: 40,
  },
  pokemonName: {
    fontWeight: '500',
    fontSize: 40,
    lineHeight: 47,
    textTransform: 'capitalize',
  },
  pokemonTypes: {
    flexDirection: 'row',
  },
  pokemonDescription: {
    fontWeight: '500',
    fontSize: 15,
    lineHeight: 18,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statusContainer: {
    flexDirection: 'row',
    marginVertical: 2,
  },
  statusContainerText: {
    fontWeight: '500',
    fontSize: 12,
    textTransform: 'uppercase',
  },
  statusContainerNumber: {
    marginHorizontal: 10,
    fontWeight: '500',
    fontSize: 14,
    color: '#666',
  },
  selectedOptionContainer: {
    marginVertical: 30,
  },
  iconContainer: {
    marginVertical: 30,
    marginLeft: 10,
  },
  abilities: {
    marginVertical: 20,
  },
  abilityName: {
    fontWeight: '500',
    fontSize: 15,
    lineHeight: 18,
    textTransform: 'capitalize',
    paddingBottom: 10,
  },
  abilityEffect: {
    fontWeight: '500',
    fontSize: 15,
    lineHeight: 18,
  },
  moves: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: '#E3E3E3',
    marginBottom: 10,
  },
  moveName: {
    fontWeight: '500',
    fontSize: 19,
    lineHeight: 22,
    color: '#4F4F4F',
  },
  movePower: {
    paddingTop: 5,
    paddingBottom: 15,
    fontWeight: '500',
    fontSize: 15,
    lineHeight: 18,
    color: '#A4A4A4',
  },
});