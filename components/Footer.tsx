export default function Footer() {
  return (
    <footer className="bg-blue-950 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">

        <div>
          <h2 className="text-3xl font-bold mb-4">
            ERGOTRIX
          </h2>

          <p>
            Engineering Excellence.
            <br />
            Innovation Delivered.
          </p>
        </div>

        <div>
          <h3 className="font-bold mb-4">Quick Links</h3>

          <ul className="space-y-2">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Industries</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-4">Services</h3>

          <ul className="space-y-2">
            <li>Product Design</li>
            <li>Engineering Services</li>
            <li>Manufacturing Support</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-4">
            Contact Information
          </h3>

          <p>Email:</p>
          <p>info@ergotrix.com</p>

          <br />

          <p>Monday - Saturday</p>
          <p>9 AM - 6 PM</p>

          <br />

          <p>Hyderabad, Telangana</p>
        </div>
      </div>

      <div className="text-center mt-12 border-t border-gray-700 pt-6">
        © 2026 ERGOTRIX Engineering Solutions Pvt Ltd.
      </div>
    </footer>
  );
}