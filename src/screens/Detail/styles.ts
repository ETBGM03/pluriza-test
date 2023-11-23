import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 60,
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
  },
  arrowBack: {width: 40, height: 45},
  title: {
    fontSize: 34,
    height: 60,
    textAlign: 'center',
  },
  body: {
    flex: 1,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
    borderColor: '#eee',
    backgroundColor: '#fff',
    borderRadius: 100,
    shadowColor: '#000',
    shadowOpacity: 0.5,
    resizeMode: 'cover',
    shadowRadius: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  price: {
    width: '100%',
    marginBottom: 10,
  },
  leftContainer: {
    flex: 1,
    maxWidth: 150,
    alignItems: 'flex-start',
  },
  textRight: {
    fontSize: 14,
  },
  rightContainer: {
    flex: 1,
    marginLeft: 10,
  },
  input: {
    borderColor: '#d3d3d3',
    borderWidth: 1,
    height: 50,
    borderRadius: 6,
    paddingHorizontal: 8,
    fontSize: 18,
  },
  convertedText: {
    marginTop: 10,
    fontSize: 16,
    color: 'green',
    fontStyle: 'italic',
  },
  convertCurrent: {flex: 1, marginTop: 34},
});
