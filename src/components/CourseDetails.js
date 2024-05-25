import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { database, ref, onValue } from '../firebase';
import './CourseDetails.css';

const CourseDetails = () => {
    const { id } = useParams();
    const [course, setCourse] = useState(null);
  
    useEffect(() => {
      const courseRef = ref(database, `courses/${id}`);
      onValue(courseRef, (snapshot) => {
        const courseData = snapshot.val();
        setCourse(courseData);
      });
    }, [id]);
  
    if (!course) {
      return <div>Loading...</div>;
    }

  return (
    <div className="course-details">
      <h1>{course.name}</h1>
      <img src={course.thumbnail} alt={course.name} className="course-thumbnail" />
      <p>{course.description}</p>
      <p>Instructor: {course.instructor}</p>
      <p>Status: {course.status}</p>
      <p>Duration: {course.duration}</p>
      <p>Schedule: {course.schedule}</p>
      <p>Location: {course.location}</p>
      <p>Prerequisites: {course.prerequisites}</p>
      <div className="course-syllabus">
        <h3>Syllabus</h3>
        <ul>
          {course.syllabus.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CourseDetails;