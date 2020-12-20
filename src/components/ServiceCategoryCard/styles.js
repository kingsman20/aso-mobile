import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: 116,
    marginRight: 8,
    position: 'relative',
  },
  textWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    position: 'absolute',
    height: 50,
    width: 116,
    top: 0,
    left: 0,
  },
  text: {
    fontSize: 15,
    fontWeight: '700',
  },
  underline: {
    width: 10,
    height: 2,
    marginTop: 3,
  },
});

export default styles;
