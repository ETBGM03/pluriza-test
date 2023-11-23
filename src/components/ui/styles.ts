import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  card: {
    height: 70,
    display: 'flex',
    borderColor: '#eee',
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    marginBottom: 14,
  },
  cardLeft: {flex: 1, flexDirection: 'row', alignItems: 'center', gap: 14},
  iconImage: {
    width: 44,
    height: 44,
  },
  price: {
    fontSize: 18,
  },
});
