export default function Footer() {
  return (
    <footer className="bg-gray-100 py-6 mt-12">
      <div className="container mx-auto text-center text-sm text-gray-600">
        © {new Date().getFullYear()} GodofPOS. All rights reserved.
      </div>
    </footer>
  );
}
