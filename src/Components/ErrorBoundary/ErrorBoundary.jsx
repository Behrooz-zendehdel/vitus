import React from "react";
import { FaExclamationTriangle, FaHome, FaSyncAlt } from "react-icons/fa";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  componentDidCatch(error, errorInfo) {
    console.error("Error caught by boundary:", error, errorInfo);
  }
  handleRefresh = () => window.location.reload();
  handleGoHome = () => window.location.href = "/";
  render() {
    const lang = document.documentElement.lang || 'fa';
    return this.state.hasError ? (
      <div className="min-h-screen bg-white flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 text-center border border-primary">
          <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <FaExclamationTriangle className="text-3xl text-primary" />
          </div>
          <h1 className="text-2xl font-bold text-primary mb-4">
            {lang === 'fa' ? 'خطایی رخ داده است' : 'An error occurred'}
          </h1>
          <p className="text-gray-600 mb-8 leading-relaxed">
            {lang === 'fa'
              ? 'متأسفانه مشکلی در بارگذاری صفحه پیش آمده است. لطفاً دوباره تلاش کنید.'
              : 'Sorry, there was a problem loading the page. Please try again.'}
          </p>
          <div className="space-y-4">
            <button
              onClick={this.handleRefresh}
              className="w-full bg-primary text-white py-3 px-6 rounded-xl font-medium transition-all duration-300 hover:bg-secondary flex items-center justify-center gap-2"
            >
              <FaSyncAlt className="text-sm" />
              {lang === 'fa' ? 'تلاش مجدد' : 'Retry'}
            </button>
            <button
              onClick={this.handleGoHome}
              className="w-full bg-gray-100 text-primary py-3 px-6 rounded-xl font-medium transition-all duration-300 hover:bg-secondary hover:text-white flex items-center justify-center gap-2"
            >
              <FaHome className="text-sm" />
              {lang === 'fa' ? 'بازگشت به خانه' : 'Go Home'}
            </button>
          </div>
        </div>
      </div>
    ) : this.props.children;
  }
}

export default ErrorBoundary; 