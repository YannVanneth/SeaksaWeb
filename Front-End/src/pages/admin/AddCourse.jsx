import React, { useState } from "react";
import { MorkUpData } from "../../lib/data/MorkUpData";

const AddCourse = () => {
  // Mock data for the table
  const [courses, setCourses] = useState([
    {
      id: 1,
      name: "Introduction",
      instructor: "John Doe",
      students: 150,
      status: "Active",
      image: "../src/assets/Bootsrap2.jpg",
    },
    {
      id: 2,
      name: "Advanced",
      instructor: "Jane Smith",
      students: 120,
      status: "Active",
      image: "../src/assets/Git.jpg",
    },
    {
      id: 3,
      name: "JavaScript",
      instructor: "Bob Johnson",
      students: 200,
      status: "Upcoming",
      image: "../src/assets/pyton.png",
    },
    {
      id: 4,
      name: "Python for Beginners",
      instructor: "Alice Brown",
      students: 80,
      status: "Active",
      image: "../src/assets/uxui.jpg",
    },
  ]);

  // State for the "Add Course" form
  const [showAddCourseForm, setShowAddCourseForm] = useState(false);
  const [newCourse, setNewCourse] = useState({
    name: "",
    instructor: "",
    students: "",
    status: "Active",
    image: "",
  });

  // Handle input changes in the form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCourse({ ...newCourse, [name]: value });
  };

  // Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewCourse({ ...newCourse, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle form submission
  const handleAddCourse = (e) => {
    e.preventDefault();
    const courseToAdd = {
      id: courses.length + 1, // Generate a new ID
      ...newCourse,
      students: parseInt(newCourse.students), // Convert students to a number
    };
    setCourses([...courses, courseToAdd]); // Add the new course
    setNewCourse({
      name: "",
      instructor: "",
      students: "",
      status: "Active",
      image: "",
    }); // Reset form
    setShowAddCourseForm(false); // Hide the form
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">
        Course Management
      </h1>

      {/* Search Bar */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search courses..."
          className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Add Course Form */}
      <form
        onSubmit={handleAddCourse}
        className="mb-6 bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-xl font-semibold mb-4">Add New Course</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Course Name
            </label>
            <input
              type="text"
              name="name"
              value={newCourse.name}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Instructor
            </label>
            <input
              type="text"
              name="instructor"
              value={newCourse.instructor}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Students
            </label>
            <input
              type="number"
              name="students"
              value={newCourse.students}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Status
            </label>
            <select
              name="status"
              value={newCourse.status}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="Active">Active</option>
              <option value="Upcoming">Upcoming</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Course Image
            </label>
            <input
              type="file"
              name="image"
              onChange={handleImageUpload}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              accept="image/*"
            />
          </div>
        </div>
        <button
          type="submit"
          className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500">
          Add Course
        </button>
      </form>

      {/* Table */}
      <div className="bg-white shadow-sm rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Image
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Instructor
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Students
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {courses.map((course) => (
              <tr key={course.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <img
                    src={course.image}
                    alt={course.name}
                    className="h-10 w-10 rounded-full"
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {course.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {course.instructor}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {course.students}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 py-1 text-xs font-semibold rounded-full ${
                      course.status === "Active"
                        ? "bg-green-100 text-green-800"
                        : "bg-orange-100 text-orange-800"
                    }`}>
                    {course.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AddCourse;
