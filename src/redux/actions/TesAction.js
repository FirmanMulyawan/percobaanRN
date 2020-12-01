export const setAlamatRumah = (value) => {
  return (dispatch) => {
    dispatch({
      type: 'SETALAMATRUMAH',
      value,
    });
  };
};

export const setFullName = (value) => {
  return (dispatch) => {
    dispatch({
      type: 'SETFULLNAME',
      value,
    });
  };
};

export const setSaveData = (data) => {
  return (dispatch) => {
    dispatch({
      type: 'SAVEDATA',
      alamatRumah: data.alamatRumah,
      fullName: data.fullName,
    });
  };
};
