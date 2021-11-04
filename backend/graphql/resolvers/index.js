const  {
    authUser,
    registerUser,
    getUserProfile,
    updateUserProfile,
    getUsers,
    getDoctors,
    deleteUser,
    getUserById,
    updateUser,
    searchDoctorByName,
    searchDoctorBySpecialization,
    searchParticularDoctor,
    getStatistics_Users,
    getStatistics_Doctors,
  } = require('./user.js');

const {
  createAppointment,
  viewAppointment,
  cancelAppointment,
  changeStatus,
  getAllAppointments,
  getStatistics_Appointment,
  getStatistics_Successful_App,
} = require('./appointment.js')

  module.exports = {
    //users
    authUser: authUser,
    registerUser: registerUser,
    getUserProfile: getUserProfile,
    updateUserProfile: updateUserProfile,
    getUsers: getUsers,
    getDoctors: getDoctors,
    deleteUser: deleteUser,
    getUserById: getUserById,
    updateUser: updateUser,
    searchDoctorByName: searchDoctorByName,
    searchDoctorBySpecialization: searchDoctorBySpecialization,
    searchParticularDoctor: searchParticularDoctor,
    getStatistics_Users: getStatistics_Users,
    getStatistics_Doctors: getStatistics_Doctors,
    //appointment
    createAppointment: createAppointment,
    viewAppointment: viewAppointment,
    cancelAppointment: cancelAppointment,
    changeStatus: changeStatus,
    getAllAppointments: getAllAppointments,
    getStatistics_Appointment: getStatistics_Appointment,
    getStatistics_Successful_App: getStatistics_Successful_App,
  };