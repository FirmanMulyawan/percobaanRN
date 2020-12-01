let initialState = {
  alamatRumah: '',
  fullName: '',
  SubmitAlamatRumah: '',
  SubmitfullName: '',
};

const TestReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SAVEDATA':
      return {
        ...state,
        SubmitAlamatRumah: action.alamatRumah,
        SubmitfullName: action.fullName,
      };
    case 'SETALAMATRUMAH':
      return {
        ...state,
        alamatRumah: action.value,
      };
    case 'SETFULLNAME':
      return {
        ...state,
        fullName: action.value,
      };
    default:
      return initialState;
  }
};

export default TestReducer;
