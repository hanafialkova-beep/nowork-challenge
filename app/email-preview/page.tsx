export default function EmailPreviewPage() {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
      <div className="bg-gray-800 px-6 py-3 flex items-center justify-between border-b border-gray-700">
        <div className="flex items-center gap-2">
          <span className="text-white font-bold text-sm">NO</span>
          <span className="text-orange-400 font-bold text-sm">WORK</span>
          <span className="text-gray-400 text-sm ml-2">— Email Preview</span>
        </div>
        <div className="flex gap-2 text-xs text-gray-400">
          <span className="bg-gray-700 px-2 py-1 rounded">Ecomail template</span>
        </div>
      </div>
      <div className="flex-1 p-4">
        <iframe
          src="/email-template.html"
          className="w-full h-full rounded-lg border border-gray-700"
          style={{ minHeight: "calc(100vh - 80px)" }}
          title="Email template preview"
        />
      </div>
    </div>
  );
}
