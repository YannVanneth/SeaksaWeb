import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "../../components/ui/input-otp";

export function OTP() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-50">
      <div className="bg-white p-6 shadow-lg rounded-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">
          Enter OTP Code
        </h2>
        <p className="text-sm text-gray-600 text-center mb-6">
          We've sent a code to your email. Please enter it below.
        </p>
        <InputOTP maxLength={6}>
          <div className="flex justify-center gap-4 mb-6">
            <InputOTPGroup>
              <InputOTPSlot
                index={0}
                className="w-12 h-12 border rounded-md text-center text-lg font-medium text-gray-800 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <InputOTPSlot
                index={1}
                className="w-12 h-12 border rounded-md text-center text-lg font-medium text-gray-800 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <InputOTPSlot
                index={2}
                className="w-12 h-12 border rounded-md text-center text-lg font-medium text-gray-800 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </InputOTPGroup>
            <InputOTPSeparator>
              <span className="text-lg font-medium text-gray-500 items-center">
                -
              </span>
            </InputOTPSeparator>
            <InputOTPGroup>
              <InputOTPSlot
                index={3}
                className="w-12 h-12 border rounded-md text-center text-lg font-medium text-gray-800 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <InputOTPSlot
                index={4}
                className="w-12 h-12 border rounded-md text-center text-lg font-medium text-gray-800 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <InputOTPSlot
                index={5}
                className="w-12 h-12 border rounded-md text-center text-lg font-medium text-gray-800 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </InputOTPGroup>
          </div>
        </InputOTP>
        <button className="w-full py-2 px-4 bg-blue-600 text-white rounded-md font-medium text-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1">
          Verify Code
        </button>
        <p className="mt-4 text-sm text-gray-500 text-center">
          Didn't receive the code?{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Resend
          </a>
        </p>
      </div>
    </div>
  );
}
