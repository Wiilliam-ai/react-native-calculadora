import {useRef, useState} from 'react';

enum Operators {
  sumar,
  restar,
  multiplicar,
  dividir,
}

const useCalculator = () => {
  const [numResult, setNumResult] = useState<string>('0');
  const [numBefore, setNumBefore] = useState<string>('0');

  const ultimateOperation = useRef<Operators>();

  const cleanNumber = (): void => {
    setNumResult('0');
    setNumBefore('0');
  };

  const addNumber = (numText: string): void => {
    if (numResult.includes('.') && numText === '.') {
      return;
    }
    if (numResult.startsWith('0') || numResult.startsWith('-0')) {
      // Punto decimal
      if (numText === '.') {
        setNumResult(numResult + numText);
        // Evaluar si es otro cero, y hay un punto
      } else if (numText === '0' && numResult.includes('.')) {
        setNumResult(numResult + numText);
        // Evaluar si es diferente de cero y no tiene un punto
      } else if (numText !== '0' && !numResult.includes('.')) {
        setNumResult(numText);
        // Evitar el 000.00
      } else if (numText === '0' && !numResult.includes('.')) {
        setNumResult(numResult);
      } else {
        setNumResult(numResult + numText);
      }
    } else {
      setNumResult(numResult + numText);
    }
  };

  const btnDel = (): void => {
    let negative: string = '';
    let numTemp: string = numResult;

    if (numResult.includes('-')) {
      negative = '-';
      numTemp = numResult.substr(1);
    }
    if (numTemp.length > 1) {
      setNumResult(negative + numTemp.slice(0, -1));
    } else {
      setNumResult('0');
    }
  };

  const changeNumberBefore = (): void => {
    if (numResult.endsWith('.')) {
      setNumBefore(numResult.slice(0, -1));
    } else {
      setNumBefore(numResult);
    }
    setNumResult('0');
  };

  const positivoNegativo = (): void => {
    if (numResult.includes('-')) {
      setNumResult(numResult.replace('-', ''));
    } else {
      setNumResult('-' + numResult);
    }
  };

  const btnDividir = (): void => {
    changeNumberBefore();
    ultimateOperation.current = Operators.dividir;
  };

  const btnMultiplicar = (): void => {
    changeNumberBefore();
    ultimateOperation.current = Operators.multiplicar;
  };

  const btnRestar = (): void => {
    changeNumberBefore();
    ultimateOperation.current = Operators.restar;
  };

  const btnSumar = (): void => {
    changeNumberBefore();
    ultimateOperation.current = Operators.sumar;
  };

  const calcular = (): void => {
    const num1 = Number(numResult);
    const num2 = Number(numBefore);

    switch (ultimateOperation.current) {
      case Operators.sumar:
        setNumResult(`${num1 + num2}`);
        break;
      case Operators.restar:
        setNumResult(`${num2 - num1}`);
        break;
      case Operators.dividir:
        setNumResult(`${num2 / num1}`);
        break;
      case Operators.multiplicar:
        setNumResult(`${num1 * num2}`);
        break;
      default:
        break;
    }

    setNumBefore('0');
  };

  return {
    cleanNumber,
    addNumber,
    btnDel,
    positivoNegativo,
    btnDividir,
    btnMultiplicar,
    btnRestar,
    btnSumar,
    calcular,
    numResult,
    numBefore,
  };
};

export default useCalculator;
