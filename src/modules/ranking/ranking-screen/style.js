import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  errorContainer: {
    flex: 1,
  },
  errorMessage: {
    fontSize: 40,
    fontWeight: '300',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  loadingContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});
