"use client";

import { useState } from "react";
import {
  Handshake,
  Upload,
  ChevronLeft,
  ChevronRight,
  Check,
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const partnershipOptions = [
  "Strategic Collaboration",
  "Sponsorship",
  "Content Collaboration",
  "Joint Event/Workshop",
  "Other",
];

const steps = [
  {
    id: 1,
    title: "Basic Information",
    description: "Personal and organization details",
  },
  {
    id: 2,
    title: "Partnership Details",
    description: "Partnership type and goals",
  },
  {
    id: 3,
    title: "Additional Information",
    description: "Documents and final comments",
  },
];

export default function PartnershipSignupSheet() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<{
    fullName: string;
    organizationName: string;
    email: string;
    phone: string;
    websiteLinks: string;
    partnershipTypes: string[];
    goals: string;
    mutualSupport: string;
    comments: string;
  }>({
    fullName: "",
    organizationName: "",
    email: "",
    phone: "",
    websiteLinks: "",
    partnershipTypes: [],
    goals: "",
    mutualSupport: "",
    comments: "",
  });
  type PartnershipFormErrors = {
    fullName?: string;
    organizationName?: string;
    email?: string;
    phone?: string;
    websiteLinks?: string;
    partnershipTypes?: string;
    goals?: string;
    mutualSupport?: string;
    comments?: string;
    [key: string]: string | undefined;
  };

  const [errors, setErrors] = useState<PartnershipFormErrors>({});

  const validateStep = (step: number) => {
    const newErrors: PartnershipFormErrors = {};

    if (step === 1) {
      if (!formData.fullName.trim())
        newErrors.fullName = "Full name is required";
      if (!formData.organizationName.trim())
        newErrors.organizationName = "Organization name is required";
      if (!formData.email.trim()) newErrors.email = "Email is required";
      else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
      ) {
        newErrors.email = "Invalid email address";
      }
      if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    } else if (step === 2) {
      if (formData.partnershipTypes.length === 0) {
        newErrors.partnershipTypes =
          "Please select at least one partnership type";
      }
      if (!formData.goals.trim())
        newErrors.goals = "Please describe your partnership goals";
      if (!formData.mutualSupport.trim())
        newErrors.mutualSupport =
          "Please describe how you can support each other";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: string, value: string | any[]) => {
    setFormData({ ...formData, [field]: value });
    if (errors[field]) {
      setErrors({ ...errors, [field]: "" });
    }
  };

  const handleCheckboxChange = (option: string, checked: boolean) => {
    const updatedTypes = checked
      ? [...formData.partnershipTypes, option]
      : formData.partnershipTypes.filter((type) => type !== option);

    handleInputChange("partnershipTypes", updatedTypes);
  };

  const nextStep = () => {
    if (validateStep(currentStep) && currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    if (validateStep(currentStep)) {
      console.log("Partnership form submitted:", formData);
      setIsSubmitted(true);

      setTimeout(() => {
        setIsSubmitted(false);
        setIsOpen(false);
        setCurrentStep(1);
        setFormData({
          fullName: "",
          organizationName: "",
          email: "",
          phone: "",
          websiteLinks: "",
          partnershipTypes: [],
          goals: "",
          mutualSupport: "",
          comments: "",
        });
        setErrors({});
      }, 3000);
    }
  };

  const isStepComplete = (step: number) => {
    if (step === 1) {
      return (
        formData.fullName &&
        formData.organizationName &&
        formData.email &&
        formData.phone
      );
    } else if (step === 2) {
      return (
        formData.partnershipTypes.length > 0 &&
        formData.goals &&
        formData.mutualSupport
      );
    }
    return step < currentStep;
  };

  if (isSubmitted) {
    return (
      <Sheet open={true} onOpenChange={() => {}}>
        <SheetContent className="w-full max-w-md mx-auto">
          <div className="flex flex-col items-center justify-center text-center py-16 px-8">
            <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mb-8">
              <Check className="h-12 w-12 text-green-500" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              We've received your application!
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              We will process it and reach out to you in a few days.
            </p>
          </div>
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <button className="bg-[#1e8e9d] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#1e8e9d]/90 transition-colors text-lg inline-flex items-center">
          <Handshake className="mr-2 h-5 w-5" />
          Partner With Us
        </button>
      </SheetTrigger>

      <SheetContent
        className="w-full max-w-2xl overflow-y-auto p-0"
        side="right"
      >
        <div className="px-8 py-8 h-full">
          {/* Header */}
          <SheetHeader className="mb-10">
            <SheetTitle className="text-3xl font-bold text-gray-900 text-left">
              Partnership Application
            </SheetTitle>
          </SheetHeader>

          {/* Progress Steps */}
          <div className="flex items-center justify-between mb-12 px-4">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-200 ${
                      currentStep === step.id
                        ? "bg-[#5da4ae] text-white shadow-lg"
                        : isStepComplete(step.id)
                        ? "bg-green-500 text-white shadow-md"
                        : "bg-gray-100 text-gray-400 border-2 border-gray-200"
                    }`}
                  >
                    {isStepComplete(step.id) && currentStep !== step.id ? (
                      <Check className="w-5 h-5" />
                    ) : (
                      step.id
                    )}
                  </div>
                  <div className="text-center mt-3 max-w-[80px]">
                    <p
                      className={`text-xs font-medium leading-tight ${
                        currentStep === step.id
                          ? "text-[#5da4ae]"
                          : isStepComplete(step.id)
                          ? "text-green-600"
                          : "text-gray-400"
                      }`}
                    >
                      {step.title}
                    </p>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`w-16 h-0.5 mx-4 transition-colors duration-200 ${
                      isStepComplete(step.id) ? "bg-green-400" : "bg-gray-200"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Form Content */}
          <div className="space-y-8 flex-1">
            {/* Step 1: Basic Information */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <div className="border-b border-gray-100 pb-4 mb-8">
                  <h3 className="text-xl font-semibold text-gray-900">
                    Basic Information
                  </h3>
                  <p className="text-gray-500 mt-1">
                    Please provide your contact details
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) =>
                        handleInputChange("fullName", e.target.value)
                      }
                      placeholder="Enter your full name"
                      className="w-full h-12 px-4 border border-gray-200 text-gray-600 rounded-sm focus:border-[#1e8e9d] focus:ring-2 focus:ring-[#1e8e9d]/20 outline-none transition-colors"
                    />
                    {errors.fullName && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      Organization / Company Name *
                    </label>
                    <input
                      type="text"
                      value={formData.organizationName}
                      onChange={(e) =>
                        handleInputChange("organizationName", e.target.value)
                      }
                      placeholder="Enter your organization name"
                      className="w-full h-12 px-4 border border-gray-200 text-gray-600 rounded-sm focus:border-[#1e8e9d] focus:ring-2 focus:ring-[#1e8e9d]/20 outline-none transition-colors"
                    />
                    {errors.organizationName && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.organizationName}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      placeholder="your@email.com"
                      className="w-full h-12 px-4 border border-gray-200 text-gray-600 rounded-sm focus:border-[#1e8e9d] focus:ring-2 focus:ring-[#1e8e9d]/20 outline-none transition-colors"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        handleInputChange("phone", e.target.value)
                      }
                      placeholder="(555) 123-4567"
                      className="w-full h-12 px-4 border border-gray-200 text-gray-600 rounded-sm focus:border-[#1e8e9d] focus:ring-2 focus:ring-[#1e8e9d]/20 outline-none transition-colors"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-black mb-2">
                    Website or Social Media Links
                  </label>
                  <textarea
                    value={formData.websiteLinks}
                    onChange={(e) =>
                      handleInputChange("websiteLinks", e.target.value)
                    }
                    placeholder="Share your website, LinkedIn, social media profiles, etc."
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-200 text-gray-600 rounded-sm focus:border-[#1e8e9d] focus:ring-2 focus:ring-[#1e8e9d]/20 outline-none transition-colors resize-none"
                  />
                </div>
              </div>
            )}

            {/* Step 2: Partnership Details */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <div className="border-b border-gray-100 pb-4 mb-8">
                  <h3 className="text-xl font-semibold text-gray-900">
                    Partnership Details
                  </h3>
                  <p className="text-gray-500 mt-1">
                    Tell us about your partnership goals
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-black mb-4">
                    Type of Partnership You're Interested In *
                  </label>
                  <div className="space-y-3">
                    {partnershipOptions.map((option) => (
                      <div
                        key={option}
                        className="flex items-center p-4 border border-gray-200 rounded-sm hover:bg-gray-50 transition-colors cursor-pointer"
                        onClick={() =>
                          handleCheckboxChange(
                            option,
                            !formData.partnershipTypes.includes(option)
                          )
                        }
                      >
                        <input
                          type="checkbox"
                          checked={formData.partnershipTypes.includes(option)}
                          onChange={(e) =>
                            handleCheckboxChange(option, e.target.checked)
                          }
                          className="h-4 w-4 text-[#1e8e9d] border-gray-300 rounded focus:ring-[#1e8e9d]"
                        />
                        <label className="ml-3 text-black cursor-pointer">
                          {option}
                        </label>
                      </div>
                    ))}
                  </div>
                  {errors.partnershipTypes && (
                    <p className="text-red-500 text-sm mt-2">
                      {errors.partnershipTypes}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    What do you hope to achieve through this partnership? *
                  </label>
                  <textarea
                    value={formData.goals}
                    onChange={(e) => handleInputChange("goals", e.target.value)}
                    placeholder="Describe your goals, vision, and what you hope to accomplish together..."
                    rows={5}
                    className="w-full px-4 py-3 border text-gray-600 border-gray-200 rounded-sm focus:border-[#1e8e9d] focus:ring-2 focus:ring-[#1e8e9d]/20 outline-none transition-colors resize-none"
                  />
                  {errors.goals && (
                    <p className="text-red-500 text-sm mt-1">{errors.goals}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    How can we best support each other? *
                  </label>
                  <textarea
                    value={formData.mutualSupport}
                    onChange={(e) =>
                      handleInputChange("mutualSupport", e.target.value)
                    }
                    placeholder="Share ideas about resources, expertise, networks, or other ways we can collaborate..."
                    rows={5}
                    className="w-full px-4 py-3 border text-gray-600 border-gray-200 rounded-sm focus:border-[#1e8e9d] focus:ring-2 focus:ring-[#1e8e9d]/20 outline-none transition-colors resize-none"
                  />
                  {errors.mutualSupport && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.mutualSupport}
                    </p>
                  )}
                </div>
              </div>
            )}

            {/* Step 3: Additional Information */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <div className="border-b border-gray-100 pb-4 mb-8">
                  <h3 className="text-xl font-semibold text-gray-900">
                    Additional Information
                  </h3>
                  <p className="text-gray-500 mt-1">
                    Any final details or documents
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Upload your logo or relevant documents (if any)
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-[#1e8e9d] hover:bg-gray-50/50 transition-all duration-200">
                    <Upload className="mx-auto h-10 w-10 text-gray-400 mb-4" />
                    <p className="text-sm text-gray-700 font-medium mb-1">
                      Drag and drop files here, or click to browse
                    </p>
                    <p className="text-xs text-gray-500 mb-4">
                      Supported formats: PDF, PNG, JPG, DOC (Max 10MB)
                    </p>
                    <button
                      type="button"
                      className="px-4 py-2 border border-gray-300 rounded-sm text-gray-700 hover:border-[#1e8e9d] hover:text-[#1e8e9d] transition-colors"
                    >
                      Choose Files
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Any comments, questions, or ideas you'd like to share?
                  </label>
                  <textarea
                    value={formData.comments}
                    onChange={(e) =>
                      handleInputChange("comments", e.target.value)
                    }
                    placeholder="Share any additional thoughts, questions, or creative ideas for our partnership..."
                    rows={5}
                    className="w-full px-4 py-3 border text-gray-600 border-gray-200 rounded-sm focus:border-[#1e8e9d] focus:ring-2 focus:ring-[#1e8e9d]/20 outline-none transition-colors resize-none"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-8 border-t border-gray-100 mt-8">
            <button
              onClick={prevStep}
              disabled={currentStep === 1}
              className="flex items-center px-6 py-3 border border-gray-300 text-gray-600 rounded-sm hover:text-gray-900 hover:border-gray-400 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              Previous
            </button>

            <div className="flex space-x-3">
              <button
                onClick={() => setIsOpen(false)}
                className="px-6 py-3 border border-gray-300 text-gray-600 rounded-sm hover:text-gray-900 hover:border-gray-400 transition-colors"
              >
                Cancel
              </button>

              {currentStep < 3 ? (
                <button
                  onClick={nextStep}
                  className="bg-[#1e8e9d] hover:bg-[#1e8e9d]/90 text-white px-6 py-3 rounded-sm flex items-center shadow-sm transition-colors"
                >
                  Next
                  <ChevronRight className="w-4 h-4 ml-2" />
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  className="bg-[#1e8e9d] hover:bg-[#1e8e9d]/90 text-white px-8 py-3 rounded-sm shadow-sm transition-colors"
                >
                  Submit Application
                </button>
              )}
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
