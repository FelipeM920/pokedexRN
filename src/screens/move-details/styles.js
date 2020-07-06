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
  iconContainer: {
    position: 'absolute',
    top: -40,
    alignSelf: 'center',
  },
  moveInfos: {
    width: deviceWidth,
    marginTop: 65,
    alignSelf: 'center',
    paddingHorizontal: 20,
  },
  moveName: {
    fontWeight: '500',
    fontSize: 40,
    lineHeight: 47,
    textTransform: 'capitalize',
    textAlign: 'center',
  },
  iconInfo: {
    marginVertical: 30,
    alignSelf: 'center',
  },
  effect: {
    fontWeight: '500',
    fontSize: 15,
    lineHeight:18,
    textAlign: 'center',
    color: '#4F4F4F',
  },
  moveStatsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 40,
  },
  moveStatsInner: {
    alignItems: 'center',
    paddingBottom: 30
  },
  bar: {
    borderRightWidth: 1,
    borderColor: '#E4E4E4',
  },
  moveStatsText: {
    fontWeight: '500',
    fontSize: 15,
    lineHeight: 18,
    marginBottom: 20,
  },
  moveStatsNumber: {
    fontWeight: '500',
    fontSize: 19,
    lineHeight: 22,
  },
})