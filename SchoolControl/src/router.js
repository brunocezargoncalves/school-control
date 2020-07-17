import Vue from 'vue';
import Router from 'vue-router';
import Teacher from "./components/Teacher/Teacher";
import Student from "./components/Student/Student";
import StudentDetails from "./components/Student/Detail";
import About from "./components/About/About";

Vue.use(Router);

export default new Router({
    routes: [{
        path: '/teacher',
        name: 'Teachers',
        component: Teacher
    },
    {
        path: '/student/:teacher_id',
        name: 'StudentsPerTeacher',
        component: Student
    },
    {
        path: '/student/',
        name: 'StudentList',
        component: Student
    },
    {
        path: '/student/detail/:id',
        name: 'StudentDetails',
        component: StudentDetails
    },
    {
        path: '/about',
        name: 'Sobre',
        component: About
    }]
});