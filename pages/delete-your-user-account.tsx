import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function DeleteYourUserAccount() {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col">
      <Navigation />
      <main className="flex-grow pt-20 px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="py-12">
          <h1 className="text-4xl font-bold mb-8">
            Delete Your Birdamp Account
          </h1>

          <div className="prose max-w-none space-y-6 text-black/80">
            <p>
              If you would like to delete your Birdamp user account and all
              associated data, please follow the instructions below.
            </p>

            <h2 className="text-2xl font-semibold text-black mt-8 mb-4">
              How to Request Account Deletion
            </h2>
            <p>
              To initiate the account deletion process, please send an email to
              our support team at:
            </p>
            <p>
              <a
                href="mailto:deleteme@nonsensepermissible.com"
                className="text-blue-600 hover:underline"
              >
                deleteme@nonsensepermissible.com
              </a>
            </p>
            <p>
              Please include the word <strong>DELETE</strong> in the subject
              line or the body of the email.
            </p>

            <h2 className="text-2xl font-semibold text-black mt-8 mb-4">
              What Happens Next?
            </h2>
            <p>
              Once we receive your request, our team will process the deletion
              of your account and all associated personal data within 30 days.
              You will receive a confirmation email once the process is
              complete.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
