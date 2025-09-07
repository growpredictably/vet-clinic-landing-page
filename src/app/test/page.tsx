export default function TestPage() {
  return (
    <div className="min-h-screen bg-blue-500 text-white p-8">
      <h1 className="text-4xl font-bold mb-4">CSS Test Page</h1>
      <p className="text-xl mb-4">If you can see this with blue background and white text, Tailwind CSS is working!</p>
      <div className="bg-white text-blue-500 p-4 rounded-lg">
        <p>This should be a white box with blue text</p>
      </div>
    </div>
  );
}