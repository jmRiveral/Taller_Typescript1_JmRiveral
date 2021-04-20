

import { dataCourses } from './dataCourses.js';
import { Student } from './student.js';

var coursesTbody = document.getElementById('courses');
var btnfilterByName = document.getElementById("button-filterByName");
var inputSearchBox = document.getElementById("search-box");
var totalCreditElm = document.getElementById("total-credits");
var studentData = new Student("201914138", "1005162034", "19 años", "Carrera 40#46-123,Rio Negro", "3167927034");
btnfilterByName.onclick = function () { return applyFilterByName(); };
renderCoursesInTable(dataCourses);

renderStudentInTable(studentData);
function renderStudentInTable(data) {
    console.log("pana creado");
    document.getElementById("codigoTd").innerHTML = data.codigo;
    (document.getElementById("cedulaTd")).innerHTML = data.cedula;
    (document.getElementById("direccionTd")).innerHTML = data.direccion;
    (document.getElementById("telefonoTd")).innerHTML = data.telefono;
    (document.getElementById("edadTd")).innerHTML = data.edad;
}
function renderCoursesInTable(courses) {
    console.log('Desplegando cursos');
    courses.forEach(function (course) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>" + course.name + "</td>\n                           <td>" + course.professor + "</td>\n                           <td>" + course.credits + "</td>";
        coursesTbody.appendChild(trElement);
    });
}
function applyFilterByName() {
    var text = inputSearchBox.value;
    text = (text == null) ? '' : text;
    clearCoursesInTable();
    var coursesFiltered = searchCourseByName(text, dataCourses_js_1.dataCourses);
    renderCoursesInTable(coursesFiltered);
}
function searchCourseByName(nameKey, courses) {
    return nameKey === '' ? dataCourses_js_1.dataCourses : courses.filter(function (c) {
        return c.name.match(nameKey);
    });
}
btnfilterByName.onclick = function () { return applyFilterByName(); };
function getTotalCredits(courses) {
    var totalCredits = 0;
    courses.forEach(function (course) { return totalCredits = totalCredits + course.credits; });
    return totalCredits;
}
function clearCoursesInTable() {
    while (coursesTbody.hasChildNodes()) {
        if (coursesTbody.firstChild != null) {
            coursesTbody.removeChild(coursesTbody.firstChild);
        }
    }
}
