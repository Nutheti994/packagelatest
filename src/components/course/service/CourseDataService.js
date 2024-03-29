import axios from 'axios';

const Trainer = 'rakesh'
const COURSE_API_URL = 'https://course-web-app-java.herokuapp.com/api/v1'
const INSTRUCTOR_API_URL = `${COURSE_API_URL}/instructors/${Trainer}`

//We are forming the URL to call in a reusable way.

class CourseDataService {

    retrieveAllCourses(name) {
        //console.log('executed service')
        return axios.get(`${INSTRUCTOR_API_URL}/courses`);
    }

    retrieveCourse(name, id) {
        //console.log('executed service')
        return axios.get(`${INSTRUCTOR_API_URL}/courses/${id}`);
    }

    deleteCourse(name, id) {
        //console.log('executed service')
        return axios.delete(`${INSTRUCTOR_API_URL}/courses/${id}`);
    }

    updateCourse(name, id, course) {
        //console.log('executed service')
        return axios.put(`${INSTRUCTOR_API_URL}/courses/${id}`, course);
    }

    createCourse(name, course) {
        //console.log('executed service')
        return axios.post(`${INSTRUCTOR_API_URL}/courses/`, course);
    }
}

export default new CourseDataService()
//We are creating an instance of CourseDataService and making it available for other components.
