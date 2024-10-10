import {mvs} from 'config/metrices';
import {StyleSheet} from 'react-native';
import {colors} from 'config/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },

  backgroundimg: {
    width: '100%',
    height: mvs(250),
  },
  infoContainer: {
    width: '100%',
    padding: mvs(20),
    backgroundColor: colors.silver,

    borderRadius: mvs(10),
  },
  timeContainer: {
    justifyContent: 'flex-start',
    gap: mvs(15),
    marginTop: mvs(10),
    alignItems: 'center',
  },
  checkBtn: {
    width: '45%',
  },
});
export default styles;
