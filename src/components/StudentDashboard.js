import React, { useState, useEffect } from 'react';
import { database, ref, onValue, update } from '../firebase';
import './StudentDashboard.css';

const StudentDashboard = () => {
    const [enrolledCourses, setEnrolledCourses] = useState([]);
  
    useEffect(() => {
      const coursesRef = ref(database, 'enrolledCourses');
      onValue(coursesRef, (snapshot) => {
        const coursesData = snapshot.val();
        const coursesArray = coursesData ? Object.keys(coursesData).map(key => ({ id: key, ...coursesData[key] })) : [];
        setEnrolledCourses(coursesArray);
      });
    }, []);

    const handleMarkCompleted = (id) => {
        const courseRef = ref(database,`enrolledCourses/${id}`);
        update(courseRef,{ completed: true });
    };

  return (
    <div className="student-dashboard">
      <h1>Enrolled Courses</h1>
      <ul className="enrolled-course-list">
        {enrolledCourses.map(course => (
          <li key={course.id} className="enrolled-course-item">
            <img src={course.thumbnail} alt={course.name} className="course-thumbnail" />
            <div className="course-info">
              <h2>{course.name}</h2>
              <p>Instructor: {course.instructor}</p>
              <p>Due Date: {course.dueDate}</p>
              <p>Status: {course.completed ? 'Completed' : 'In Progress'}</p>
              {!course.completed && (
                <button className='task' onClick={() => handleMarkCompleted(course.id)}>
                  Mark as Completed
                </button>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentDashboard;