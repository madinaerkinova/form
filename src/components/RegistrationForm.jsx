import React from "react";
import { useForm } from "react-hook-form";

const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const years = Array.from(
    { length: 100 },
    (_, i) => new Date().getFullYear() - i
  );

  const backgroundImage =
    "url('https://suret.pics/uploads/posts/2023-09/1695385580_1-2.jpg')";

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage }}
    >
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Registration Form
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-4">
            <div className="grid grid-cols-3 gap-2">
              <input
                {...register("firstName", {
                  required: "First name is required",
                })}
                type="text"
                placeholder="First Name"
                className="p-2 border rounded"
              />
              {errors.firstName && (
                <span className="text-red-500">{errors.firstName.message}</span>
              )}
              <input
                {...register("middleName")}
                type="text"
                placeholder="Middle Name"
                className="p-2 border rounded"
              />
              <input
                {...register("lastName", { required: "Last name is required" })}
                type="text"
                placeholder="Last Name"
                className="p-2 border rounded"
              />
              {errors.lastName && (
                <span className="text-red-500">{errors.lastName.message}</span>
              )}
            </div>
            <div className="grid grid-cols-3 gap-2">
              <select
                {...register("birthMonth", { required: "Month is required" })}
                className="p-2 border rounded"
              >
                <option value="">Month</option>
                {months.map((month, index) => (
                  <option key={index} value={month}>
                    {month}
                  </option>
                ))}
              </select>
              <select
                {...register("birthDay", { required: "Day is required" })}
                className="p-2 border rounded"
              >
                <option value="">Day</option>
                {days.map((day) => (
                  <option key={day} value={day}>
                    {day}
                  </option>
                ))}
              </select>
              <select
                {...register("birthYear", { required: "Year is required" })}
                className="p-2 border rounded"
              >
                <option value="">Year</option>
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
            <select
              {...register("gender", { required: "Gender is required" })}
              className="p-2 border rounded"
            >
              <option value="">Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            {errors.gender && (
              <span className="text-red-500">{errors.gender.message}</span>
            )}
            <input
              {...register("streetAddress", {
                required: "Street address is required",
              })}
              type="text"
              placeholder="Street Address"
              className="p-2 border rounded"
            />
            {errors.streetAddress && (
              <span className="text-red-500">
                {errors.streetAddress.message}
              </span>
            )}
            <input
              {...register("streetAddress2")}
              type="text"
              placeholder="Street Address Line 2"
              className="p-2 border rounded"
            />
            <input
              {...register("city", { required: "City is required" })}
              type="text"
              placeholder="City"
              className="p-2 border rounded"
            />
            {errors.city && (
              <span className="text-red-500">{errors.city.message}</span>
            )}
            <input
              {...register("state", { required: "State/Province is required" })}
              type="text"
              placeholder="State / Province"
              className="p-2 border rounded"
            />
            {errors.state && (
              <span className="text-red-500">{errors.state.message}</span>
            )}
            <input
              {...register("postalCode", {
                required: "Postal/Zip Code is required",
              })}
              type="text"
              placeholder="Postal / Zip Code"
              className="p-2 border rounded"
            />
            {errors.postalCode && (
              <span className="text-red-500">{errors.postalCode.message}</span>
            )}
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                  message: "Invalid email address",
                },
              })}
              type="email"
              placeholder="Student E-mail"
              className="p-2 border rounded"
            />
            {errors.email && (
              <span className="text-red-500">{errors.email.message}</span>
            )}
            <input
              {...register("mobileNumber", {
                required: "Mobile number is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Invalid mobile number",
                },
              })}
              type="text"
              placeholder="Mobile Number"
              className="p-2 border rounded"
            />
            {errors.mobileNumber && (
              <span className="text-red-500">
                {errors.mobileNumber.message}
              </span>
            )}
            <input
              {...register("phoneNumber", {
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Invalid phone number",
                },
              })}
              type="text"
              placeholder="Phone Number"
              className="p-2 border rounded"
            />
            {errors.phoneNumber && (
              <span className="text-red-500">{errors.phoneNumber.message}</span>
            )}
            <input
              {...register("workNumber", {
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Invalid work number",
                },
              })}
              type="text"
              placeholder="Work Number"
              className="p-2 border rounded"
            />
            {errors.workNumber && (
              <span className="text-red-500">{errors.workNumber.message}</span>
            )}
            <input
              {...register("company")}
              type="text"
              placeholder="Company"
              className="p-2 border rounded"
            />
            <select
              {...register("courses", {
                required: "Course selection is required",
              })}
              className="p-2 border rounded"
            >
              <option value="">Courses</option>
              <option value="course1">Course 1</option>t
              <option value="course2">Course 2</option>
            </select>
            {errors.courses && (
              <span className="text-red-500">{errors.courses.message}</span>
            )}
            <textarea
              {...register("comments")}
              placeholder="Additional Comments"
              className="p-2 border rounded"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
