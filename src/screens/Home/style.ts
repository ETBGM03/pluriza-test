import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  title: {
    fontSize: 36,
    height: 60,
  },
  loadingText: {
    fontSize: 28,
  },
  errorText: {
    fontSize: 24,
  },
  containerLoader: {
    flex: 1,
  },
  buttonError: {
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    backgroundColor: '#d3d3d3',
    marginTop: 20,
  },
  textError: {
    fontSize: 18,
    opacity: 0.7,
  },
});
