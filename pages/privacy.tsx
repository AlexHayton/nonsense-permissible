import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col">
      <Navigation />
      <main className="flex-grow pt-20 px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="py-12">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>

          <div className="prose max-w-none space-y-6 text-black/80">
            <p>
              At Nonsense Permissible, we value your privacy and are committed
              to protecting your personal information. This Privacy Policy
              explains how we collect, use, and safeguard your data when you
              visit our website.
            </p>

            <h2 className="text-2xl font-semibold text-black mt-8 mb-4">
              Information We Collect
            </h2>
            <p>
              We collect personal information that you voluntarily provide to us
              when you contact us via email. This may include your name, email
              address, and the contents of your message.
            </p>

            <h2 className="text-2xl font-semibold text-black mt-8 mb-4">
              How We Use Your Information
            </h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Respond to your inquiries and provide customer support</li>
              <li>
                Send you updates and marketing communications (if you have opted
                in)
              </li>
              <li>Improve our website and services</li>
            </ul>

            <h2 className="text-2xl font-semibold text-black mt-8 mb-4">
              Cookies and Tracking Technologies
            </h2>
            <p>
              We use cookies and similar tracking technologies to track the
              activity on our service and hold certain information. You can
              instruct your browser to refuse all cookies or to indicate when a
              cookie is being sent.
            </p>

            <h2 className="text-2xl font-semibold text-black mt-8 mb-4">
              Subprocessors
            </h2>
            <p>
              We use the following third-party service providers (subprocessors)
              to process data on our behalf. These providers have access to your
              data only to perform these tasks on our behalf and are obligated
              not to disclose or use it for any other purpose.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Sentry:</strong> We use Sentry for error tracking and
                monitoring to help us identify and fix issues with our website.
              </li>
              <li>
                <strong>Vercel:</strong> We use Vercel Analytics and Speed
                Insights to analyze website traffic and performance. This helps
                us understand how our website is used and improve the user
                experience.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold text-black mt-8 mb-4">
              Third-Party Services
            </h2>
            <p>
              We may employ third-party companies and individuals to facilitate
              our service, to provide the service on our behalf, to perform
              service-related services, or to assist us in analyzing how our
              service is used.
            </p>

            <h2 className="text-2xl font-semibold text-black mt-8 mb-4">
              Contact Us
            </h2>
            <p>
              If you have any questions about this Privacy Policy, please
              contact us.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
