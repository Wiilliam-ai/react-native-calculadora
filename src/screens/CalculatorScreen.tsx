import React from 'react';
import {Text, View} from 'react-native';
import {styles} from '../theme/appTheme';
import ButtonCalc from '../components/ButtonCalc';
import useCalculator from '../hooks/useCalculator';


const CalculatorScreen = () => {

  const { addNumber,
          btnDel,
          btnDividir,
          btnMultiplicar,
          btnRestar,
          btnSumar,
          calcular,
          cleanNumber,
          positivoNegativo, numResult,numBefore } = useCalculator();

  return (
    <View style={styles.calculatorContainer}>
      {numBefore !== '0' && (
        <Text style={styles.textResultOld}>{numBefore}</Text>
      )}
      <Text style={styles.textResult} numberOfLines={2} adjustsFontSizeToFit>
        {numResult}
      </Text>

      <View style={styles.column}>
        {/* * Button  */}
        <ButtonCalc content="C" action={cleanNumber} />
        <ButtonCalc content="+/-" action={positivoNegativo} />
        <ButtonCalc content="del" action={btnDel} />
        <ButtonCalc content="/" btnType="orange" action={btnDividir} />
      </View>
      <View style={styles.column}>
        {/* * Button  */}
        <ButtonCalc content="7" btnType="blackOut" action={addNumber} />
        <ButtonCalc content="8" btnType="blackOut" action={addNumber} />
        <ButtonCalc content="9" btnType="blackOut" action={addNumber} />
        <ButtonCalc content="x" btnType="orange" action={btnMultiplicar} />
      </View>
      <View style={styles.column}>
        {/* * Button  */}
        <ButtonCalc content="4" btnType="blackOut" action={addNumber} />
        <ButtonCalc content="5" btnType="blackOut" action={addNumber} />
        <ButtonCalc content="6" btnType="blackOut" action={addNumber} />
        <ButtonCalc content="-" btnType="orange" action={btnRestar} />
      </View>
      <View style={styles.column}>
        {/* * Button  */}
        <ButtonCalc content="1" btnType="blackOut" action={addNumber} />
        <ButtonCalc content="2" btnType="blackOut" action={addNumber} />
        <ButtonCalc content="3" btnType="blackOut" action={addNumber} />
        <ButtonCalc content="+" btnType="orange" action={btnSumar} />
      </View>
      <View style={styles.column}>
        {/* * Button  */}
        <ButtonCalc content="0" btnType="blackOut" expand action={addNumber} />
        <ButtonCalc content="." btnType="blackOut" action={addNumber} />
        <ButtonCalc content="=" btnType="orange" action={calcular} />
      </View>
    </View>
  );
};

export default CalculatorScreen;
