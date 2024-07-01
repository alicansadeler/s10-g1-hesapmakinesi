export const APPLY_NUMBER = 'APPLY_NUMBER';
export const CHANGE_OPERATION = 'CHANGE_OPERATION';
export const CLEAR_DISPLAY = 'CLEAR_DISPLAY';
export const HESAPLA = 'HESAPLA';
export const TYPE_TO_SCREEN = 'TYPE_TO_SCREEN';
export const MEMORY_ADD = 'MEMORY_ADD';
export const MEMORY_CLEAR = 'MEMORY_CLEAR';
export const MEMORY_RECALL = 'MEMORY_RECALL';

export const applyNumber = (number) => {
  return { type: APPLY_NUMBER, payload: Number(number) };
};

export const changeOperation = (operation) => {
  return { type: CHANGE_OPERATION, payload: operation };
};

export const clearDisplay = (operation) => {
  return { type: CLEAR_DISPLAY };
};

export const hesaplayici = (operation) => {
  return { type: HESAPLA };
};

export const typeToScreen = (number) => {
  return { type: TYPE_TO_SCREEN, payload: Number(number) };
};

export const memoryAdd = () => {
  return { type: MEMORY_ADD };
};

export const memoryClear = () => {
  return { type: MEMORY_CLEAR };
};

export const memoryRecall = () => {
  return { type: MEMORY_RECALL };
};
