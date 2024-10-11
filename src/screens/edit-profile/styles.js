import {mvs, width} from 'config/metrices';
import {StyleSheet} from 'react-native';
import {colors} from 'config/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  topcontainer:{
    width:'100%',
    height:mvs(150),
    backgroundColor:colors.primary,
  },

  img: {
    height: mvs(120),
    width: mvs(120),
    borderRadius: mvs(50),
    // borderWidth: mvs(3),
    // borderColor: colors.primary,
    position:'absolute',
    bottom:mvs(-50),
    // justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },

  imgUpload: {
    height: '100%',
    width: '100%',
    borderRadius: mvs(50),
    // justifyContent: 'center',
    // alignItems: 'center',
    // alignSelf: 'center',
  },
  inputcontainer:{
    marginTop:mvs(120),
    // padding:mvs(20)
  },
  name: {
    alignSelf: 'center',
    fontSize: mvs(24),
    // marginTop: mvs(10),
    position:'absolute',
    bottom:mvs(-95),
    alignItems: 'center',
    alignSelf: 'center',
    // color: colors.white,
  },
  textinput:{
    // widht:'90%',
    // alignSelf:'center',
    borderColor:colors.gray87,
  },
  containerStyle:{
    height:mvs(50),
  },
  containerStyle2:{
    height:mvs(50),
    backgroundColor:colors.white,
    borderColor:colors.yellow,
    borderWidth:mvs(2),
    borderRadius:mvs(27)

  },
  textStyle:{
    color:colors.primary,
    fontSize:mvs(16),
  },
  editbtn :{
    
      backgroundColor: colors.lightsilver,
      width:'25%',
      height: mvs(30),
      borderRadius:mvs(30),
      // borderWidth:mvs(1),
      borderRadius: mvs(10),
      position: 'absolute',
      right: mvs(8),
      bottom: mvs(10),

      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
    
  }
});
export default styles;
