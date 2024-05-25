import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { database, ref, onValue } from '../firebase';
import SearchBar from './SearchBar';
import './CourseListing.css';

const CourseListing = () => {
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);

  useEffect(() => {
    const coursesRef = ref(database, 'courses');
    onValue(coursesRef, (snapshot) => {
      const coursesData = snapshot.val();
      const coursesArray = coursesData ? Object.keys(coursesData).map(key => ({ id: key, ...coursesData[key] })) : [];
      setCourses(coursesArray);
      setFilteredCourses(coursesArray);
    });
  }, []);

  const handleSearch = (query) => {
    setFilteredCourses(
      courses.filter(course =>
        course.name.toLowerCase().includes(query.toLowerCase()) ||
        course.instructor.toLowerCase().includes(query.toLowerCase())
      )
    );
  };

  return (
    <div className="course-listing">
      <h1>Courses</h1>
      <SearchBar onSearch={handleSearch} />
      <ul className="course-list">
        {filteredCourses.map(course => (
          <li key={course.id} className="course-item">
            <Link to={`/course/${course.id}`}>
              <img src={course.thumbnail} alt={course.name} className="course-thumbnail" />
              <div className="course-info">
                <h2>{course.name}</h2>
                <p>by {course.instructor}</p>
                <p>Likes: {course.likes}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );

};

export default CourseListing;