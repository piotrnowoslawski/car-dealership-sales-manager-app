const initialJobs = {
  jobs: [
    {
      id: 1,
      title: "Handlowiec",
      value: "Handlowiec",
      selected: false,
      category: "job",
      key: "position",
    },
    {
      id: 2,
      title: "Kierownik",
      value: "Kierownik",
      selected: false,
      category: "job",
      key: "position",
    },
    {
      id: 3,
      title: "Dyrektor",
      value: "Dyrektor",
      selected: false,
      category: "job",
      key: "position",
    },
    {
      id: 4,
      title: "Prezes",
      value: "Prezes",
      selected: false,
      category: "job",
      key: "position",
    },
  ],
};

const jobsReducer = (state = initialJobs, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default jobsReducer;
