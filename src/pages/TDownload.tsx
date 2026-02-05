import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const DMG_URL = "#"; // Replace with .dmg download URL

const TDownload = () => (
  <div className="min-h-screen bg-[#0a0a0f] text-gray-100 flex items-center justify-center px-4">
    <SEO
      title="Download T"
      description="Download T for Mac. Set goals, delegate to AI, approve results."
    />
    <div className="max-w-md w-full text-center">
      <h1 className="text-3xl font-bold mb-2">Download <span className="text-orange-400 font-bold">T</span></h1>
      <p className="text-gray-400 mb-8">Free during beta. No account needed.</p>

      <a href={DMG_URL}>
        <Button className="bg-orange-500 hover:bg-orange-600 text-white text-lg font-semibold px-8 py-6 rounded-xl w-full">
          <Download className="w-5 h-5 mr-2" /> Download for Mac (.dmg)
        </Button>
      </a>

      <div className="mt-10 text-left bg-white/[0.03] border border-white/10 rounded-xl p-5">
        <p className="text-sm font-medium text-gray-200 mb-3">First time opening?</p>
        <p className="text-sm text-gray-400">
          The app isn't signed with an Apple Developer certificate yet. On first launch, macOS will block it. To open it:
        </p>
        <ol className="mt-3 space-y-2 text-sm text-gray-400 list-decimal list-inside">
          <li>Right-click the app and choose <span className="text-gray-200">Open</span></li>
          <li>Or go to <span className="text-gray-200">System Settings &rarr; Privacy &amp; Security</span> and click <span className="text-gray-200">Open Anyway</span></li>
        </ol>
        <p className="text-xs text-gray-500 mt-4">You only need to do this once.</p>
      </div>

      <p className="text-xs text-gray-600 mt-6">macOS 13+ &middot; Apple Silicon &amp; Intel</p>
    </div>
  </div>
);

export default TDownload;
