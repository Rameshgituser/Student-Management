
const allData = [];

const accessStudentReducer = (student = allData, actions) => {
  
  switch (actions.type) {
    
    case "add":
      student.push(actions.payload);
      console.log(allData);
      return student;
    case "update":
      student[actions.index] = actions.payload;
      return student;

    default:
      return student;
  }
};

export default accessStudentReducer;
