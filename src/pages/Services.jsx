import React, { useState } from "react";
import { MinusCircleIcon } from '@heroicons/react/20/solid'; 
  // Importing Heroicons MinusCircleIcon

const Services = () => {
  // State for the steps
  const [steps, setSteps] = useState([
    { id: 1, title: "", content: "" },
    { id: 2, title: "", content: "" },
  ]);
  const [currentStep, setCurrentStep] = useState(1);

  // Handle input change for form fields
  const handleInputChange = (e, stepId, field) => {
    const { value } = e.target;
    setSteps((prevSteps) =>
      prevSteps.map((step) =>
        step.id === stepId ? { ...step, [field]: value } : step
      )
    );
  };

  // Handle navigation to next step
  const handleNext = () => {
    if (currentStep < steps.length) setCurrentStep(currentStep + 1);
  };

  // Handle navigation to previous step
  const handlePrevious = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  // Handle adding a new step
  const handleAddStep = () => {
    const newStepId = steps.length + 1;
    setSteps([...steps, { id: newStepId, title: "", content: "" }]);
  };

  // Handle deleting a step
  const handleDeleteStep = (stepId) => {
    setSteps(steps.filter((step) => step.id !== stepId));
    // If deleting the current step, go to the previous step
    if (currentStep === stepId && currentStep > 1) {
      setCurrentStep(currentStep - 1);
    } else if (steps.length === 1) {
      // Prevent form from being empty if there's only one step
      setCurrentStep(1);
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted: " + JSON.stringify(steps));
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-600">
      <div className="w-full max-w-2xl bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Multi-Step Form</h2>

        {/* Step navigation */}
        <div className="flex justify-center mb-6 space-x-4">
          {steps.map((step) => (
            <div key={step.id} className="relative">
              <div
                className={`w-8 h-8 flex items-center justify-center rounded-full ${
                  currentStep === step.id ? "bg-blue-950 text-white" : "bg-gray-300"
                }`}
              >
                {step.id}
              </div>

              {/* Elegant delete button */}
              {steps.length > 1 && (
                <button
                  type="button"
                  onClick={() => handleDeleteStep(step.id)}
                  className="absolute -top-1 -right-1 w-4 h-4 flex items-center justify-center bg-blue-950 text-white rounded-full hover:bg-red-600 transition duration-200 ease-in-out shadow-md hover:shadow-lg"
                >
                  <MinusCircleIcon className="w-4 h-4" />
                </button>
              )}
            </div>
          ))}

          {/* Plus button to add new step */}
          <button
            type="button"
            onClick={handleAddStep}
            className="w-8 h-8 flex items-center justify-center bg-gray-300 rounded-full hover:bg-gray-400"
          >
            +
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Render fields for the current step */}
          {steps.map(
            (step) =>
              step.id === currentStep && (
                <div key={step.id} className="form-step mb-4">
                  <h3 className="text-xl font-semibold mb-4">{`Step ${step.id}: Title and Content`}</h3>
                  
                  {/* Title Input Field */}
                  <div className="mb-4">
                    <label htmlFor="title" className="block mb-2 text-sm font-medium">
                      Title:
                    </label>
                    <input
                      type="text"
                      id="title"
                      name="title"
                      value={step.title || ""}
                      onChange={(e) => handleInputChange(e, step.id, "title")}
                      className="w-full p-2 border-b-2 border-black focus:outline-none focus:border-blue-500"
                      placeholder="Enter title"
                    />
                  </div>

                  {/* Content Input Field */}
                  <div className="mb-4">
                    <label htmlFor="content" className="block mb-2 text-sm font-medium">
                      Content:
                    </label>
                    <textarea
                      id="content"
                      name="content"
                      value={step.content || ""}
                      onChange={(e) => handleInputChange(e, step.id, "content")}
                      className="w-full p-2 border-b-2 border-black focus:outline-none focus:border-blue-500"
                      placeholder="Enter content"
                      rows={4}
                    />
                  </div>

                  {/* Content Overflow Handling */}
                  <div className="overflow-x-auto max-w-full border-b-2 border-gray-300">
                    <div className="flex whitespace-nowrap">
                      <p>{step.content}</p>
                    </div>
                  </div>
                </div>
              )
          )}

          {/* Navigation buttons */}
          <div className="flex justify-between mt-6">
            {currentStep > 1 && (
              <button
                type="button"
                onClick={handlePrevious}
                className="bg-gray-400 text-white py-2 px-4 rounded-md"
              >
                Previous
              </button>
            )}

            {currentStep < steps.length ? (
              <button
                type="button"
                onClick={handleNext}
                className="bg-blue-500 text-white py-2 px-4 rounded-md"
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                className="bg-green-500 text-white py-2 px-4 rounded-md"
              >
                Submit
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Services;
