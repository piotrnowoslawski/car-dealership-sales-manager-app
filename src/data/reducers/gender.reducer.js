const initialGender = {
  gender: [
    {
      id: 1,
      title: "kobieta",
      value: "kobieta",
      selected: false,
      category: "personalData",
      key: "gender",
    },
    {
      id: 2,
      title: "mężczyzna",
      value: "mężczyzna",
      selected: false,
      category: "personalData",
      key: "gender",
    },
  ],
};

const genderReducer = (state = initialGender, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default genderReducer;
