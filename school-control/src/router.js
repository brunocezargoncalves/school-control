import Vue from 'vue';
import Router from 'vue-router';
import Teachers from "./components/Teacher/List";
import Students from "./components/Student/List";
import StudentDetails from "./components/Student/Detail";
import About from "./components/About/About";

Vue.use(Router);

export default new Router({
    routes: [{
        path: '/teachers',
        name: 'Teachers',
        component: Teachers
    },
    {
        path: '/students/teacher/:teacher_id',
        name: 'StudentsPerTeacher',
        component: Students
    },
    {
        path: '/students',
        name: 'Students',
        component: Students
    },
    {
        path: '/student/details/:student_id',
        name: 'StudentDetails',
        component: StudentDetails
    },
    {
        path: '/about',
        name: 'Sobre',
        component: About
    }]
});