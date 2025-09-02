import { SidebarTrigger } from "../../components/ui/sidebar";

export function ChatHeader() {
  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="flex h-14 items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <SidebarTrigger />
          <h1 className="text-lg font-semibold">EbonixAI Chat</h1>
        </div>
      </div>
    </header>
  );
}